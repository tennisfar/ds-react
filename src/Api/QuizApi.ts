import ApiRequest from '@SharedScripts/Helpers/ApiRequest';
import { isDevEnvironment } from '../Utils/environment';
import { QuizQuestionApiResponse } from '../Types/ApiResponse/quiz';

const baseUrl = DS.Config.KLUBLOTTO_API_URL;
const withCredentials = isDevEnvironment();

export const getQuizQuestion = async (
  key?: number,
  answer?: number,
  gameDate?: string
): Promise<QuizQuestionApiResponse> => {
  let requestBody = {};

  if (key !== undefined && answer !== undefined) {
    requestBody = {
      key,
      answer,
    };
  }

  let url = `${baseUrl}/games/quiz/question`;
  if (gameDate) {
    url += `?date=${encodeURIComponent(gameDate)}`;
  }

  return await ApiRequest({ url, withCredentials, method: 'POST', body: requestBody });
};
