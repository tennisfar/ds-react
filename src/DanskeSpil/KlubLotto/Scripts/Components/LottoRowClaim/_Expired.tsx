import React from 'react';
import { CountdownDigits } from '../Countdown/CountdownDigits';
import { ExpiredProps } from '../../Types/lottoRowClaim';

export const Expired = ({ ticket, expiredProps }: ExpiredProps) => {
  const { title, image } = expiredProps;
  const { expires } = ticket;

  return (
    <div className={'kl-lotto-row-claim'}>
      <div className={'kl-lotto-row-claim__graphic'}>
        <div className={'kl-lotto-row-claim__graphic-image'}>
          <img src={image?.src} alt={''}/>
        </div>
      </div>

      <div className={'kl-lotto-row-claim__title'} dangerouslySetInnerHTML={{ __html: title }}/>

      <div className={'kl-lotto-row-claim__expire-date'}>
        {expires
          ? new Date(expires).toLocaleDateString('da-DK', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
          })
          : ''}
      </div>
      <div className={'kl-lotto-row-claim__countdown'}>
        Udløber om
        <div className={'kl-countdown'}>
          <div className={'kl-countdown__unit-group'}>
            <CountdownDigits timeLeft={'00'} prevTimeLeft={'00'} clearAnimations={true} label={'Min'}/>
          </div>

          <div className={'kl-countdown__unit-group'}>
            <CountdownDigits timeLeft={'00'} prevTimeLeft={'00'} clearAnimations={true} label={'Sek'}/>
          </div>
        </div>
      </div>
    </div>
  );
};
