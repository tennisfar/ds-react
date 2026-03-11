import React from 'react';
import { createRoot } from 'react-dom/client';
import ComponentLoader from '@SharedScripts/ComponentLoader';
import SignupPromo from '../../Components/SignupPromo/SignupPromo';
import { SignupPromoDataSettings } from '../../Types/DataSettings/signupPromo';

class KlubLottoSignupPromoEntry extends ComponentLoader {
  constructor(element: HTMLElement) {
    super(element);
    this.init();
  }

  init() {
    const ReactApp = (props: SignupPromoDataSettings) => {
      return <SignupPromo {...props} />;
    };

    const root = createRoot(this.element);
    root.render(<ReactApp {...this.settings} />);
  }
}

export default KlubLottoSignupPromoEntry;
