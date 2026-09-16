import { createFileRoute } from '@tanstack/react-router';
import { PrizeDrawExperience } from '../../Feature.KlubLotto/Scripts/Components/PrizeDrawExperience/PrizeDrawExperience';

export const Route = createFileRoute('/klublotto/PrizeDrawExperience')({
  component: RouteComponent,
});

function RouteComponent() {
  return <PrizeDrawExperience />;
}
