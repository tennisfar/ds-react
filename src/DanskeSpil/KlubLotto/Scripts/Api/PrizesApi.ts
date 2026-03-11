import ApiRequest from '@SharedScripts/Helpers/ApiRequest';
import { isDevEnvironment } from '../Utils/environment';
import { PrizesApiResponse } from '../Types/ApiResponse/prizes';

const baseUrl = DS.Config.KLUBLOTTO_API_URL;
const withCredentials = isDevEnvironment();

export const getPrizes = async (): Promise<PrizesApiResponse> => {
  const url = `${baseUrl}/prizes`;
  return await ApiRequest({ url, withCredentials });
};