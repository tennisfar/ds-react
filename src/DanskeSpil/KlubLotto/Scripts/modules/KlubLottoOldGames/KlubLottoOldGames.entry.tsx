import React from 'react';
import { createRoot } from 'react-dom/client';
import ComponentLoader from '@SharedScripts/ComponentLoader';
import { OldGames } from '../../Components/OldGames/OldGames';
import QueryState from '@SharedScripts/QueryState';
import { QueryClientProvider } from '@tanstack/react-query';
import { OldGamesDataSettings } from '../../Types/DataSettings/oldGames';

class KlubLottoOldGamesEntry extends ComponentLoader {
  constructor(element: HTMLElement) {
    super(element);
    this.init();
  }

  init() {
    const queryClient = new QueryState().load('shared');

    const ReactApp = (props: OldGamesDataSettings) => {
      return (
        <QueryClientProvider client={queryClient}>
          <OldGames {...props} />
        </QueryClientProvider>
      );
    };

    const root = createRoot(this.element);
    root.render(<ReactApp {...this.settings} />);
  }
}

export default KlubLottoOldGamesEntry;
