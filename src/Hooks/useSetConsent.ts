import { useMutation } from '@tanstack/react-query';
import { setConsent } from '../Api/ConsentApi';

export const useSetConsent = () => {
  return useMutation({
    mutationFn: async ({ consentIds, accepted }: { consentIds: number[]; accepted: boolean }) => {
      return (await setConsent({
        consentItems: consentIds.map((id) => ({ id, accepted })),
        reference: 'klublotto-consent',
      })) as { success: boolean };
    },
  });
};
