import { useDictionaryData } from './useDictionaryData';
import { useCallback } from 'react';
import { openPopupError } from '../Utils/openPopup';
import { DictionaryApiResponse } from '../Types/ApiResponse/dictionary';

export const useShowRetryErrorPopup = () => {
  const { data: dictionaryData } = useDictionaryData('/KlubLotto/PopupErrorMessages');

  return useCallback(() => {
    if (!dictionaryData) return;

    const errorMessages = dictionaryData?.PopupErrorMessages as DictionaryApiResponse;
    const tryAgainError = errorMessages?.TryAgainError;

    if (tryAgainError && typeof tryAgainError === 'object') {
      const { title, subtitle, text, ctaLabel, ctaLabelTryAgain } = tryAgainError as { [key: string]: string };

      setTimeout(() => {
        openPopupError({
          title,
          subtitle,
          text,
          buttons: [
            {
              variant: 'secondary',
              ctaLabel,
            },
            {
              variant: 'secondary',
              ctaLabel: ctaLabelTryAgain,
              cb: () => {
                window.location.reload();
              },
            },
          ],
        });
      }, 200);
    }
  }, [dictionaryData]);
};