import React from 'react';
import { Button } from '../Button/Button';
import { PopupProps } from '../../Types/popup';
import { CelebrateBackground } from '../CelebrateBackground/CelebrateBackground';

const PopupWelcome = ({ data, handleModalClose }: PopupProps) => {
  const { title, text, buttons = [], ctaLabel = 'Luk' } = data;

  if (buttons.length === 0) {
    buttons.push({
      variant: 'secondary',
      ctaLabel,
    });
  }

  return (
    <>
      {title && <div className={'kl-popup-welcome__title'}>{title}</div>}

      {text && <div className={'kl-popup-welcome__text'} dangerouslySetInnerHTML={{ __html: text }}></div>}

      <div className={'kl-popup-welcome__footer'}>
        {buttons?.map((button, index) => {
          return (
            <Button
              key={index}
              tracking={{ action: 'popup_welcome' }}
              onClick={() => {
                button.cb?.();
                handleModalClose();
              }}
              variant={button.variant || 'secondary'}
              inverted={button.inverted}
            >
              {button.ctaLabel}
            </Button>
          );
        })}
      </div>

      <CelebrateBackground />
    </>
  );
};

export default PopupWelcome;
