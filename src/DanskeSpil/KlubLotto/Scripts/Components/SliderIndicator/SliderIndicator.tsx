import React from 'react';
import useSliderIndicator from '../../Hooks/useSliderIndicator';
import { SliderIndicatorDataSettings } from '../../Types/DataSettings/sliderIndicator';

export const SliderIndicator = ({ numberOfSlides = 2, slideContainer }: SliderIndicatorDataSettings) => {
  const { dotSelected, isVisible } = useSliderIndicator(slideContainer);

  if (!isVisible) {
    return null;
  }

  const dots = numberOfSlides === 2 ? 2 : 3;

  return (
    <>
      {[...Array(dots).keys()].map((_, i) => {
        return (
          <div
            className={`kl-slider-indicator__dot ${dotSelected === i ? 'kl-slider-indicator__dot--selected' : ''}`}
            id={`dot${i}`}
            key={i}
          ></div>
        );
      })}
    </>
  );
};
