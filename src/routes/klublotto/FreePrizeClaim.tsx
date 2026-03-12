// @ts-nocheckX
import { createFileRoute } from '@tanstack/react-router';
import { FreePrizeClaim } from '../../DanskeSpil/KlubLotto/Scripts/Components/FreePrizeClaim/FreePrizeClaim';
import { PageHeader } from '../../DanskeSpil/KlubLotto/Views/PageHeader';

export const Route = createFileRoute('/klublotto/FreePrizeClaim')({
  component: RouteComponent,
});

function RouteComponent() {
    const dataComponents = [
      {
        type: ''
      }
    ];

  // @ts-ignore
  return (
    <>
      <PageHeader>Dine præmier</PageHeader>

      <FreePrizeClaim dataComponents={dataComponents}/>
    </>
  );
}
