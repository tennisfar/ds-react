// @ts-nocheck
import { useEffect } from 'react';
import { createFileRoute } from '@tanstack/react-router';
import { Welcome } from '@PATH.DS.KLUBLOTTO/Scripts/Components/Welcome/Welcome';
import Popup from '@PATH.DS.KLUBLOTTO/Scripts/Components/Popup/Popup';

export const Route = createFileRoute('/klublotto/Welcome')({
  component: RouteComponent,
  validateSearch: (search: Record<string, unknown>) => ({
    id: search.id as number | undefined,
  }),
});

function RouteComponent() {
  const WELCOME_SHOULD_SHOW_KEY = 'KlubLottoWelcomeShouldShow';
  const ONBOARDING_SHOULD_SHOW_KEY = 'KlubLottoOnboardingShouldShow';

  useEffect(() => {
    localStorage.setItem(WELCOME_SHOULD_SHOW_KEY, 'true');
    localStorage.setItem(ONBOARDING_SHOULD_SHOW_KEY, 'true');

    return () => {
      localStorage.removeItem(WELCOME_SHOULD_SHOW_KEY);
      localStorage.removeItem(ONBOARDING_SHOULD_SHOW_KEY);
    };
  }, []);

  return (
    <>
      <Popup/>
      <Welcome title={'Tillykke!'} text={'Nu er du med i klubben'} ctaLabel={'Kom indenfor'}/>
    </>
  );
}
