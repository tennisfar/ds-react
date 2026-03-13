import React from 'react';
import { Button } from '../Button/Button';
import { PopupProps } from '../../Types/popup';

const PopupError = ({ data, handleModalClose }: PopupProps) => {
  const { title, subtitle, text, image, buttons = [], ctaLabel = 'Okay' } = data;

  if (buttons.length === 0) {
    buttons.push({
      variant: 'secondary',
      ctaLabel,
    });
  }

  return (
    <>
      {image && <img className={'kl-popup-error__image'} src={image} alt={''}/>}
      {title && <div className={'kl-popup-error__title'}>{title}</div>}
      {subtitle && <div className={'kl-popup-error__subtitle'}>{subtitle}</div>}
      {text && <div className={'kl-popup-error__text'} dangerouslySetInnerHTML={{ __html: text }}></div>}

      <div className={'kl-popup-error__buttons'}>
        {buttons?.map((button, index) => {
          return (
            <Button
              key={index}
              tracking={{ action: 'popup_error' }}
              href={button.href ? button.href : undefined}
              variant={button.variant}
              onClick={() => {
                button.cb?.();
                handleModalClose();
              }}
              inverted={button.inverted}
            >
              {button.ctaLabel}
            </Button>
          );
        })}
      </div>
    </>
  );
};

export default PopupError;