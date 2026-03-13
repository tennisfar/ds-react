import { useQuery } from '@tanstack/react-query';
import { getDictionary } from '../Api/DictionaryApi';
import { DictionaryApiResponse } from '../Types/ApiResponse/dictionary';

export const useDictionaryData = (path: string) => {
  const { data, isLoading, isError } = useQuery<DictionaryApiResponse>({
    queryKey: ['dictionaryData'],
    queryFn: async () => (await getDictionary(path)) as DictionaryApiResponse,
  });

  return {
    data,
    isLoading,
    isError,
  };
};