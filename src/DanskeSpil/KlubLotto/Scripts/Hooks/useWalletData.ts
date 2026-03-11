import { useQuery } from '@tanstack/react-query';
import { getWallet } from '../Api/AccountsApi';
import { WalletApiResponse } from '../Types/ApiResponse/accounts';

const useWalletData = () => {
  const { data, isLoading, isError } = useQuery<WalletApiResponse>({
    queryKey: ['walletData'],
    queryFn: async () => {
      return (await getWallet());
    },
  });

  return {
    data,
    isLoading,
    isError,
  };
};

export default useWalletData;
