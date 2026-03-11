import React from 'react';
import { Button } from '../Button/Button';
import { PopupProps } from '../../Types/popup';

const PopupSimple = ({ data, handleModalClose }: PopupProps) => {
  const { title, text, buttons = [] } = data;

  if (buttons.length === 0) {
    buttons.push({
      variant: 'secondary',
      ctaLabel: 'Luk',
    });
  }

  return (
    <>
      {title && <div className={'kl-popup-simple__title'}>{title}</div>}
      {text && <div className={'kl-popup-simple__text'} dangerouslySetInnerHTML={{ __html: text }}></div>}

      {buttons?.map((button, index) => {
        return (
          <Button
            key={index}
            tracking={{ action: 'popup_simple' }}
            onClick={() => {
              button.cb?.();
              handleModalClose();
            }}
            href={button.href}
            variant={button.variant || 'secondary'}
          >
            {button.ctaLabel}
          </Button>
        );
      })}
    </>
  );
};

export default PopupSimple;
