import { createFileRoute } from '@tanstack/react-router';
// @ts-ignore
import { StarStep } from '@KlubLotto/Scripts/Components/StarStep/StarStep.tsx';

export const Route = createFileRoute('/StarStep')({
  component: RouteComponent,
});

function RouteComponent() {
  const props = {
    title: 'Optjente lodder i alt',
    text: 'Ugens lodtrækning finder sted hver søndag kl. 24:00. Jo flere lodder, desto større vinderchance.',
  };
  return <StarStep {...props} />;
}
