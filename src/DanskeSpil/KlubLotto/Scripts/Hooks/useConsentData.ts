import { useQuery } from '@tanstack/react-query';
import { getConsent } from '../Api/ConsentApi';
import { ConsentApiResponse } from '../Types/ApiResponse/consent';

const useConsentData = () => {
  const { data, isLoading, isError } = useQuery<ConsentApiResponse>({
    queryKey: ['consentData'],
    queryFn: async () => {
      return (await getConsent()) as ConsentApiResponse;
    },
  });

  return { data, isLoading, isError };
};

export default useConsentData;
