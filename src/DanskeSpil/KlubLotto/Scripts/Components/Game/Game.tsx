import React, { useRef, useState } from 'react';
import GameResult from '../GameResult/GameResult';
import { useGameFlow } from '../../Hooks/useGameFlow';
import { Spinner } from '../Spinner/Spinner';
import { ErrorDefaultOutput } from '../ErrorDefaultOutput/ErrorDefaultOutput';
import { getUrlParam } from '../../Utils/urlParams';
import { trackEvent } from '../../Utils/tracking';
import { GameDataSettings } from '../../Types/DataSettings/game';

export const Game = ({ gameType, gameResultTexts, linkBack, successLottie }: GameDataSettings) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [gameDate, setGameDate] = useState(getUrlParam('date') || undefined);
  const { iframeUrl, isLoading, error, solution, result } = useGameFlow(gameType, gameDate, setGameDate);

  if (isLoading) {
    return (
      <div className={`kl-game kl-game--${gameType}`}>
        <Spinner className={`kl-game__spinner kl-game__spinner--${gameType}`} variant={gameType} />
      </div>
    );
  }

  if (error) {
    trackEvent({ action: 'game_playing_' + gameType, label: 'error' });
    return (
      <div className={`kl-game kl-game--${gameType}`}>
        <ErrorDefaultOutput className={'kl-game__error'} variant={'light'} />
      </div>
    );
  }

  if (iframeUrl) {
    return (
      <div className={`kl-game kl-game--${gameType}`}>
        <iframe ref={iframeRef} src={iframeUrl} className={'kl-game__iframe'} />
      </div>
    );
  }

  if (result) {
    return (
      <div className={`kl-game kl-game--${gameType}`}>
        <GameResult
          result={result}
          gameType={gameType}
          gameResultTexts={gameResultTexts}
          solution={solution}
          linkBack={linkBack}
          successLottie={successLottie}
        />
      </div>
    );
  }
};
