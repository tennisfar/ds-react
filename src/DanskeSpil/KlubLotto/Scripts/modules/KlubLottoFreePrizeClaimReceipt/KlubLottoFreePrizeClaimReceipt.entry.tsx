import React from 'react';
import { createRoot } from 'react-dom/client';
import { QueryClientProvider } from '@tanstack/react-query';
import ComponentLoader from '@SharedScripts/ComponentLoader';
import QueryState from '@SharedScripts/QueryState';
import { FreePrizeClaimReceipt } from '../../Components/FreePrizeClaimReceipt/FreePrizeClaimReceipt';
import { FreePrizeClaimReceiptDataSettings } from '../../Types/DataSettings/freePrizeClaimReceipt';

class KlubLottoFreePrizeClaimReceiptEntry extends ComponentLoader {
  constructor(element: HTMLElement) {
    super(element);
    this.init();
  }

  init() {
    const queryClient = new QueryState().load('shared');

    const ReactApp = (props: FreePrizeClaimReceiptDataSettings) => {
      return (
        <QueryClientProvider client={queryClient}>
          <FreePrizeClaimReceipt {...props} />
        </QueryClientProvider>
      );
    };

    const root = createRoot(this.element);
    root.render(<ReactApp {...this.settings} />);
  }
}

export default KlubLottoFreePrizeClaimReceiptEntry;
