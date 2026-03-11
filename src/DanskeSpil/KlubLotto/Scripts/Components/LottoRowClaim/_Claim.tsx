import React from 'react';
import { ClaimProps } from '../../Types/lottoRowClaim';
import { Button } from '../Button/Button';
import { Countdown } from '../Countdown/Countdown';

export const Claim = ({ ticket, claimProps, handleRedeem }: ClaimProps) => {
  const { image, title, text, disclaimer, ctaLabel } = claimProps;
  const { expires } = ticket;

  return (
    <div className={'kl-lotto-row-claim'}>
      <div className={'kl-lotto-row-claim__graphic'}>
        <div className={'kl-lotto-row-claim__graphic-image'}>
          <img src={image?.src} alt={''} />
        </div>
      </div>

      <div className={'kl-lotto-row-claim__title'} dangerouslySetInnerHTML={{ __html: title }} />
      <div className={'kl-lotto-row-claim__text'} dangerouslySetInnerHTML={{ __html: text }} />

      <div className={'kl-lotto-row-claim__total'}>
        <div className={'kl-lotto-row-claim__total-text'}>I alt</div>
        <div className={'kl-lotto-row-claim__total-price'}>0 kr.</div>
      </div>
      <div className={'kl-lotto-row-claim__disclaimer'} dangerouslySetInnerHTML={{ __html: disclaimer }}></div>

      <div className={'kl-lotto-row-claim__countdown'}>
        <div>Udløber om</div>
        <Countdown dueDate={expires} />
      </div>
      <div className={'kl-lotto-row-claim__cta'}>
        <Button tracking={{ action: 'lottoRowClaim_claim' }} onClick={handleRedeem}>
          {ctaLabel}
        </Button>
      </div>
    </div>
  );
};
