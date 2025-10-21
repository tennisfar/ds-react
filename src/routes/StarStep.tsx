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
    lotGained: {
      src: '/Components/DanskeSpil/Domain/Feature.KlubLotto/Graphics/StarStep/star-full.svg',
    },
    lotNotGained: {
      src: '/Components/DanskeSpil/Domain/Feature.KlubLotto/Graphics/StarStep/star-empty.svg',
    },
  };
  return <StarStep {...props} />;
}
