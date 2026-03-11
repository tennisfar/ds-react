// Type guard to check if resultData is an object with the expected properties
// FIXME: [KlubLotto] specify correct type
// ref: https://github.com/ds-itu-frontend-service/shared-documentation/blob/main/Tech/Frontend/TYPESCRIPT.md#type-any-and-unknown
/* eslint-disable @typescript-eslint/no-explicit-any */
export const isResultObject = (data: any): data is { title: string; subtitle?: string; text?: string } => {
  return typeof data === 'object' && data !== null && typeof data.title === 'string';
};
