import { createFileRoute } from '@tanstack/react-router';
// @ts-ignore
import { Expired } from '@KlubLotto/Scripts/Components/FreePrizeClaim/_Expired.tsx';
import { PageHeader } from '../../components/PageHeader/PageHeader.tsx';

export const Route = createFileRoute('/klublotto/FreePrizeClaim-Expired')({
  component: RouteComponent,
});

function RouteComponent() {
  // const lottoProps = {
  //   claimTitle: 'En gratis Lotto',
  //   claimText: 'Præmien dækker én gratis Lotto række',
  //   claimDisclaimer: 'Spillet udbydes af Danske Lotteri Spil A/S. <a href="#">Se vilkår og spilleregler</a>',
  //   claimCtaLabel: 'Indløs din række',
  // }

  const ticket = {
    reference: '25',
    expires: '2026-02-28T19:00:00.000+00:00',
    created: '2025-10-16T12:23:32+02:00',
    redeemed: null,
    title: '2 Lotto rækker',
    sprite: 'lotto',
    id: 'eurojackpot-2',
    distribution: 'Danske Lotteri Spil',
    style: 'lottorow',
    type: '2_EUROJACKPOT_LIGHTNING',
    claimStatus: 'NotRedeemed',
  };

  const expiredProps = {
    title: 'Præmie er desværre udløbet',
  };

  const numberGamesType = 'allornothing';

  return (
    <>
      <PageHeader title="Dine præmier" />
      <Expired ticket={ticket} numberGamesType={numberGamesType} expiredProps={expiredProps} />
    </>
  );
}
