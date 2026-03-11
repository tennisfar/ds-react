import React from 'react';
import { createRoot } from 'react-dom/client';
import ComponentLoader from '@SharedScripts/ComponentLoader';
import Popup from '../../Components/Popup/Popup';
import Overlay from '../../Components/Popup/Overlay';

class KlubLottoPopupEntry extends ComponentLoader {
  constructor(element: HTMLElement) {
    super(element);
    this.init();
  }

  init() {
    const ReactApp = () => {
      return (
        <>
          <Popup />
          <Overlay />
        </>
      );
    };

    const root = createRoot(this.element);
    root.render(<ReactApp />);
  }
}

export default KlubLottoPopupEntry;
