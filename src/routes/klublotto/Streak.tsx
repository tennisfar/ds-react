import { createFileRoute } from '@tanstack/react-router';
import { Streak } from '../../DanskeSpil/KlubLotto/Views/Streak';

export const Route = createFileRoute('/klublotto/Streak')({
  component: RouteComponent,
});

function RouteComponent() {
  return <Streak />;
}
