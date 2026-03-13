import React, { useEffect, useState } from 'react';
import { useCancelAccount } from '../../Hooks/useCancelAccount';
import { Button } from '../Button/Button';
import { openPopupError, openPopupSimple } from '../../Utils/openPopup';
import { CancelMembershipDataSettings } from '../../Types/DataSettings/cancelMembership';

export const CancelMembership = (
  {
    ctaConfirm,
    ctaCancel,
    successPopupTitle,
    successPopupText,
    successPopupCtaLabel,
    errorPopupTitle,
    errorPopupText,
    errorPopupCtaLabel,
  }: CancelMembershipDataSettings) => {
  const { mutate: cancelAccount, isSuccess, isError } = useCancelAccount();
  const [isWorking, setIsWorking] = useState(false);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    if (isError) {
      openPopupError({ title: errorPopupTitle, text: errorPopupText, ctaLabel: errorPopupCtaLabel });
      setIsWorking(false);
    }

    if (isSuccess) {
      setIsDone(true);
      setIsWorking(false);
      openPopupSimple({
        title: successPopupTitle,
        text: successPopupText,
        buttons: [
          {
            ctaLabel: successPopupCtaLabel,
            href: ctaConfirm?.url || '/klublotto',
          },
        ],
        onOverlayClicked: () => {
          window.location.href = ctaConfirm?.url || '/klublotto';
        },
      });
    }
  }, [
    isSuccess,
    isError,
    errorPopupTitle,
    errorPopupText,
    errorPopupCtaLabel,
    successPopupTitle,
    successPopupText,
    successPopupCtaLabel,
  ]);

  const handleConfirm = () => {
    setIsWorking(true);
    cancelAccount();
  };

  return (
    <div className={'kl-cancel-membership__buttons'}>
      <Button tracking={{ action: 'cancelMembership_confirm' }} onClick={handleConfirm} isWorking={isWorking} disabled={isDone}>{ctaConfirm?.text}</Button>
      <Button tracking={{ action: 'cancelMembership_keep' }} variant={'secondary'} href={ctaCancel?.url} disabled={isWorking || isDone}>
        {ctaCancel?.text}
      </Button>
    </div>
  );
};