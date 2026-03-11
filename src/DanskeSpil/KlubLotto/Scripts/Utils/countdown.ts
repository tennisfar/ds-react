const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;

const EMPTY_VALUE = '\u00A0\u00A0';

export const timeObj: Record<'d' | 'h' | 'm' | 's', string> = {
  d: EMPTY_VALUE,
  h: EMPTY_VALUE,
  m: EMPTY_VALUE,
  s: EMPTY_VALUE,
};

export const prefixDigits = (number: number) => {
  const digits = `${number}`.split('');
  if (digits.length < 2) digits.unshift('0');
  return digits.join('');
};

export const getServerTime = (): number => {
  const serverTimeString = document.body.getAttribute('data-time-now');
  if (!serverTimeString) return new Date().getTime();
  return new Date(serverTimeString).getTime();
};

export const getFirstDayOfNextMonth = (serverTime: number): number => {
  const now = new Date(serverTime);
  const nextMonth = now.getMonth() + 1;
  const year = now.getFullYear();

  return new Date(year, nextMonth, 1, 0, 0, 0, 0).getTime();
};

export const getTimeLeft = (now: number, drawDate: number) => {
  let distance = drawDate - now;

  if (distance < 0) {
    distance = 0; // Prevent negative countdown
  }

  const d = prefixDigits(Math.floor(distance / day));
  const h = prefixDigits(Math.floor((distance % day) / hour));
  const m = prefixDigits(Math.floor((distance % hour) / minute));
  const s = prefixDigits(Math.floor((distance % minute) / second));

  return { d, h, m, s };
};
