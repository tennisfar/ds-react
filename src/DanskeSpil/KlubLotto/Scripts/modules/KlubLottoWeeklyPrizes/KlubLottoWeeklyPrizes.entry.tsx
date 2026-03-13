import React from 'react';
import { createRoot } from 'react-dom/client';
import { QueryClientProvider } from '@tanstack/react-query';
import ComponentLoader from '@SharedScripts/ComponentLoader';
import QueryState from '@SharedScripts/QueryState';
import { WeeklyPrizes } from '../../Components/WeeklyPrizes/WeeklyPrizes';
import { WeeklyPrizesDataSettings } from '../../Types/DataSettings/weeklyPrizes';

class KlubLottoWeeklyPrizesEntry extends ComponentLoader {
  constructor(element: HTMLElement) {
    super(element);
    this.init();
  }

  init() {
    const queryClient = new QueryState().load('shared');

    const ReactApp = (props: WeeklyPrizesDataSettings) => {
      return (
        <QueryClientProvider client={queryClient}>
          <WeeklyPrizes {...props}/>
        </QueryClientProvider>
      );
    };

    const root = createRoot(this.element);
    root.render(<ReactApp {...this.settings}/>);
  }
}

export default KlubLottoWeeklyPrizesEntry;
