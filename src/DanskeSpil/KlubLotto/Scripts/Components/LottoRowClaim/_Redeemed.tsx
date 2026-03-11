import React from 'react';
import { RedeemedProps } from '../../Types/lottoRowClaim';

export const Redeemed = ({ ticket, redeemedProps }: RedeemedProps) => {
  const { title, image } = redeemedProps;
  const { redeemed } = ticket;

  return (
    <div className={'kl-lotto-row-claim'}>
      <div className={'kl-lotto-row-claim__graphic'}>
        <div className={'kl-lotto-row-claim__graphic-image'}>
          <img src={image?.src} alt={''} />
        </div>
      </div>

      <div className={'kl-lotto-row-claim__title'} dangerouslySetInnerHTML={{ __html: title }} />

      <div className={'kl-lotto-row-claim__expire-date'}>
        {redeemed
          ? new Date(redeemed).toLocaleDateString('da-DK', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
              hour: '2-digit',
              minute: '2-digit',
            })
          : ''}
      </div>
    </div>
  );
};
