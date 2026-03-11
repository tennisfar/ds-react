import { useMutation } from '@tanstack/react-query';
import { createAccount } from '../Api/AccountsApi';
import { CreateAccountApiResponse } from '../Types/ApiResponse/accounts';

export const useCreateAccount = () => {
  return useMutation<CreateAccountApiResponse>({
    mutationFn: async () => {
      return await createAccount();
    },
  });
};
