import React from 'react';
import { createRoot } from 'react-dom/client';
import ComponentLoader from '@SharedScripts/ComponentLoader';
import { DailyPlayHubInfoPopup } from '../../Components/DailyPlayHubInfoPopup/DailyPlayHubInfoPopup';
import { DailyPlayHubInfoPopupDataSettings } from '../../Types/DataSettings/dailyPlayHubInfoPopup';

class KlubLottoDailyPlayHubInfoPopup extends ComponentLoader {
  constructor(element: HTMLElement) {
    super(element);
    this.init();
  }

  init() {
    const ReactApp = (props: DailyPlayHubInfoPopupDataSettings) => {
      return (
        <DailyPlayHubInfoPopup {...props}/>
      );
    };

    const root = createRoot(this.element);
    root.render(<ReactApp {...this.settings}/>);
  }
}

export default KlubLottoDailyPlayHubInfoPopup;
