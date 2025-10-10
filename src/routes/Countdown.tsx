import { createFileRoute } from '@tanstack/react-router';
import { Countdown } from '../../../develop/Website/Components/DanskeSpil/Domain/Feature.KlubLotto/Scripts/Components/Countdown/Countdown.tsx';

export const Route = createFileRoute('/Countdown')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div style={{ backgroundColor: '#c50005', padding: '20px', position: 'relative', zIndex: 1 }}>
      <Countdown />
    </div>
  );
}
