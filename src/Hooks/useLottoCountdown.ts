import { useEffect, useState } from 'react';
import { getFirstDayOfNextMonth, getServerTime, getTimeLeft, timeObj } from '../Utils/countdown';

const useLottoCountdown = ({ drawDate: drawDateString }: { drawDate: string }) => {
  const [drawDate, setDrawDate] = useState(0);
  const [clearAnimations, setClearAnimations] = useState(true);

  const [timeLeft, setTimeLeft] = useState(timeObj);
  const [prevTimeLeft, setPrevTimeLeft] = useState(timeObj);

  useEffect(() => {
    // Convert the incoming string date to milliseconds
    setDrawDate(new Date(drawDateString).getTime());

    const serverTime = getServerTime();
    if (!drawDateString) {
      setDrawDate(getFirstDayOfNextMonth(serverTime));
    }
  }, [drawDateString]);

  useEffect(() => {
    if (!drawDate) return;

    const serverTime = getServerTime();
    const initialOffset = serverTime - new Date().getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime() + initialOffset;
      setTimeLeft(getTimeLeft(now, drawDate));
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [drawDate]);

  useEffect(() => {
    setClearAnimations(false);

    const animTimeout = setTimeout(() => {
      setClearAnimations(true);
      setPrevTimeLeft(timeLeft);
    }, 450);

    return () => clearTimeout(animTimeout);
  }, [timeLeft]);

  return { timeLeft, prevTimeLeft, clearAnimations };
};

export default useLottoCountdown;
