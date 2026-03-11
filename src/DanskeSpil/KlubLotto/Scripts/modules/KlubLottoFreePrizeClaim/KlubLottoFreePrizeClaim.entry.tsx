import React from 'react';
import { createRoot } from 'react-dom/client';
import { QueryClientProvider } from '@tanstack/react-query';
import ComponentLoader from '@SharedScripts/ComponentLoader';
import QueryState from '@SharedScripts/QueryState';
import { FreePrizeClaim } from '../../Components/FreePrizeClaim/FreePrizeClaim';
import { FreePrizeClaimDataSettings } from '../../Types/DataSettings/freePrizeClaim';

class KlubLottoFreePrizeClaimEntry extends ComponentLoader {
  constructor(element: HTMLElement) {
    super(element);
    this.init();
  }

  init() {
    const queryClient = new QueryState().load('shared');

    const ReactApp = (props: FreePrizeClaimDataSettings) => {
      return (
        <QueryClientProvider client={queryClient}>
          <FreePrizeClaim {...props} />
        </QueryClientProvider>
      );
    };

    const root = createRoot(this.element);
    root.render(<ReactApp {...this.settings} />);
  }
}

export default KlubLottoFreePrizeClaimEntry;
