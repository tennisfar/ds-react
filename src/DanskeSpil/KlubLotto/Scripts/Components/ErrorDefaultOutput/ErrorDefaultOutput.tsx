import React from 'react';
import { Button } from '../Button/Button';
import { useDictionaryData } from '../../Hooks/useDictionaryData';
import { DictionaryApiResponse } from '../../Types/ApiResponse/dictionary';

export const ErrorDefaultOutput = ({ className, variant }: { className: string; variant: 'light' | 'dark' }) => {
  const { data: dictionaryData } = useDictionaryData('/KlubLotto/PageErrorMessages');
  const errorMessages = dictionaryData?.PageErrorMessages as DictionaryApiResponse;
  const tryAgainError = errorMessages?.TryAgainError;

  if (tryAgainError && typeof tryAgainError === 'object') {
    const { title, ctaLabelHome, ctaLabelTryAgain } = tryAgainError as { [key: string]: string };

    const handleTryAgainClick = () => {
      location.reload();
    };

    return (
      <div className={`kl-error-output kl-error-output--${variant || ''} ${className}`}>
        <div className={'kl-error-output__title'} dangerouslySetInnerHTML={{ __html: title }}></div>
        <div className={'kl-error-output__buttons'}>
          <Button tracking={{ action: 'error_reloadPage' }} onClick={handleTryAgainClick} inverted={variant === 'light'} variant={'primary'}>
            {ctaLabelTryAgain}
          </Button>
          <Button tracking={{ action: 'error_goToKlubLottoHome' }} href={'/klublotto'} inverted={variant === 'light'} variant={'secondary'}>
            {ctaLabelHome}
          </Button>
        </div>
      </div>
    );
  }

  return null;
};