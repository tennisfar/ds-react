import { createFileRoute } from '@tanstack/react-router';
// @ts-ignore
import { Redeemed } from '@KlubLotto/Scripts/Components/FreePrizeClaim/_Redeemed.tsx';
import { PageHeader } from '../../components/PageHeader/PageHeader.tsx';

export const Route = createFileRoute('/klublotto/FreePrizeClaim-Redeemed')({
  component: RouteComponent,
});

function RouteComponent() {
  const ticket = {
    reference: '25',
    expires: '2026-02-28T19:00:00.000+00:00',
    created: '2025-10-16T12:23:32+02:00',
    redeemed: '2025-10-16T12:23:32+02:00',
    title: '2 Lotto rækker',
    sprite: 'lotto',
    id: 'eurojackpot-2',
    distribution: 'Danske Lotteri Spil',
    style: 'lottorow',
    type: '2_EUROJACKPOT_LIGHTNING',
    claimStatus: 'Redeemed',
  };

  const sitecorePropsRedeemed = {
    title: 'Præmie er allerede indløst',
  };

  const numberGamesType = 'keno';

  return (
    <>
      <PageHeader title="Dine præmier" />
      <Redeemed ticket={ticket} numberGamesType={numberGamesType} sitecorePropsRedeemed={sitecorePropsRedeemed} />
    </>
  );
}
