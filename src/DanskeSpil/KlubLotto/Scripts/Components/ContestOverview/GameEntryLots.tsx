import { useCallback, useEffect, useState } from 'react';
import useTicketsData from '../../Hooks/useTicketsData';

export const GameEntryLots = () => {
  const { data, refetch } = useTicketsData();
  const [totalTickets, setTotalTickets] = useState(0);

  useEffect(() => {
    if (Array.isArray(data)) {
      const sum = data.reduce((acc, item) => acc + (item.activity ? 1 : 0) + (item.activity_game ? 1 : 0), 0);
      setTotalTickets(sum);
    }
  }, [data]);

  const reloadData = useCallback(() => {
    if (typeof refetch === 'function') {
      refetch(); // intentionally ignoring returned value
    }
  }, [refetch]);

  useEffect(() => {
    const handler = () => reloadData();
    document.addEventListener('klublotto:firstLot:achieved', handler);
    return () => {
      document.removeEventListener('klublotto:firstLot:achieved', handler);
    };
  }, [reloadData]);

  return totalTickets.toString().padStart(2, '0');
};
