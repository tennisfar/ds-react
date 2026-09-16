import { useQuery } from '@tanstack/react-query';
import { getGameResult } from '../Api/GamesApi';
import { StreakResult } from '../Types/streak';

const useGameResultData = (game: string) => {
  const { data, isLoading, isError } = useQuery<StreakResult>({
    queryKey: ['gameResultData', game],
    queryFn: async () => {
      return await getGameResult(game);
    },
  });

  return {
    data,
    isLoading,
    isError,
  };
};

export default useGameResultData;
