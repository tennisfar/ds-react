import { createFileRoute } from '@tanstack/react-router';
// @ts-ignore
import { Claim } from '@KlubLotto/Scripts/Components/FreePrizeClaim/_Claim.tsx';
import { PageHeader } from '../../components/PageHeader/PageHeader.tsx';
import { getFirstDayOfNextMonth, getNextEurojackpotDrawDate, getNextLottoDrawDate } from '../../utils/dates.ts';

export const Route = createFileRoute('/klublotto/FreePrizeClaim-Claim')({
  component: RouteComponent,
});

function RouteComponent() {
  const props = {
    allornothing: {
      numberGamesType: 'allornothing',
      claimTexts: {
        title: 'En gratis Alt eller Intet',
        text: 'Præmien dækker én gratis Alt eller Intet, som gælder til førstkommende trækning - klik herunder for at indløse den.',
        disclaimer: 'Spillet udbydes af Danske Lotteri Spil A/S. <a href="#">Se vilkår og spilleregler</a>',
        ctaLabel: 'Indløs din Alt eller Intet',
      },
      ticket: {
        reference: '25',
        expires: getNextLottoDrawDate(),
        created: '2025-10-16T12:23:32+02:00',
        redeemed: null,
        title: '1 Alt eller Intet',
        sprite: 'allornothing',
        id: 'allornothing-1',
        distribution: 'Danske Lotteri Spil',
        style: 'lottorow',
        type: '1_ALLORNOTHING_LIGHTNING',
        claimStatus: 'NotRedeemed',
      },
      gameRows: 1,
    },
    keno: {
      numberGamesType: 'keno',
      claimTexts: {
        title: 'En gratis Keno',
        text: 'Præmien dækker én gratis Keno, som gælder til førstkommende trækning - klik herunder for at indløse den.',
        disclaimer: 'Spillet udbydes af Danske Lotteri Spil A/S. <a href="#">Se vilkår og spilleregler</a>',
        ctaLabel: 'Indløs din Keno',
      },
      ticket: {
        reference: '25',
        expires: getFirstDayOfNextMonth(),
        created: '2025-10-16T12:23:32+02:00',
        redeemed: null,
        title: '1 Keno',
        sprite: 'keno',
        id: 'keno-1',
        distribution: 'Danske Lotteri Spil',
        style: 'lottorow',
        type: '1_KENO_LIGHTNING',
        claimStatus: 'NotRedeemed',
      },
      gameRows: 1,
    },
    lotto: {
      numberGamesType: 'lotto',
      claimTexts: {
        title: 'En gratis Lotto række',
        text: 'Præmien dækker én gratis Lotto række, som gælder til førstkommende trækning - klik herunder for at indløse den.',
        disclaimer: 'Spillet udbydes af Danske Lotteri Spil A/S. <a href="#">Se vilkår og spilleregler</a>',
        ctaLabel: 'Indløs din række',
      },
      ticket: {
        reference: '25',
        expires: getNextLottoDrawDate(),
        created: '2025-10-16T12:23:32+02:00',
        redeemed: null,
        title: '1 Lotto række',
        sprite: 'lotto',
        id: 'lotto-1',
        distribution: 'Danske Lotteri Spil',
        style: 'lottorow',
        type: '1_LOTTO_LIGHTNING',
        claimStatus: 'NotRedeemed',
      },
      gameRows: 1,
    },
    vikinglotto: {
      numberGamesType: 'vikinglotto',
      claimTexts: {
        title: 'Tre gratis Vikinglotto række',
        text: 'Præmien dækker tre gratis Vikinglotto rækker, som gælder til førstkommende trækning - klik herunder for at indløse dem.',
        disclaimer: 'Spillet udbydes af Danske Lotteri Spil A/S. <a href="#">Se vilkår og spilleregler</a>',
        ctaLabel: 'Indløs dine rækker',
      },
      ticket: {
        reference: '25',
        expires: getNextLottoDrawDate(),
        created: '2025-10-16T12:23:32+02:00',
        redeemed: null,
        title: '1 Vikinglotto række',
        sprite: 'vikinglotto',
        id: 'vikinglotto-1',
        distribution: 'Danske Lotteri Spil',
        style: 'lottorow',
        type: '1_VIKING_LIGHTNING',
        claimStatus: 'NotRedeemed',
      },
      gameRows: 3,
    },
    eurojackpot: {
      numberGamesType: 'eurojackpot',
      claimTexts: {
        title: 'To Eurojackpot rækker',
        text: 'Præmien er to gratis Eurojackpot rækker, som gælder til førstkommende trækning - klik herunder for at indløse dem.',
        disclaimer: 'Spillet udbydes af Danske Lotteri Spil A/S. <a href="#">Se vilkår og spilleregler</a>',
        ctaLabel: 'Indløs din rækker',
      },
      ticket: {
        reference: '25',
        expires: getNextEurojackpotDrawDate(),
        created: '2025-10-16T12:23:32+02:00',
        redeemed: null,
        title: '2 Lotto rækker',
        sprite: 'lotto',
        id: 'eurojackpot-2',
        distribution: 'Danske Lotteri Spil',
        style: 'lottorow',
        type: '2_EUROJACKPOT_LIGHTNING',
        claimStatus: 'NotRedeemed',
      },
      gameRows: 2,
    },
  };

  const handleRedeem = () => alert('Redeem');

  // const gameType = 'allornothing';
  // const gameType = 'keno';
  // const gameType = 'lotto';
  const gameType = 'vikinglotto';
  // const gameType = 'eurojackpot';

  return (
    <div>
      <PageHeader title="Dine præmier" />
      <Claim
        ticket={props[gameType].ticket}
        numberGamesType={props[gameType].numberGamesType}
        gameRows={props[gameType].gameRows}
        claimTexts={props[gameType].claimTexts}
        handleRedeem={handleRedeem}
      />
    </div>
  );
}
