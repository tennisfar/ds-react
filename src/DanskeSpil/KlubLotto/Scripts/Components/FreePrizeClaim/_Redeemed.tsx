import React from 'react';
import { WalletListAwardApiResponse } from '../../Types/ApiResponse/accounts';
import { NumberGamesType } from '../../Types/numberGames';

export type RedeemedProps = {
  title: string;
};

type Props = {
  ticket: WalletListAwardApiResponse;
  numberGamesType: NumberGamesType;
  redeemedProps: RedeemedProps;
};

export const Redeemed = ({ ticket, numberGamesType, redeemedProps }: Props) => {
  const { title } = redeemedProps;
  const { redeemed } = ticket;

  return (
    <div className={`kl-free-prize-claim kl-free-prize-claim--${numberGamesType}`}>
      <div className={'kl-free-prize-claim__graphic'}>
        <img
          className={'kl-free-prize-claim__graphic-image'}
          src={`/dlo/Components/DanskeSpil/Domain/Feature.KlubLotto/Graphics/FreePrizeClaim/${numberGamesType}-slip.svg`}
          alt={''}
        />
      </div>

      <div className={'kl-free-prize-claim__title'} dangerouslySetInnerHTML={{ __html: title }}/>

      <div className={'kl-free-prize-claim__expire-date'}>
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
