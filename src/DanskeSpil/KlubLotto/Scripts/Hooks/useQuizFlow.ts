import { useState, useEffect } from 'react';
import useGameLauncherData from './useGameLauncherData';
import { useQuizQuestion, QuizQuestionResult } from './useQuizQuestionData';
import useMarkGameAsCompleted from './useMarkGameAsCompleted';
import { GamePostMessageState, GameType } from '../Types/game';
import { ResultState } from '../Types/useGameFlow';
import { trackEvent } from '../Utils/tracking';
import { MarkGameCompletedStatusApiResponse } from '../Types/ApiResponse/games';
import { QuizQuestionCurrentApiResponse } from '../Types/ApiResponse/quiz';

export type QuizFlowResult = {
  currentQuestion?: QuizQuestionCurrentApiResponse;
  isLoading: boolean;
  error: boolean;
  submitAnswer: (selectedOption: string | null) => void;
  solution: string;
  result?: ResultState;
};

export const useQuizFlow = (
  gameType: GameType,
  gameDate: string | undefined,
  setGameDate: React.Dispatch<React.SetStateAction<string | undefined>>
): QuizFlowResult => {
  const [gameLauncherId, setGameLauncherId] = useState<string | undefined>();
  const [lotStatus, setLotStatus] = useState<MarkGameCompletedStatusApiResponse | undefined>();
  const [currentQuestionKey, setCurrentQuestionKey] = useState<number | undefined>();
  const [answer, setAnswer] = useState<number | undefined>();
  const [solution, setSolution] = useState<string>('');

  const [result, setResult] = useState<ResultState>();
  const [gameState, setGameState] = useState<GamePostMessageState>();

  const gameLauncher = useGameLauncherData(gameType, 'web', gameDate);
  const quizQuestion: QuizQuestionResult = useQuizQuestion(currentQuestionKey, answer, gameDate);
  const markCompleted = useMarkGameAsCompleted();
  const [hasTriggeredMarkCompleted, setHasTriggeredMarkCompleted] = useState(false); // Add this flag

  useEffect(() => {
    if (result) return;

    if (!lotStatus) return;
    if (gameState === 'gameCompleted' || gameState === 'gameFailed') {
      trackEvent({ action: 'game_response_quiz', label: gameState });
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
    }
  }, [result, gameLauncher.data]);

  // Handle quiz question response
  useEffect(() => {
    if (result) return;

    if (quizQuestion.data) {
      if (quizQuestion.data.completed) {
        if (quizQuestion.data.status) {
          setGameState(quizQuestion.data.status.correct ? 'gameCompleted' : 'gameFailed');
        } else {
          setResult('gameAlreadyCompleted');
        }
      }
    }
  }, [result, quizQuestion.data, quizQuestion.isError]);

  // Mark game as completed when quiz is completed
  useEffect(() => {
    if (result || hasTriggeredMarkCompleted) return;

    if ((gameState === 'gameCompleted' || gameState === 'gameFailed') && gameLauncherId) {
      setHasTriggeredMarkCompleted(true); // Set flag before mutation
      const success = gameState === 'gameCompleted';
      markCompleted.mutate({ gameId: gameType, success, launchGameId: gameLauncherId, launchGameDate: gameDate || '' });
    }
  }, [result, hasTriggeredMarkCompleted, gameState, markCompleted, gameLauncherId, gameDate, gameType]);

  // Handle mark completed response
  useEffect(() => {
    if (result) return;

    if (markCompleted.isSuccess) {
      setLotStatus(markCompleted.data?.status || 'LotNotGranted');
    }
  }, [result, markCompleted]);

  const submitAnswer = (selectedOption: string | null) => {
    if (!quizQuestion?.data?.question || !selectedOption) return; // Prevent submission if no question or option selected
    setCurrentQuestionKey(quizQuestion.data.question.key);
    setAnswer(quizQuestion.data.question.options.indexOf(selectedOption));

    const correctAnswer = quizQuestion.data.question.options[quizQuestion.data.question.correct_key];
    setSolution(correctAnswer);
  };

  return {
    currentQuestion: quizQuestion?.data?.question,
    isLoading: gameLauncher.isLoading || quizQuestion.isLoading || markCompleted.isPending,
    error: gameLauncher.isError || quizQuestion.isError || markCompleted.isError,
    submitAnswer,
    solution,
    result,
  };
};
