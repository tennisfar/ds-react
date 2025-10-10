import { createFileRoute } from '@tanstack/react-router';
// @ts-ignore
import { TitleBase } from '@KlubLotto/Scripts/Components/Title/Title.tsx';

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
