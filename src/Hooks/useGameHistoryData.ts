import { useQuery } from '@tanstack/react-query';
import { getGameHistory } from '../Api/GamesApi';
import { GameType } from '../Types/game';
import { GameHistoryApiResponse } from '../Types/ApiResponse/games';

const useGameHistoryData = (gameId: GameType) => {
  const { data, isLoading, isError } = useQuery<GameHistoryApiResponse>({
    queryKey: ['gameHistoryData', gameId],
    queryFn: async () => {
      return (await getGameHistory(gameId)) as GameHistoryApiResponse;
    },
  });

  return {
    data,
    isLoading,
    isError,
  };
};

export default useGameHistoryData;
