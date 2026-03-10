export const getUrlParam = (param: string) => {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param) as string | null;
};
