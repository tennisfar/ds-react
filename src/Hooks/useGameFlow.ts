import { useState, useEffect } from 'react';
import useGameLauncherData from './useGameLauncherData';
import useMarkGameAsCompleted from './useMarkGameAsCompleted';
import { output } from '../Utils/output';
import { GamePostMessageState, GameType } from '../Types/game';
import { ResultState } from '../Types/useGameFlow';
import { trackEvent } from '../Utils/tracking';
import { MarkGameCompletedStatusApiResponse } from '../Types/ApiResponse/games';

export const useGameFlow = (gameType: GameType, gameDate: string | undefined, setGameDate: React.Dispatch<React.SetStateAction<string | undefined>>) => {
  const [gameState, setGameState] = useState<GamePostMessageState>();
  const [gameLauncherId, setGameLauncherId] = useState<string | undefined>();
  const [iframeUrl, setIframeUrl] = useState<string | undefined>();
  const [lotStatus, setLotStatus] = useState<MarkGameCompletedStatusApiResponse | undefined>();
  const [solution, setSolution] = useState<string | undefined>('');

  const [result, setResult] = useState<ResultState>();

  const gameLauncher = useGameLauncherData(gameType, 'web', gameDate);
  const markCompleted = useMarkGameAsCompleted();
  const [hasTriggeredMarkCompleted, setHasTriggeredMarkCompleted] = useState(false);

  useEffect(() => {
    if (result) {
      setIframeUrl(undefined);
    }
  }, [result]);

  useEffect(() => {
    if (result) return;

    if (!lotStatus) return;
    if (gameState === 'gameCompleted' || gameState === 'gameFailed') {
      setResult((gameState + lotStatus) as ResultState);
    }
  }, [result, gameState, lotStatus]);

  // Handle game launcher response
  useEffect(() => {
    if (result) return;

    if (gameLauncher.data?.completed) {
      setResult('gameAlreadyCompleted');
      return;
    }

    if (gameLauncher.data?.id) {
      if (!gameDate && gameLauncher.data.launchGameDate) {
        setGameDate(gameLauncher.data.launchGameDate);
      }

      setGameLauncherId(gameLauncher.data.id);
      setIframeUrl(gameLauncher.data.url);
    }
  }, [result, gameLauncher.data]);

  // Listen for postMessage events from the iframe
  useEffect(() => {
    if (!iframeUrl) return;

    const handleMessage = (event: MessageEvent) => {
      const eventOrigin = event.origin;
      const gameOrigin = new URL(iframeUrl as string).origin;

      if (eventOrigin === gameOrigin) {
        let data = event.data;

        if (typeof data !== 'object') {
          try {
            data = JSON.parse(data);
          } catch {
            // Something is wrong with the data format
            // TODO: Handle this more gracefully
            console.error('Received invalid data format from game iframe:', data);
          }
        }

        if (!(typeof data === 'object' && data !== null)) {
          // Something is wrong with the data format
          // TODO: Handle this more gracefully
          console.error('Received invalid data format from game iframe:', data);
        }

        const gameState = data.event as GamePostMessageState;
        setGameState(gameState);

        if (data.metadata?.solution) {
          setSolution(data.metadata.solution);
          output(`Game solution: ${data.metadata.solution}`);
        }

        output(`Game state: ${gameState}`);

        if ([
          'gameStarted',
          'gameCompleted',
          'gameFailed',
          'gameClose'
        ].includes(gameState) && data.lotStatus) {
          trackEvent({ action: 'game_response' + (gameType ? '_' + gameType : ''), label: gameState });
        }
      }
    };

    window.addEventListener('message', handleMessage);

    return () => {
      window.removeEventListener('message', handleMessage);
    };
  }, [iframeUrl]);

  // Mark game as completed when quiz is completed
  useEffect(() => {
    if (result || hasTriggeredMarkCompleted) return;

    if ((gameState === 'gameCompleted' || gameState === 'gameFailed') && gameLauncherId) {
      setHasTriggeredMarkCompleted(true); // Set flag before mutation
      const success = gameState === 'gameCompleted';
      markCompleted.mutate({ gameId: gameType, success, launchGameId: gameLauncherId, launchGameDate: gameDate || '' });
    }
  }, [result, hasTriggeredMarkCompleted, gameState, markCompleted, gameLauncherId, gameType, gameDate]);

  // Handle mark completed response
  useEffect(() => {
    if (result) return;

    if (markCompleted.isSuccess) {
      setLotStatus(markCompleted.data?.status || 'LotNotGranted');
    }
  }, [result, markCompleted]);

  return {
    iframeUrl,
    isLoading: gameLauncher.isLoading || markCompleted.isPending,
    error: gameLauncher.isError || markCompleted.isError,
    solution,
    result,
  };
};
