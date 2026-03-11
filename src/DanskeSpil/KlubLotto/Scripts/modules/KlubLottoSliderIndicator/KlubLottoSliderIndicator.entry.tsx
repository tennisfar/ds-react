import React from 'react';
import { createRoot } from 'react-dom/client';
import ComponentLoader from '@SharedScripts/ComponentLoader';
import { SliderIndicator } from '../../Components/SliderIndicator/SliderIndicator';
import { SliderIndicatorDataSettings } from '../../Types/DataSettings/sliderIndicator';

class KlubLottoSliderIndicatorEntry extends ComponentLoader {
  constructor(element: HTMLElement) {
    super(element);
    this.init();
  }

  init() {
    const ReactApp = (props: SliderIndicatorDataSettings) => {
      return <SliderIndicator {...props} />;
    };

    const root = createRoot(this.element);
    root.render(<ReactApp {...this.settings} />);
  }
}

export default KlubLottoSliderIndicatorEntry;
