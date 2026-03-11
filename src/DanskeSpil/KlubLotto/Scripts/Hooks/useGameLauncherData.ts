import { useQuery } from '@tanstack/react-query';
import { getGameLauncher } from '../Api/GamesApi';
import { GameType, Platform } from '../Types/game';
import { GameLauncherApiResponse } from '../Types/ApiResponse/games';

const useGameLauncherData = (gameId: GameType, platform: Platform, gameDate?: string) => {
  const { data, isLoading, isError } = useQuery<GameLauncherApiResponse, Error>({
    queryKey: ['gameLauncherData' + gameId, platform, gameDate || ''],
    queryFn: async () => {
      return (await getGameLauncher(gameId, platform, gameDate)) as GameLauncherApiResponse;
    },
  });

  const id = data?.id;
  const url = data?.url;
  const isCompleted = data?.completed;

  // TODO: catch error 400 when date is out of range

  // TODO: only return data, not id, url, isCompleted

  return {
    data,
    id,
    url,
    isCompleted,
    isLoading,
    isError,
  };
};

export default useGameLauncherData;
