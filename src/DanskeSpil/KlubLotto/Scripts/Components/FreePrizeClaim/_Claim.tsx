import React from 'react';
import { Button } from '../Button/Button';
import { Countdown } from '../Countdown/Countdown';
import { NumberGamesType } from '../../Utils/numberGamesType';
import { WalletListAwardApiResponse } from '../../Types/ApiResponse/accounts';

export type ClaimProps = {
  title: string;
  text: string;
  disclaimer: string;
  ctaLabel: string;
};

type Props = {
  ticket: WalletListAwardApiResponse;
  numberGamesType: NumberGamesType;
  gameRows: number;
  handleRedeem: () => void;
  claimProps: ClaimProps;
};

export const Claim = ({ ticket, numberGamesType, gameRows, handleRedeem, claimProps }: Props) => {
  const { title, text, disclaimer, ctaLabel } = claimProps;
  const { expires } = ticket;

  return (
    <div className={`kl-free-prize-claim kl-free-prize-claim--${numberGamesType}`}>
      <div className={'kl-free-prize-claim__graphic'}>
        <img
          className={'kl-free-prize-claim__graphic-image'}
          src={`/dlo/Components/DanskeSpil/Domain/Feature.KlubLotto/Graphics/FreePrizeClaim/${numberGamesType}-slip.svg`}
          alt={''}
        />
      </div>

      <div>
        <div className={'kl-free-prize-claim__title'} dangerouslySetInnerHTML={{ __html: title }} />
        <div className={'kl-free-prize-claim__text'} dangerouslySetInnerHTML={{ __html: text }} />
      </div>

      <div>
        <div className={'kl-free-prize-claim__rows'}>
          <div className={'kl-free-prize-claim__rows-graphic'}>
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="33" viewBox="0 0 32 33" fill="none">
              <path
                opacity="0.3"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M21.0869 2.6182C22.174 2.42708 23.211 3.15248 23.4033 4.23929L27.501 27.4121C27.6935 28.5006 26.9666 29.5391 25.8779 29.7305L13.6729 31.876C12.5859 32.0669 11.5497 31.3416 11.3574 30.2549L11.1445 29.0508L22.3457 27.0811C23.4342 26.8897 24.161 25.852 23.9688 24.7637L20.083 2.79398L21.0869 2.6182Z"
                fill="currentColor"
              />
              <path
                d="M17.8421 0.525618C18.8052 0.355795 19.734 1.06559 19.9182 2.11004L23.8724 24.5356C24.0566 25.5801 23.4265 26.5648 22.4634 26.7346L10.6881 28.8109C9.72501 28.9807 8.79618 28.2709 8.61201 27.2265L4.65777 4.80086C4.47361 3.75641 5.10366 2.77174 6.06678 2.60192L17.8421 0.525618Z"
                stroke="currentColor"
              />
              <path
                d="M9.53756 7.26722L16.1758 6.09671C16.3717 6.06217 16.4969 5.84351 16.4554 5.60831C16.4139 5.37311 16.2215 5.21045 16.0257 5.24498L9.38738 6.41549C9.1915 6.45003 9.06633 6.66869 9.10781 6.90389C9.14928 7.13909 9.34169 7.30175 9.53756 7.26722Z"
                fill="currentColor"
              />
              <path
                opacity="0.3"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M7.14684 15.6093L21.2769 13.1178L20.5245 8.85127L6.39453 11.3428L7.14684 15.6093Z"
                fill="currentColor"
              />
              <path
                opacity="0.3"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8.57258 23.6961L22.7026 21.2046L21.9215 16.7749L7.7915 19.2664L8.57258 23.6961Z"
                fill="currentColor"
              />
            </svg>
          </div>
          <div>Rækker</div>
          <div>{gameRows}</div>
        </div>

        <div className={'kl-free-prize-claim__total'}>
          <div className={'kl-free-prize-claim__total-text'}>I alt</div>
          <div className={'kl-free-prize-claim__total-price'}>0 kr.</div>
        </div>
        <div className={'kl-free-prize-claim__disclaimer'} dangerouslySetInnerHTML={{ __html: disclaimer }}></div>
      </div>

      <div className={'kl-free-prize-claim__countdown'}>
        <div>Udløber om</div>
        <Countdown dueDate={expires} />
      </div>
      <div className={'kl-free-prize-claim__cta'}>
        <Button tracking={{ action: 'lottoRowClaim_claim' }} onClick={handleRedeem}>
          {ctaLabel}
        </Button>
      </div>
    </div>
  );
};
