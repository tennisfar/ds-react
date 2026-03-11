import React, { useEffect } from 'react';
import { hasSeenWelcome, shouldShowWelcome } from '../../Utils/membership';
import { openPopupWelcome } from '../../Utils/openPopup';
import { WelcomeDataSettings } from '../../Types/DataSettings/welcome';

export const Welcome = ({ title, text, ctaLabel }: WelcomeDataSettings) => {
  useEffect(() => {
    setTimeout(() => {
      if (shouldShowWelcome()) {
        openPopupWelcome({ title, text, ctaLabel });
        hasSeenWelcome();
      }
    }, 1000); // Delay to ensure the page is fully loaded
  }, []); // Empty dependency array ensures this runs once on mount

  return <></>; // This is a placeholder to avoid rendering issues
};
