import ApiRequest from '@SharedScripts/Helpers/ApiRequest';
import { StreakResult } from '../Types/streak';

export const getGameResult = async (game: string): Promise<StreakResult> => {
  return await ApiRequest({ url: `/games/${game}/result` });
};
