import React from 'react';
import { createRoot } from 'react-dom/client';
import ComponentLoader from '@SharedScripts/ComponentLoader';
import { QuizGame } from '../../Components/QuizGame/QuizGame';
import QueryState from '@SharedScripts/QueryState';
import { QueryClientProvider } from '@tanstack/react-query';
import { GameDataSettings } from '../../Types/DataSettings/game';

class KlubLottoGameEntry extends ComponentLoader {
  constructor(element: HTMLElement) {
    super(element);
    this.init();
  }

  init() {
    const queryClient = new QueryState().load('shared');

    const ReactApp = (props: GameDataSettings) => {
      return (
        <QueryClientProvider client={queryClient}>
          <QuizGame {...props} />
        </QueryClientProvider>
      );
    };

    const root = createRoot(this.element);
    root.render(<ReactApp {...this.settings} />);
  }
}

export default KlubLottoGameEntry;
