import React from 'react';
import { createRoot } from 'react-dom/client';
import { QueryClientProvider } from '@tanstack/react-query';
import ComponentLoader from '@SharedScripts/ComponentLoader';
import { NewPrizeNotification } from '../../Components/NewPrizeNotification/NewPrizeNotification';
import QueryState from '@SharedScripts/QueryState';
import { NewPrizeNotificationDataSettings } from '../../Types/DataSettings/newPrizeNotification';

class KlubLottoNewPrizeNotificationEntry extends ComponentLoader {
  constructor(element: HTMLElement) {
    super(element);
    this.init();
  }

  init() {
    const queryClient = new QueryState().load('shared');

    const ReactApp = (props: NewPrizeNotificationDataSettings) => {
      return (
        <QueryClientProvider client={queryClient}>
          <NewPrizeNotification {...props} />
        </QueryClientProvider>
      );
    };

    const root = createRoot(this.element);
    root.render(<ReactApp {...this.settings} />);
  }
}

export default KlubLottoNewPrizeNotificationEntry;
