import { useQuery } from '@tanstack/react-query';
import { getPrizes } from '../Api/PrizesApi';
import { PrizesApiResponse } from '../Types/ApiResponse/prizes';

const usePrizesData = () => {
  const { data, isLoading, isError } = useQuery<PrizesApiResponse>({
    queryKey: ['prizesData'],
    queryFn: async () => {
      return (await getPrizes());
    },
  });

  return {
    data,
    isLoading,
    isError,
  };
};

export default usePrizesData;
