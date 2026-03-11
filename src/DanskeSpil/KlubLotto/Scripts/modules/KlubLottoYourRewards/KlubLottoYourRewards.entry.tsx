import React from 'react';
import { createRoot } from 'react-dom/client';
import { QueryClientProvider } from '@tanstack/react-query';
import ComponentLoader from '@SharedScripts/ComponentLoader';
import QueryState from '@SharedScripts/QueryState';
import { YourRewards } from '../../Components/YourRewards/YourRewards';

class KlubLottoYourRewardsEntry extends ComponentLoader {
  constructor(element: HTMLElement) {
    super(element);
    this.init();
  }

  init() {
    const queryClient = new QueryState().load('shared');

    const ReactApp = () => {
      return (
        <QueryClientProvider client={queryClient}>
          <YourRewards />
        </QueryClientProvider>
      );
    };

    const root = createRoot(this.element);
    root.render(<ReactApp {...this.settings} />);
  }
}

export default KlubLottoYourRewardsEntry;
