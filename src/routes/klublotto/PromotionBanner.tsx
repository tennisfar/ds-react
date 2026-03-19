// @ts-nocheck
import { createFileRoute } from '@tanstack/react-router';
import { ContestOverview } from '@PATH.KLUBLOTTO.VIEWS/ContestOverview';
import { PromotionBanner } from '@PATH.KLUBLOTTO.VIEWS/PromotionBanner';

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
