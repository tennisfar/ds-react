import { createFileRoute } from '@tanstack/react-router';
import { PrizeDrawExperience } from '../../Feature.KlubLotto/Scripts/Components/PrizeDrawExperience/PrizeDrawExperience';
import { FigmaOverlay } from '../../Figma/FigmaOverlay';
import figmaDesktop from '../../Figma/PrizeDrawExperience/desktop.png';
import figmaMobile from '../../Figma/PrizeDrawExperience/mobile.png';
import figmaTablet from '../../Figma/PrizeDrawExperience/tablet.png';

export const Route = createFileRoute('/klublotto/PrizeDrawExperience')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="relative">
      <PrizeDrawExperience />
      <FigmaOverlay
        variants={[
          { breakpoint: 375, src: figmaMobile, top: -28 },
          { breakpoint: 768, src: figmaTablet, top: -33 },
          { breakpoint: 1220, src: figmaDesktop, top: -40 },
        ]}
      />
    </div>
  );
}
