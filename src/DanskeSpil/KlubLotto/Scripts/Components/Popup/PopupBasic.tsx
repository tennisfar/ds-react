import React from 'react';
import { Button } from '../Button/Button';
import { PopupProps } from '../../Types/popup';

const PopupBasic = ({ data, handleModalClose }: PopupProps) => {
  const { title, text, buttons = [] } = data;

  if (buttons.length === 0) {
    buttons.push({
      variant: 'secondary',
      ctaLabel: 'Luk',
    });
  }

  return (
    <>
      {title && <div className={'kl-popup-basic__title'}>{title}</div>}
      {text && <div className={'kl-popup-basic__text'} dangerouslySetInnerHTML={{ __html: text }}></div>}
      <div className={'kl-popup-basic__footer'}>
        {buttons?.map((button, index) => {
          return (
            <Button
              key={index}
              tracking={{ action: 'popup_basic' }}
              onClick={() => {
                button.cb?.();
                handleModalClose();
              }}
              variant={button.variant}
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

export default PopupBasic;
