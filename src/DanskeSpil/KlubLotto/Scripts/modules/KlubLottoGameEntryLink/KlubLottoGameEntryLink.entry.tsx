import React from 'react';
import { createRoot } from 'react-dom/client';
import { QueryClientProvider } from '@tanstack/react-query';
import ComponentLoader from '@SharedScripts/ComponentLoader';
import QueryState from '@SharedScripts/QueryState';
import { GameEntryLink } from '../../Components/ContestOverview/GameEntryLink';
import { GameEntryLinkDataSettings } from '../../Types/DataSettings/gameEntryLink';

class KlubLottoGameEntryLinkEntry extends ComponentLoader {
  constructor(element: HTMLElement) {
    super(element);
    this.init();
  }

  init() {
    const queryClient = new QueryState().load('shared');

    const ReactApp = (props: GameEntryLinkDataSettings) => {
      return (
        <QueryClientProvider client={queryClient}>
          <GameEntryLink {...props}/>
        </QueryClientProvider>
      );
    };

    const root = createRoot(this.element);
    root.render(<ReactApp {...this.settings}/>);
  }
}

export default KlubLottoGameEntryLinkEntry;
