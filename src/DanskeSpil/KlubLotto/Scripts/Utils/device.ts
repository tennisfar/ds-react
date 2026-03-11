export const getDeviceType = () => {
  if (document.querySelector('body')?.classList.contains('is-desktop-detected')) {
    return 'web';
  }

  return 'mobile';
};
