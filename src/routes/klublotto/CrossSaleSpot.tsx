// @ts-nocheck
import { createFileRoute } from '@tanstack/react-router';
import { CrossSaleSpot } from '@PATH.KLUBLOTTO.VIEWS/CrossSaleSpot';
import { PageHeader } from '@PATH.KLUBLOTTO.VIEWS/PageHeader';
import lottoBg from '/graphics/klublotto/crosssalespot/bg-lotto.png'
import eurojackpotBg from '/graphics/klublotto/crosssalespot/bg-eurojackpot.svg'
import quickBg from '/graphics/klublotto/crosssalespot/bg-quick.png'
import quickFg from '/graphics/klublotto/crosssalespot/fg-quick.png'

export const Route = createFileRoute('/klublotto/CrossSaleSpot')({
  component: RouteComponent,
});

function RouteComponent() {

  return (
    <>
      <PageHeader>Dine præmier</PageHeader>

      <CrossSaleSpot type={'eurojackpot'} backgroundColor={'black'} backgroundImage={eurojackpotBg}/>
      <CrossSaleSpot type={'quick'} backgroundColor={'#c50005'} backgroundImage={quickBg} foregroundImage={quickFg} ctaLabel={'Spil nu - 10 kr.'}/>
      <CrossSaleSpot type={'lotto'} backgroundColor={'#c50005'} backgroundImage={lottoBg}/>

    </>
  );
}
