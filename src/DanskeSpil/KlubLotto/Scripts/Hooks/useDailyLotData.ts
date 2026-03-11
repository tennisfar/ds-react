import { useQuery } from '@tanstack/react-query';
import { getLotDaily } from '../Api/GamesApi';
import { DailyLotApiResponse } from '../Types/ApiResponse/games';

const useDailyLotData = () => {
  const { data, isLoading, isError, refetch } = useQuery<DailyLotApiResponse>({
    queryKey: ['dailyLotData'],
    queryFn: async () => {
      return await getLotDaily();
    },
  });

  return {
    data,
    isLoading,
    isError,
    refetch,
  };
};

export default useDailyLotData;
