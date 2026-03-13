import React from 'react';
import { createRoot } from 'react-dom/client';
import { QueryClientProvider } from '@tanstack/react-query';
import ComponentLoader from '@SharedScripts/ComponentLoader';
import QueryState from '@SharedScripts/QueryState';
import { DailyPlayHub } from '../../Components/DailyPlayHub/DailyPlayHub';
import { DailyPlayHubDataSettings } from '../../Types/DataSettings/dailyPlayHub';

class KlubLottoDailyPlayHubEntry extends ComponentLoader {
  constructor(element: HTMLElement) {
    super(element);
    this.init();
  }

  init() {
    const queryClient = new QueryState().load('shared');

    const ReactApp = (props: DailyPlayHubDataSettings) => {
      return (
        <QueryClientProvider client={queryClient}>
          <DailyPlayHub {...props}/>
        </QueryClientProvider>
      );
    };

    const root = createRoot(this.element);
    root.render(<ReactApp {...this.settings}/>);
  }
}

export default KlubLottoDailyPlayHubEntry;
