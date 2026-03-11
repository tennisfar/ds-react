import ApiRequest from '@SharedScripts/Helpers/ApiRequest';
import { GameType, Platform } from '../Types/game';
import { isDevEnvironment } from '../Utils/environment';
import { DailyLotApiResponse, GameHistoryApiResponse, GameLauncherApiResponse, GamesApiResponse, MarkGameCompletedApiResponse } from '../Types/ApiResponse/games';

const baseUrl = DS.Config.KLUBLOTTO_API_URL;
const withCredentials = isDevEnvironment();

export const getGameHistory = async (gameId: GameType): Promise<GameHistoryApiResponse> => {
  const url = `${baseUrl}/games/${gameId}/history`;
  return await ApiRequest({ url, withCredentials });
};

export const getGames = async (): Promise<GamesApiResponse> => {
  const url = `${baseUrl}/games`;
  return await ApiRequest({ url, withCredentials });
};

export const getLotDaily = async (): Promise<DailyLotApiResponse> => {
  const url = `${baseUrl}/games/lot/daily`;
  return await ApiRequest({ url, withCredentials });
};

export const getGameLauncher = async (gameId: GameType, platform: Platform, gameDate?: string): Promise<GameLauncherApiResponse> => {
  let url = `${baseUrl}/games/${gameId}/gamelauncher/${platform}`;
  if (gameDate) {
    url += `?date=${encodeURIComponent(gameDate)}`;
  }
  return await ApiRequest({ url, withCredentials });
};

export const markGameAsCompleted = async (gameId: GameType, success: boolean, launchGameId: string, launchGameDate: string): Promise<MarkGameCompletedApiResponse> => {
  return await ApiRequest({
    url: `${baseUrl}/games/${gameId}/completed`,
    method: 'PUT' as const,
    body: { success, launchGameId, launchGameDate },
    withCredentials,
  });
};
