import React from 'react';
import { createRoot } from 'react-dom/client';
import ComponentLoader from '@SharedScripts/ComponentLoader';
import { NewsSlider } from '../../Components/NewsSlider/NewsSlider';
import { NewsSliderDataSettings } from '../../Types/DataSettings/newsSlider';

class KlubLottoNewsSliderEntry extends ComponentLoader {
  constructor(element: HTMLElement) {
    super(element);
    this.init();
  }

  init() {
    const ReactApp = (props: NewsSliderDataSettings) => {
      return <NewsSlider {...props} />;
    };

    const root = createRoot(this.element);
    root.render(<ReactApp {...this.settings} />);
  }
}

export default KlubLottoNewsSliderEntry;
