import { useEffect, useState } from 'react';
import { getFirstDayOfNextMonth, getServerTime, getTimeLeft, timeObj } from '../Utils/countdown';

type UseCountdownProps = {
  dueDate?: string;
};

const useCountdown = ({ dueDate }: UseCountdownProps) => {
  const [drawDate, setDrawDate] = useState(0);
  const [clearAnimations, setClearAnimations] = useState(true);
  const [timeLeft, setTimeLeft] = useState(timeObj);
  const [prevTimeLeft, setPrevTimeLeft] = useState(timeObj);

  useEffect(() => {
    const serverTime = getServerTime();

    // Use expireDate if provided, otherwise use first day of next month
    if (dueDate) {
      setDrawDate(new Date(dueDate).getTime());
    } else {
      setDrawDate(getFirstDayOfNextMonth(serverTime));
    }
  }, [dueDate]);

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

export default useCountdown;
