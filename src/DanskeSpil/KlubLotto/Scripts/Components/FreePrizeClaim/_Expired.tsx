import React from 'react';
import { CountdownDigits } from '../Countdown/CountdownDigits';
import { WalletListAwardApiResponse } from '../../Types/ApiResponse/accounts';
import { NumberGamesType } from '../../Utils/numberGamesType';

export type ExpiredProps = {
  title: string;
}

type Props = {
  ticket: WalletListAwardApiResponse;
  numberGamesType: NumberGamesType;
  expiredProps: ExpiredProps;
}

export const Expired = ({ ticket, numberGamesType, expiredProps }: Props) => {
  const { title } = expiredProps;
  const { expires } = ticket;

  return (
    <div className={`kl-free-prize-claim kl-free-prize-claim--${numberGamesType}`}>
      <div className={'kl-free-prize-claim__graphic'}>
        <img
          className={'kl-free-prize-claim__graphic-image'}
          src={`/dlo/Components/DanskeSpil/Domain/Feature.KlubLotto/Graphics/FreePrizeClaim/${numberGamesType}-slip.svg`}
          alt={''}/>
      </div>

      <div className={'kl-free-prize-claim__title'} dangerouslySetInnerHTML={{ __html: title }}/>

      <div className={'kl-free-prize-claim__expire-date'}>
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
      <div className={'kl-free-prize-claim__countdown'}>
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
