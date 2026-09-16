import { createFileRoute } from '@tanstack/react-router';
import { useEffect } from 'react';
import { Streak } from '../../Feature.KlubLotto/Scripts/Components/Streak/Streak';
import { FigmaOverlay } from '../../Figma/FigmaOverlay';
import figmaDesktop from '../../Figma/Streak/desktop-1.png';
import figmaMobile from '../../Figma/Streak/streak-design-check.png';

export const Route = createFileRoute('/klublotto/Streak')({
  component: RouteComponent,
});

function RouteComponent() {
  // Page background (body) sits behind the .page-area gutter, so override it just for this route.
  useEffect(() => {
    document.body.style.background = '#C50005';
    return () => {
      document.body.style.background = '';
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-[#C50005]">
      <Streak />
      <FigmaOverlay
        variants={[
          { breakpoint: 375, src: figmaMobile, top: 22 },
          { breakpoint: 1220, src: figmaDesktop },
        ]}
      />
    </div>
  );
}
