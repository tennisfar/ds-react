import React, { useEffect, useState } from 'react';
import { TitleBase } from '../Title/Title';
import { SubtitleBase } from '../Subtitle/Subtitle';
import { DisclaimerBase } from '../Disclaimer/Disclaimer';
import { Button } from '../Button/Button';
import useConsentData from '../../Hooks/useConsentData';
import { useSetConsent } from '../../Hooks/useSetConsent';
import { useCreateAccount } from '../../Hooks/useCreateAccount';
import { setMembershipCreatedStorageItems } from '../../Utils/membership';
import { useShowRetryErrorPopup } from '../../Hooks/useShowRetryErrorPopup';
import { NewsletterDataSettings } from '../../Types/DataSettings/newsletter';
import { ConsentApiResponse, ConsentState } from '../../Types/ApiResponse/consent';

function parseConsentIds(refs: string): number[] {
  return refs
    .split(',')
    .map((ref) => ref.trim())
    .filter((ref) => ref.length > 0)
    .map((ref) => Number(ref))
    .filter((num) => !isNaN(num));
}

export const Newsletter = ({ title, subtitle, disclaimer, ctaAcceptLabel, ctaDeclineLabel, continueLink, consentIds }: NewsletterDataSettings) => {
  const [loading, setLoading] = useState(true);
  const [hasMadeDecisionOnNewsletter, setHasMadeDecisionOnConsent] = useState(false);
  const [consentStates, setConsentStates] = useState<ConsentState[]>([]);
  const { data: consentData, isLoading: consentDataIsLoading, isError: consentDataIsError } = useConsentData();
  const { mutate: setConsent } = useSetConsent();
  const { mutate: createAccount } = useCreateAccount();
  const continueUrl = continueLink?.url || '/klublotto';
  const showRetryErrorPopup = useShowRetryErrorPopup();
  const parsedConsentIds = parseConsentIds(consentIds);

  useEffect(() => {
    if (consentData) {
      const states = getConsentStateByIds(consentData, parsedConsentIds);
      setConsentStates(states);
    }
    if (consentDataIsError) {
      // Something went wrong, we continue to next page. The show must go on!
      completeCreateAccountFlow();
    }

  }, [consentData, consentDataIsError, consentDataIsLoading]);

  useEffect(() => {
    if (hasMadeDecisionOnNewsletter) {
      setLoading(true);
      return;
    }

    if (!consentData || consentDataIsLoading || consentStates.length === 0) {
      // Data is still loading or not available
      return;
    }


    // If all states in consentStates are 'Accepted', we consider the user has accepted the newsletter.
    const isEveryConsentAccepted = consentStates.every((state) => state === 'Accepted');

    if (isEveryConsentAccepted) {
      completeCreateAccountFlow();
      return;
    }

    // User has not answered or previously declined the newsletter, so we show the newsletter component.
    setLoading(false);
    return;
  }, [consentData, consentDataIsLoading, consentStates, hasMadeDecisionOnNewsletter]);

  const getConsentStateByIds = (data: ConsentApiResponse, ids: number[]): ConsentState[] => {
    return ids
      .map((id) => {
        for (const item of data) {
          const allConsents = [...(item.mainConsents || []), ...(item.subConsents || [])];
          // FIXME: [KlubLotto] specify correct type
          // ref: https://github.com/ds-itu-frontend-service/shared-documentation/blob/main/Tech/Frontend/TYPESCRIPT.md#type-any-and-unknown
          /* eslint-disable @typescript-eslint/no-explicit-any */
          const consent = allConsents.find((c: any) => c.id === id);
          if (consent) {
            return consent.state as ConsentState;
          }
        }
        return null;
      })
      .filter((state): state is ConsentState => state !== null);
  };

  const completeCreateAccountFlow = () => {
    createAccount(undefined, {
      onSuccess: () => {
        setMembershipCreatedStorageItems();
        window.location.href = continueUrl;
      },
      onError: () => {
        showRetryErrorPopup();
      },
    });
  };

  const handleConsentClick = (accepted: boolean) => {
    setHasMadeDecisionOnConsent(true);
    setConsent(
      { consentIds: parsedConsentIds, accepted },
      {
        onSuccess: () => completeCreateAccountFlow(),
        onError: () => completeCreateAccountFlow(),
      }
    );
  };

  if (loading) {
    return (
      <div className={'kl-newsletter__spinner'}>
        <div className={'kl-spinner kl-spinner--dark'}>
          <div className={'kl-spinner__circle'}></div>
        </div>
      </div>
    );
  }

  return (
    <div className={'kl-newsletter'}>
      <TitleBase className={'kl-newsletter__title'}>{title}</TitleBase>
      <SubtitleBase className={'kl-newsletter__subtitle'}>{subtitle}</SubtitleBase>
      <DisclaimerBase className={'kl-newsletter__disclaimer'}>{disclaimer}</DisclaimerBase>
      <div className={'kl-newsletter__buttons'}>
        <Button tracking={{ action: 'newsletter' }} onClick={() => handleConsentClick(true)}>{ctaAcceptLabel}</Button>
        <Button tracking={{ action: 'newsletter' }} onClick={() => handleConsentClick(false)}>{ctaDeclineLabel}</Button>
      </div>
    </div>
  );
};