import { useState } from 'react';
import { useResetKeyState } from './useResetKeyState';
import { useWindowWidth } from './useWindowWidth';

type FigmaOverlayVariant = {
  breakpoint: number;
  src: string;
  top?: number;
};

type FigmaOverlayProps = {
  variants: FigmaOverlayVariant[];
  alt?: string;
};

const TOP_RANGE = 300;

// Dev-only helper: overlays a Figma design screenshot on top of a component for visual comparison.
// Each variant is only shown when the window width exactly matches its breakpoint.
export const FigmaOverlay = ({ variants, alt = 'Figma reference overlay' }: FigmaOverlayProps) => {
  const [visible, setVisible] = useState(true);
  const [opacity, setOpacity] = useState(0.5);
  const windowWidth = useWindowWidth();
  const activeVariant = variants.find((variant) => variant.breakpoint === windowWidth);
  const shouldShow = visible && !!activeVariant;
  const [top, setTop] = useResetKeyState(activeVariant?.breakpoint, activeVariant?.top ?? 0);

  return (
    <>
      {activeVariant && (
        <img
          src={activeVariant.src}
          alt={alt}
          style={{ opacity: shouldShow ? opacity : 0, top }}
          className="pointer-events-none absolute inset-x-0 z-[9999] w-full select-none"
        />
      )}
      <div className="fixed bottom-[16px] left-[16px] right-[16px] z-[10000] flex flex-col gap-[8px] rounded-[6px] bg-black/75 px-[12px] py-[8px] text-[12px] text-white sm:left-auto sm:w-auto sm:flex-row sm:items-center sm:gap-[10px]">
        <label className="flex items-center gap-[6px]">
          <input type="checkbox" checked={visible} onChange={(e) => setVisible(e.target.checked)} />
          Figma overlay
        </label>
        <input
          type="range"
          min={0}
          max={1}
          step={0.05}
          value={opacity}
          disabled={!visible}
          onChange={(e) => setOpacity(Number(e.target.value))}
          className="w-full min-w-0 sm:w-[90px]"
        />
        {activeVariant && (
          <label className="flex min-w-0 items-center gap-[6px]">
            top
            <input
              type="range"
              min={-TOP_RANGE}
              max={TOP_RANGE}
              step={1}
              value={top}
              disabled={!visible}
              onChange={(e) => setTop(Number(e.target.value))}
              className="w-full min-w-0 sm:w-[90px]"
            />
            <span className="w-[42px] shrink-0">{top}px</span>
          </label>
        )}
        <span className={activeVariant ? 'text-green-400' : 'text-white/60'}>
          {windowWidth}px {activeVariant ? '✓' : `(need ${variants.map((v) => v.breakpoint).join('/')}px)`}
        </span>
      </div>
    </>
  );
};
