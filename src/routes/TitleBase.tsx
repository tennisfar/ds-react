import { createFileRoute } from '@tanstack/react-router';
import { TitleBase } from '../../../develop/Website/Components/DanskeSpil/Domain/Feature.KlubLotto/Scripts/Components/Title/Title.tsx';

export const Route = createFileRoute('/TitleBase')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <TitleBase>TitleBase</TitleBase>
    </div>
  );
}
