import { useQuery } from '@tanstack/react-query';
import { getTickets } from '../Api/AccountsApi';
import { TicketsApiResponse } from '../Types/ApiResponse/accounts';

const useTicketsData = () => {
  const { data, isLoading, isError, refetch, isRefetching } = useQuery<TicketsApiResponse>({
    queryKey: ['ticketsData'],
    queryFn: async () => {
      return (await getTickets());
    },
  });

  return {
    data,
    isLoading,
    isError,
    refetch,
    isRefetching,
  };
};

export default useTicketsData;