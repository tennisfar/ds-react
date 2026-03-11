export const output = (message: string, ...optionalParams: (string | number | boolean)[]) => {
  console.log('%c KLUB LOTTO ', 'background: #c50005; color: #fff; font-weight: bold;', message, ...optionalParams);
};
