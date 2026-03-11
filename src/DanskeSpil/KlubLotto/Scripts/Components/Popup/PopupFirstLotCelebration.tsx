import React from 'react';
import { PopupProps, PopupVariantProps } from '../../Types/popup';
import { CelebrateBackground } from '../CelebrateBackground/CelebrateBackground';
import { trackEvent } from '../../Utils/tracking';

const PopupFirstLotCelebration = ({ data, handleModalClose }: PopupProps) => {
  const { title, text, image, image2X, handleModalClose: cb } = data;

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    // Prevent the click event from propagating to the background
    event.stopPropagation();
    const popupVariant: PopupVariantProps = 'firstLot';
    trackEvent({ action: 'popup_' + popupVariant, label: 'click' });
    if (cb) {
      cb();
    }
    handleModalClose();
  };

  return (
    <div onClick={handleClick}>
      {title && <div className={'kl-popup-first-lot-celebration__title'}>{title}</div>}
      <img
        srcSet={`${image}, ${image2X} 2x`}
        src={image}
        alt={''}
        className={'kl-popup-first-lot-celebration__image'}
      />
      {text && (
        <div className={'kl-popup-first-lot-celebration__text'} dangerouslySetInnerHTML={{ __html: text }}></div>
      )}
      <CelebrateBackground />
    </div>
  );
};

export default PopupFirstLotCelebration;
