import { createFileRoute } from '@tanstack/react-router';
import {
  openPopupNewPrize,
  openPopupWelcome,
  openPopupSimple,
} from '../../../develop/Website/Components/DanskeSpil/Domain/Feature.KlubLotto/Scripts/Utils/openPopup.ts';
import { Button } from '../../../develop/Website/Components/DanskeSpil/Domain/Feature.KlubLotto/Scripts/Components/Button/Button.tsx';
import Popup from '../../../develop/Website/Components/DanskeSpil/Domain/Feature.KlubLotto/Scripts/Components/Popup/Popup.tsx';
import Overlay from '../../../develop/Website/Components/DanskeSpil/Domain/Feature.KlubLotto/Scripts/Components/Popup/Overlay.tsx';

export const Route = createFileRoute('/Popups')({
  component: RouteComponent,
});

function RouteComponent() {
  const handleOpenPopupWelcome = () => {
    const title = 'Velkommen til Klub Lotto';
    const text = 'Tilmeld dig i dag og få chancen for at vinde fantastiske præmier hver uge!';
    const ctaLabel = 'Tilmeld dig nu';
    openPopupWelcome({ title, text, ctaLabel });
  };

  const handleOpenPopupNewPrize = () => {
    openPopupNewPrize({
      title: 'Ny præmie til dig!',
      image: '/src/components/Popups/gift.svg',
      buttons: [
        {
          variant: 'secondary',
          ctaLabel: 'Se præmie',
          inverted: false,
          cb: () => {
            console.error('New prize popup button clicked');
          },
        },
      ],
    });
  };

  const handleSimple = () => {
    openPopupSimple({
      title: 'successPopupTitle',
      text: 'successPopupText',
      buttons: [
        {
          ctaLabel: 'successPopupCtaLabel',
          href: '/popups#clicked',
          cb: () => {
            console.error('Simple popup triggered');
          },
        },
      ],
      overlayCloseTriggersFirstButton: true,
    });
  };

  return (
    <div style={{ display: 'flex', gap: '10px', padding: '20px' }}>
      <Button onClick={handleOpenPopupWelcome}>Popup Welcome</Button>
      <Button onClick={handleOpenPopupNewPrize}>Popup New Prize</Button>
      <Button onClick={handleSimple}>Popup Simple</Button>
      <Popup />
      <Overlay />
    </div>
  );
}
