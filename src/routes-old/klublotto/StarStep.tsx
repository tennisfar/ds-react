import { createFileRoute } from '@tanstack/react-router';
// @ts-ignore
import { StarStep } from '@KlubLotto/Scripts/Components/StarStep/StarStep.tsx';

export const Route = createFileRoute('/klublotto/StarStep')({
  component: RouteComponent,
});

function RouteComponent() {
  const props = {
    title: 'Optjente lodder i alt',
    text: 'Ugens lodtrækning finder sted hver søndag kl. 24:00. Jo flere lodder, desto større vinderchance.',
    lotGained: {
      src: '/graphics/klublotto/starstep/star-full.svg',
    },
    lotNotGained: {
      src: '/graphics/klublotto/starstep/star-empty.svg',
    },
  };
  return <StarStep {...props} />;
}
