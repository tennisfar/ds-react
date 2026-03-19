// @ts-nocheck
import { createFileRoute } from '@tanstack/react-router';
import { ContestOverview } from '../../DanskeSpil/KlubLotto/Views/ContestOverview';
import { PromotionBanner } from '../../DanskeSpil/KlubLotto/Views/PromotionBanner';

export const Route = createFileRoute('/klublotto/PromotionBanner')({
  component: RouteComponent,
  validateSearch: (search: Record<string, unknown>) => ({
    id: search.id as number | undefined,
  }),
});

function RouteComponent() {
  return (
    <>

      <PromotionBanner/>
      <ContestOverview/>

    </>
  );
}
