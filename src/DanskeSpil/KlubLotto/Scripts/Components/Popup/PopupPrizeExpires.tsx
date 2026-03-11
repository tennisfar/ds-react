import React from 'react';
import { Button } from '../Button/Button';
import { PopupProps } from '../../Types/popup';
import { CelebrateBackground } from '../CelebrateBackground/CelebrateBackground';
import { Countdown } from '../Countdown/Countdown';

const PopupPrizeExpires = ({ data, handleModalClose }: PopupProps) => {
  const { title, image, buttons = [], ctaLabel = 'Luk', expireDate } = data;

  if (buttons.length === 0) {
    buttons.push({
      variant: 'secondary',
      ctaLabel,
    });
  }

  return (
    <>
      {title && <div className={'kl-popup-prize-expires__title'}>{title}</div>}
      {image && <img src={image} alt={''} className={'kl-popup-prize-expires__image'}/>}

      <div className={'kl-popup-prize-expires__countdown'}>
        Udløber om
        <Countdown dueDate={expireDate}/>
      </div>

      <div
        className={'kl-popup-prize-expires__footer'}>
        {buttons?.map((button, index) => {
          return (
            <Button
              key={index}
              tracking={{ action: 'popup_prizeExpires' }}
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

      <CelebrateBackground/>
    </>
  );
};

export default PopupPrizeExpires;