import React from 'react';
import { createRoot } from 'react-dom/client';
import { QueryClientProvider } from '@tanstack/react-query';
import ComponentLoader from '@SharedScripts/ComponentLoader';
import QueryState from '@SharedScripts/QueryState';
import { RedeemSpot } from '../../Components/RedeemSpot/RedeemSpot';
import { RedeemSpotDataSettings } from '../../Types/DataSettings/redeemSpot';

class KlubLottoRedeemSpotEntry extends ComponentLoader {
  constructor(element: HTMLElement) {
    super(element);
    this.init();
  }

  init() {
    const queryClient = new QueryState().load('shared');

    const ReactApp = (props: RedeemSpotDataSettings) => {
      return (
        <QueryClientProvider client={queryClient}>
          <RedeemSpot {...props}/>
        </QueryClientProvider>
      );
    };

    const root = createRoot(this.element);
    root.render(<ReactApp {...this.settings}/>);
  }
}

export default KlubLottoRedeemSpotEntry;
