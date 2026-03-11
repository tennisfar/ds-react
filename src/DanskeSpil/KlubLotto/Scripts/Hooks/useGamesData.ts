import { useQuery } from '@tanstack/react-query';
import { getGames } from '../Api/GamesApi';
import { GamesApiResponse } from '../Types/ApiResponse/games';

const useGamesData = () => {
  const { data, isLoading, isError } = useQuery<GamesApiResponse>({
    queryKey: ['gamesData'],
    queryFn: async () => {
      return await getGames();
    },
  });

  return {
    data,
    isLoading,
    isError,
  };
};

export default useGamesData;
