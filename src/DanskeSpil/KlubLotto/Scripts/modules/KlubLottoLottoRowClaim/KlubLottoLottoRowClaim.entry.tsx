import React from 'react';
import { createRoot } from 'react-dom/client';
import { QueryClientProvider } from '@tanstack/react-query';
import ComponentLoader from '@SharedScripts/ComponentLoader';
import QueryState from '@SharedScripts/QueryState';
import { LottoRowClaim } from '../../Components/LottoRowClaim/LottoRowClaim';
import { LottoRowClaimDataSettings } from '../../Types/DataSettings/lottoRowClaim';

class KlubLottoLottoRowClaimEntry extends ComponentLoader {
  constructor(element: HTMLElement) {
    super(element);
    this.init();
  }

  init() {
    const queryClient = new QueryState().load('shared');

    const ReactApp = (props: LottoRowClaimDataSettings) => {
      return (
        <QueryClientProvider client={queryClient}>
          <LottoRowClaim {...props}/>
        </QueryClientProvider>
      );
    };

    const root = createRoot(this.element);
    root.render(<ReactApp {...this.settings}/>);
  }
}

export default KlubLottoLottoRowClaimEntry;
