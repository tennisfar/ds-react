// @ts-nocheck
import { createFileRoute } from '@tanstack/react-router';
import { CrossSaleSpot } from '@PATH.KLUBLOTTO.VIEWS/CrossSaleSpot';
import { PageHeader } from '@PATH.KLUBLOTTO.VIEWS/PageHeader';
import lottoBg from '../../../public/graphics/klublotto/crosssalespot/bg-lotto.png'
import eurojackpotBg from '../../../public/graphics/klublotto/crosssalespot/bg-eurojackpot.svg'

export const Route = createFileRoute('/klublotto/CrossSaleSpot')({
  component: RouteComponent,
});

function RouteComponent() {

  return (
    <>
      <PageHeader>Dine præmier</PageHeader>

      <CrossSaleSpot type={'eurojackpot'} backgroundColor={'black'} backgroundImage={eurojackpotBg}/>
      <CrossSaleSpot type={'lotto'} backgroundColor={'#c50005'} backgroundImage={lottoBg}/>

    </>
  );
}
