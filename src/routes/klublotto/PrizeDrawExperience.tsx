import { createFileRoute } from '@tanstack/react-router';
import { PrizeDrawExperience } from '../../DanskeSpil/KlubLotto/Views/PrizeDrawExperience';

export const Route = createFileRoute('/klublotto/PrizeDrawExperience')({
  component: RouteComponent,
});

function RouteComponent() {
  return <PrizeDrawExperience />;
}
