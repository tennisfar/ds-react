import { createFileRoute } from '@tanstack/react-router';
// @ts-ignore
import { Claim } from '@KlubLotto/Scripts/Components/LottoRowClaim/_Claim.tsx';

import gift from '@KlubLotto/Graphics/MyRewards/gift.svg';

export const Route = createFileRoute('/klublotto/LottoRowClaim-Claim')({
  component: RouteComponent,
});

function RouteComponent() {
  const claimProps = {
    title: 'En gratis Lotto række',
    text: 'Præmien dækker én gratis Lotto række',
    disclaimer: 'Spillet udbydes af Danske Lotteri Spil A/S. <a href="#">Se vilkår</a>',
    ctaLabel: 'Indløs din række',
    image: gift,
  };

  const ticket = {
    claimStatus: 'Redeemed',
  };

  return (
    <div>
      <Claim ticket={ticket} claimProps={claimProps} handleRedeem={() => {}} />
    </div>
  );
}
