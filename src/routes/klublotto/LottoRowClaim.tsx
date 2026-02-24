import { createFileRoute } from '@tanstack/react-router';
// @ts-ignore
import { LottoRowClaim } from '@KlubLotto/Scripts/Components/LottoRowClaim/LottoRowClaim.tsx';

export const Route = createFileRoute('/klublotto/LottoRowClaim')({
  component: RouteComponent,
});

function RouteComponent() {
  const claimImage = '';
  const claimTitle = 'En gratis Lotto række';
  const claimText = 'Præmien dækker én gratis Lotto række';
  const claimDisclaimer = 'Spillet udbydes af Danske Lotteri Spil A/S. <a href="#">Se vilkår</a>';
  const claimCtaLabel = 'Indløs din række';
  const expiredImage = '';
  const expiredTitle = '';
  const receiptDisclaimer = '';
  const receiptText = '';
  const receiptTitle = '';
  const redeemedImage = '';
  const redeemedTitle = '';

  return (
    <div>
      <LottoRowClaim
        brand={'lotto'}
        claimCtaLabel={claimCtaLabel}
        claimDisclaimer={claimDisclaimer}
        claimImage={claimImage}
        claimText={claimText}
        claimTitle={claimTitle}
        expiredImage={expiredImage}
        expiredTitle={expiredTitle}
        receiptDisclaimer={receiptDisclaimer}
        receiptText={receiptText}
        receiptTitle={receiptTitle}
        redeemedImage={redeemedImage}
        redeemedTitle={redeemedTitle}
      />
    </div>
  );
}
