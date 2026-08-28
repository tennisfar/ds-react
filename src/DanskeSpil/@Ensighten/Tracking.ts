// Mock implementation of @Ensighten/Tracking (real module: Website/Components/Shared/Framework/Ensighten/Scripts/Tracking.ts)
export const initTracking = (...args: any[]) => {
  console.log('Mock initTracking called with:', args);
};

export const trackEvent = (...args: any[]) => {
  console.log('Mock trackEvent called with:', args);
};

export const trackPromotion = (...args: any[]) => {
  console.log('Mock trackPromotion called with:', args);
};
