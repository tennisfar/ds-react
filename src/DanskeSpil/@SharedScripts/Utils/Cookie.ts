const MS_PER_DAY = 24 * 60 * 60 * 1000; // 1 day in milliseconds

export const setCookie = (name: string, value: string, days = 365) => {
  const expires = new Date(Date.now() + (days * MS_PER_DAY)).toUTCString();
  const secureAttribute = window.location.protocol === 'https:' ? '; Secure' : '';
  document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expires}; path=/; SameSite=Lax${secureAttribute}`;
};

export const getCookie = (name: string): string | null => {
  const value = document.cookie
    .split('; ')
    .find((row) => row.startsWith(name + '='))
    ?.split('=')[1];
  return value ? decodeURIComponent(value) : null;
};

export const getBossoHash = function (context: 'DLI' | 'DLO'): string | null {
  const bossoCookieMap: Record<'DLI' | 'DLO', string> = {
    DLI: 'BOSSOisLoggedIn',
    DLO: 'BOSSOisLoggedInDLO'
  };

  const bossoCookie = bossoCookieMap[context];
  if (bossoCookie) {
    return getCookie(bossoCookie);
  }

  return null;
};
