import { useQuery } from '@tanstack/react-query';
import { redeemAward } from '../Api/AccountsApi';
import { RedeemAwardApiResponse } from '../Types/ApiResponse/accounts';

const useRedeemAwardData = (awardId: string, enabled: boolean) => {
  const { data, isLoading, isError } = useQuery<RedeemAwardApiResponse, Error>({
    queryKey: ['redeemAwardData', awardId],
    queryFn: async () => {
      return (await redeemAward(awardId));
    },
    enabled,
  });

  return { data, isLoading, isError };
};

export default useRedeemAwardData;
