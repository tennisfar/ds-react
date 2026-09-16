// @ts-nocheck
import { useState } from 'react';
import { createFileRoute } from '@tanstack/react-router';
import Overlay from '@PATH.DS.KLUBLOTTO/Scripts/Components/Popup/Overlay';
import { TopUpPrompt } from '../../Feature.KlubLotto/Scripts/Components/TopUpPrompt/TopUpPrompt';

export const Route = createFileRoute('/klublotto/TopUpPrompt')({
  component: RouteComponent,
});

function RouteComponent() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button type="button" onClick={() => setIsOpen(true)}>
        Indløs din række
      </button>

      <TopUpPrompt
        isOpen={isOpen}
        logo="/dlo/Components/DanskeSpil/Domain/Feature.Components/Graphics/BrandLogos/eurojackpot.svg"
        logoAlt="Eurojackpot"
        onClose={() => setIsOpen(false)}
        onDecline={() => {
          setIsOpen(false);
          alert('Redeem');
        }}
      />
      <Overlay />
    </div>
  );
}
