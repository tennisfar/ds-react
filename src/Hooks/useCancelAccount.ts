import { useMutation } from '@tanstack/react-query';
import { cancelAccount } from '../Api/AccountsApi';
import { CancelAccountApiResponse } from '../Types/ApiResponse/accounts';

export const useCancelAccount = () => {
  return useMutation<CancelAccountApiResponse>({
    mutationFn: cancelAccount,
  });
};
