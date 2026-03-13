import React from 'react';
import { createRoot } from 'react-dom/client';
import ComponentLoader from '@SharedScripts/ComponentLoader';
import { StarStep } from '../../Components/StarStep/StarStep';
import QueryState from '@SharedScripts/QueryState';
import { QueryClientProvider } from '@tanstack/react-query';
import { StarStepDataSettings } from '../../Types/DataSettings/starStep';

class KlubLottoStarStepEntry extends ComponentLoader {
  constructor(element: HTMLElement) {
    super(element);
    this.init();
  }

  init() {
    const queryClient = new QueryState().load('shared');

    const ReactApp = (props: StarStepDataSettings) => {
      return (
        <QueryClientProvider client={queryClient}>
          <StarStep {...props}/>
        </QueryClientProvider>
      );
    };

    const root = createRoot(this.element);
    root.render(<ReactApp {...this.settings}/>);
  }
}

export default KlubLottoStarStepEntry;
