import { useQuery } from '@tanstack/react-query';
import { getWalletList } from '../Api/AccountsApi';
import { WalletListApiResponse } from '../Types/ApiResponse/accounts';

const useWalletListData = () => {
  const { data, isLoading, isError, refetch } = useQuery<WalletListApiResponse>({
    queryKey: ['walletListData'],
    queryFn: async () => {
      return (await getWalletList());
    },
  });

  return {
    data,
    isLoading,
    isError,
    refetch,
  };
};

export default useWalletListData;
