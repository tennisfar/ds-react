import { createFileRoute } from '@tanstack/react-router';
import { Streak } from '../../Feature.KlubLotto/Scripts/Components/Streak/Streak';
import { FigmaOverlay } from '../../Figma/FigmaOverlay';
import figmaDesktop from '../../Figma/Streak/desktop-1.png';
import figmaMobile from '../../Figma/Streak/streak-design-check.png';

export const Route = createFileRoute('/klublotto/Streak')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="relative">
      <Streak />
      <FigmaOverlay
        variants={[
          { breakpoint: 375, src: figmaMobile },
          { breakpoint: 1220, src: figmaDesktop },
        ]}
      />
    </div>
  );
}
