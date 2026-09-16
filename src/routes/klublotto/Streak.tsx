import { createFileRoute } from '@tanstack/react-router';
import { Streak } from '../../Feature.KlubLotto/Scripts/Components/Streak/Streak';

export const Route = createFileRoute('/klublotto/Streak')({
  component: RouteComponent,
});

function RouteComponent() {
  return <Streak />;
}
