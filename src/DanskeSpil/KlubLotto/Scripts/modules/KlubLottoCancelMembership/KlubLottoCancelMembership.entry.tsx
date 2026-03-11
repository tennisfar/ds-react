import React from 'react';
import { createRoot } from 'react-dom/client';
import { QueryClientProvider } from '@tanstack/react-query';
import ComponentLoader from '@SharedScripts/ComponentLoader';
import QueryState from '@SharedScripts/QueryState';
import { CancelMembership } from '../../Components/CancelMembership/CancelMembership';
import { CancelMembershipDataSettings } from '../../Types/DataSettings/cancelMembership';

class KlubLottoCancelMembershipEntry extends ComponentLoader {
  constructor(element: HTMLElement) {
    super(element);
    this.init();
  }

  init() {
    const queryClient = new QueryState().load('shared');

    const ReactApp = (props: CancelMembershipDataSettings) => {
      return (
        <QueryClientProvider client={queryClient}>
          <CancelMembership {...props} />
        </QueryClientProvider>
      );
    };

    const root = createRoot(this.element);
    root.render(<ReactApp {...this.settings} />);
  }
}

export default KlubLottoCancelMembershipEntry;
