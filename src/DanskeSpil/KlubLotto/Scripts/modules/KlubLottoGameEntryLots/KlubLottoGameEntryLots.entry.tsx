import React from 'react';
import { createRoot } from 'react-dom/client';
import ComponentLoader from '@SharedScripts/ComponentLoader';
import { GameEntryLots } from '../../Components/ContestOverview/GameEntryLots';
import QueryState from '@SharedScripts/QueryState';
import { QueryClientProvider } from '@tanstack/react-query';

class KlubLottoGameEntryLots extends ComponentLoader {
  constructor(element: HTMLElement) {
    super(element);
    this.init();
  }

  init() {
    const queryClient = new QueryState().load('shared');

    const ReactApp = () => {
      return (
        <QueryClientProvider client={queryClient}>
          <GameEntryLots />
        </QueryClientProvider>
      );
    };

    const root = createRoot(this.element);
    root.render(<ReactApp {...this.settings} />);
  }
}

export default KlubLottoGameEntryLots;
