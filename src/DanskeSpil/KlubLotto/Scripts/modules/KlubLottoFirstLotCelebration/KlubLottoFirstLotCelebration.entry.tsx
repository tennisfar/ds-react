import React from 'react';
import { createRoot } from 'react-dom/client';
import ComponentLoader from '@SharedScripts/ComponentLoader';
import { FirstLotCelebration } from '../../Components/FirstLotCelebration/FirstLotCelebration';
import QueryState from '@SharedScripts/QueryState';
import { QueryClientProvider } from '@tanstack/react-query';
import { FirstLotCelebrationDataSettings } from '../../Types/DataSettings/firstLotCelebration';

class KlubLottoFirstLotCelebrationEntry extends ComponentLoader {
  constructor(element: HTMLElement) {
    super(element);
    this.init();
  }

  init() {
    const queryClient = new QueryState().load('shared');

    const ReactApp = (props: FirstLotCelebrationDataSettings) => {
      return (
        <QueryClientProvider client={queryClient}>
          <FirstLotCelebration {...props}/>
        </QueryClientProvider>
      );
    };

    const root = createRoot(this.element);
    root.render(<ReactApp {...this.settings}/>);
  }
}

export default KlubLottoFirstLotCelebrationEntry;
