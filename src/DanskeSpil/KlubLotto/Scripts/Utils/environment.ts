// Define the DSConfig type
type DSConfig = {
  ENV: string;
};

// Augment the Window interface
declare global {
  interface Window {
    DS: {
      Config: DSConfig;
    };
    // FIXME: [KlubLotto] specify correct type
    // ref: https://github.com/ds-itu-frontend-service/shared-documentation/blob/main/Tech/Frontend/TYPESCRIPT.md#type-any-and-unknown
    /* eslint-disable @typescript-eslint/no-explicit-any */
    DSAPI?: any;
  }
}

export const isDevEnvironment = () => {
  return window.DS.Config.ENV === 'dev';
};

export const isTownEnvironment = () => {
  return window.DS.Config.ENV.toLowerCase().startsWith('town');
};
