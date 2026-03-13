import React from 'react';
import { createRoot } from 'react-dom/client';
import ComponentLoader from '@SharedScripts/ComponentLoader';
import { Welcome } from '../../Components/Welcome/Welcome';
import { WelcomeDataSettings } from '../../Types/DataSettings/welcome';

class KlubLottoWelcomeEntry extends ComponentLoader {
  constructor(element: HTMLElement) {
    super(element);
    this.init();
  }

  init() {
    const ReactApp = (props: WelcomeDataSettings) => {
      return (
        <Welcome {...props} />
      );
    };

    const root = createRoot(this.element);
    root.render(<ReactApp {...this.settings} />);
  }
}

export default KlubLottoWelcomeEntry;