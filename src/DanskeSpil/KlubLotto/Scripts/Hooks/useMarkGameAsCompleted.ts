import { useMutation } from '@tanstack/react-query';
import { markGameAsCompleted } from '../Api/GamesApi';
import { GameType } from '../Types/game';
import { MarkGameCompletedApiResponse } from '../Types/ApiResponse/games';

const useMarkGameAsCompleted = () => {
  const { mutate, data, isPending, isError, isSuccess } = useMutation<
    MarkGameCompletedApiResponse,
    Error,
    { gameId: GameType; success: boolean; launchGameId: string; launchGameDate: string }
  >({
    mutationFn: async ({ gameId, success, launchGameId, launchGameDate }) => {
      return (await markGameAsCompleted(gameId, success, launchGameId, launchGameDate)) as MarkGameCompletedApiResponse;
    },
  });

  return {
    mutate,
    data,
    isPending,
    isError,
    isSuccess,
  };
};

export default useMarkGameAsCompleted;
