import ApiRequest from '@SharedScripts/Helpers/ApiRequest';
import { isDevEnvironment } from '../Utils/environment';
import { ConsentApiResponse } from '../Types/ApiResponse/consent';

const withCredentials = isDevEnvironment();

export const getConsent = async (): Promise<ConsentApiResponse> => {
  const url = DS.Config.CONSENT_API_URL + '/v2/consent';
  return await ApiRequest({ url, withCredentials });
};

type ConsentItem = {
  id: number;
  accepted: boolean;
}

type SetConsentProps = {
  consentItems: ConsentItem[];
  reference: string;
};

export const setConsent = async (payload: SetConsentProps) => {
  const url = DS.Config.CONSENT_API_URL + '/v2/consent';
  return await ApiRequest({ url, method: 'POST', withCredentials, body: payload });
};