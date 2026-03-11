import React from 'react';
import { createRoot } from 'react-dom/client';
import ComponentLoader from '@SharedScripts/ComponentLoader';
import { RedirectOnLogout } from '../../Components/RedirectOnLogout/RedirectOnLogout';
import { SubscriberDataSettings } from '../../Types/DataSettings/subscriber';

class KlubLottoSubscriberEntry extends ComponentLoader {
  constructor(element: HTMLElement) {
    super(element);
    this.init();
  }

  init() {
    const ReactApp = (props: SubscriberDataSettings) => {
      return <RedirectOnLogout {...props} />;
    };

    const root = createRoot(this.element);
    root.render(<ReactApp {...this.settings} />);
  }
}

export default KlubLottoSubscriberEntry;
