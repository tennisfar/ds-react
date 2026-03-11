import React, { useEffect, useState } from 'react';
import { Button } from '../Button/Button';
import { SitecoreGenericLink } from '../../Types/sitecore';
import { hasSeenOnboarding, shouldShowOnboarding } from '../../Utils/membership';
import { GameEntryLinkDataSettings } from '../../Types/DataSettings/gameEntryLink';

export const GameEntryLink = ({ gamesLink, onboardingLink }: GameEntryLinkDataSettings) => {
  const [link, setLink] = useState<SitecoreGenericLink>(gamesLink);

  useEffect(() => {
    if (shouldShowOnboarding()) {
      setLink(onboardingLink);
    }
  }, []);

  return (
    <Button href={link?.url} tracking={{ action: 'gameEntry' }} onClick={hasSeenOnboarding} inverted={true}>
      {link?.text}
    </Button>
  );
};
