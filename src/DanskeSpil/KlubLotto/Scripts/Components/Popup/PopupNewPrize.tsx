import React from 'react';
import { Button } from '../Button/Button';
import { PopupProps } from '../../Types/popup';
import { CelebrateBackground } from '../CelebrateBackground/CelebrateBackground';

const PopupNewPrize = ({ data, handleModalClose }: PopupProps) => {
  const { title, image, buttons = [], ctaLabel = 'Luk' } = data;

  if (buttons.length === 0) {
    buttons.push({
      variant: 'secondary',
      ctaLabel,
    });
  }

  return (
    <>
      {title && <div className={'kl-popup-new-prize__title'}>{title}</div>}

      {image && <img src={image} alt={''} className={'kl-popup-new-prize__image'} />}

      <div className={'kl-popup-new-prize__footer'}>
        {buttons?.map((button, index) => {
          return (
            <Button
              key={index}
              tracking={{ action: 'popup_newPrize' }}
              onClick={() => {
                button.cb?.();
                handleModalClose();
              }}
              href={button.href}
              variant={button.variant}
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

export default PopupNewPrize;
