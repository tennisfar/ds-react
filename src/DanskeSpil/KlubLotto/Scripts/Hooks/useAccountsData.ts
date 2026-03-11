import { useQuery } from '@tanstack/react-query';
import { getWalletCount } from '../Api/AccountsApi';
import { WalletCountApiResponse } from '../Types/ApiResponse/accounts';

export const useWalletCountData = () => {
  const { data, isLoading, isError } = useQuery<WalletCountApiResponse>({
    queryKey: ['accountsWalletCountData'],
    queryFn: () => getWalletCount(),
  });

  return {
    data,
    isLoading,
    isError,
  };
};

export type TicketsResponseProps = {
  weekDayNumber: number;
  isPast: boolean;
  date: string;
  activity: boolean;
  activity_game: boolean;
}[];
