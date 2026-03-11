import { Button } from '../Button/Button';
import React from 'react';
import { GameResultProps } from '../../Types/gameResult';
import { isResultObject } from '../../Utils/typeGuards';
import { trackEvent } from '../../Utils/tracking';

const GameResult = ({ gameType, result, solution = '', gameResultTexts, linkBack, successLottie }: GameResultProps) => {
  if (!result) return null;
  let showImage = false;
  let showAnimation = false;
  const resultData = gameResultTexts[result];

  let title = '';
  let subtitle = '';
  let text = '';

  if (isResultObject(resultData)) {
    title = resultData.title;
    subtitle = resultData.subtitle || '';
    text = resultData.text || '';
  } else {
    title = resultData;
  }

  if (subtitle.includes('{solution}')) {
    subtitle = subtitle.replace('{solution}', solution);
  }

  if (text.includes('{solution}')) {
    text = text.replace('{solution}', solution);
  }

  if (result === 'gameCompletedLotGranted') {
    showImage = true;
    showAnimation = true;
  }

  if (result === 'gameCompletedAlreadyGranted') {
    showAnimation = true;
  }

  trackEvent({ action: 'game_result' + (gameType ? '_' + gameType : ''), label: result });

  return (
    <div className={'kl-game-result'}>
      {showImage && (
        <div className={'kl-game-result__image'}>
          <img
            src={'/dlo/Components/DanskeSpil/Domain/Feature.KlubLotto/Graphics/Game/ticket-celebration.svg'}
            alt={''}
          />
        </div>
      )}

      <div className={'kl-game-result__title'}>{title}</div>
      {subtitle && <div className={'kl-game-result__subtitle'} dangerouslySetInnerHTML={{ __html: subtitle }}></div>}
      <div className={'kl-game-result__text'} dangerouslySetInnerHTML={{ __html: text }}></div>
      <div className={'kl-game-result__background'}>
        {showAnimation && successLottie?.src && (
          /* @ts-expect-error - lottie-player is a custom web component not recognized by TypeScript */
          <lottie-player src={successLottie.src} autoplay={true} loop={false} />
        )}
      </div>
      <div className={'kl-game-result__cta'}>
        <Button
          tracking={{ action: 'game_result' + (gameType ? '_' + gameType : '') }}
          href={linkBack?.url}
          inverted={true}
        >
          {linkBack?.text}
        </Button>
      </div>
    </div>
  );
};

export default GameResult;
