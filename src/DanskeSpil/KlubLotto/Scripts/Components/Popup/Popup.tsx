import React from 'react';
import { useEffect, useState } from 'react';
import { useIsMount } from '../../Hooks/useIsMount';
import { PopupDataProps, PopupVariantProps } from '../../Types/popup';
import PopupBasic from './PopupBasic';
import PopupError from './PopupError';
import PopupFirstLotCelebration from './PopupFirstLotCelebration';
import PopupSimple from './PopupSimple';
import PopupWelcome from './PopupWelcome';
import PopupNewPrize from './PopupNewPrize';
import PopupPrizeExpires from './PopupPrizeExpires';
import { trackEvent } from '../../Utils/tracking';

const Popup = () => {
  const isMount = useIsMount();
  const [isOpen, setIsOpen] = useState(false);
  const [variant, setVariant] = useState<PopupVariantProps>();
  const [data, setData] = useState<PopupDataProps>();

  const handleModalOpen = (popupData: PopupDataProps) => {
    setData(popupData);
    setIsOpen(true);
  };

  const handleModalClose = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    if (isMount || !data) {
      return;
    }

    const popupVariant: PopupVariantProps = data.variant;
    trackEvent({ action: 'popup_' + popupVariant, label: isOpen ? 'open' : 'close' });

    if (isOpen) {
      document.dispatchEvent(new CustomEvent('klublotto:overlay:show'));
    }

    if (!isOpen) {
      document.dispatchEvent(new CustomEvent('klublotto:overlay:hide'));
    }
  }, [isOpen, data]);

  const handleModalEvent = (event: CustomEvent<PopupDataProps>) => {
    const popupData = event.detail || {};
    switch (event.type) {
      case 'klublotto:modal:open':
        handleModalOpen(popupData);
        break;
      case 'klublotto:modal:close':
        handleModalClose();
        break;
      case 'klublotto:overlay:clicked':
        data?.onOverlayClicked?.();
        handleModalClose();
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    const eventListener = handleModalEvent as EventListener;

    document.addEventListener('klublotto:modal:open', eventListener);
    document.addEventListener('klublotto:modal:close', eventListener);
    document.addEventListener('klublotto:overlay:clicked', eventListener);

    return () => {
      document.removeEventListener('klublotto:modal:open', eventListener);
      document.removeEventListener('klublotto:modal:close', eventListener);
      document.removeEventListener('klublotto:overlay:clicked', eventListener);
    };
  }, [data]);

  useEffect(() => {
    if (data) setVariant(data.variant);
  }, [data]);

  const getVariant = (variant: PopupVariantProps) => {
    switch (variant) {
      case 'basic':
        return 'kl-popup-basic';
      case 'welcome':
        return 'kl-popup-welcome';
      case 'newPrize':
        return 'kl-popup-new-prize';
      case 'prizeExpires':
        return 'kl-popup-prize-expires';
      case 'error':
        return 'kl-popup-error';
      case 'simple':
        return 'kl-popup-simple';
      case 'firstLot':
        return 'kl-popup-first-lot-celebration';
      default:
        return '';
    }
  };

  return (
    <div className={`kl-popup ${isOpen ? 'kl-popup--open' : ''} ${getVariant(data?.variant)}`}>
      <div className={'kl-popup__container'}>
        <div className={'kl-popup__content'}>
          {isOpen && data && variant === 'basic' && <PopupBasic data={data} handleModalClose={handleModalClose} />}
          {isOpen && data && variant === 'simple' && <PopupSimple data={data} handleModalClose={handleModalClose} />}
          {isOpen && data && variant === 'welcome' && <PopupWelcome data={data} handleModalClose={handleModalClose} />}
          {isOpen && data && variant === 'newPrize' && (
            <PopupNewPrize data={data} handleModalClose={handleModalClose} />
          )}
          {isOpen && data && variant === 'prizeExpires' && (
            <PopupPrizeExpires data={data} handleModalClose={handleModalClose} />
          )}
          {isOpen && data && variant === 'firstLot' && (
            <PopupFirstLotCelebration data={data} handleModalClose={handleModalClose} />
          )}
          {isOpen && data && variant === 'error' && <PopupError data={data} handleModalClose={handleModalClose} />}
        </div>
      </div>
    </div>
  );
};

export default Popup;
