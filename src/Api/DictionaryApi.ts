import ApiRequest from '@SharedScripts/Helpers/ApiRequest';
import { DictionaryApiResponse } from '../Types/ApiResponse/dictionary';

export const getDictionary = async (path: string) : Promise<DictionaryApiResponse> => {
  const url = `${DS.Config.CONTEXTPREFIX}/scapi/common/dictionary/dictionary?path=${path}&variants=1`;
  return await ApiRequest({ url });
};
