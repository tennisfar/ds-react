import React from 'react';
import { createRoot } from 'react-dom/client';
import ComponentLoader from '@SharedScripts/ComponentLoader';
import { Newsletter } from '../../Components/Newsletter/Newsletter';
import QueryState from '@SharedScripts/QueryState';
import { QueryClientProvider } from '@tanstack/react-query';
import { NewsletterDataSettings } from '../../Types/DataSettings/newsletter';

class KlubLottoNewsletterEntry extends ComponentLoader {
  constructor(element: HTMLElement) {
    super(element);
    this.init();
  }

  init() {
    const queryClient = new QueryState().load('shared');

    const ReactApp = (props: NewsletterDataSettings) => {
      return (
        <QueryClientProvider client={queryClient}>
          <Newsletter {...props}/>
        </QueryClientProvider>
      );
    };

    const root = createRoot(this.element);
    root.render(<ReactApp {...this.settings}/>);
  }
}

export default KlubLottoNewsletterEntry;
