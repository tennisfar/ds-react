import React from 'react';
import { getDefaultPoolSizeFormatted, PoolInfo } from '../../Utils/poolFeed';
import { NumberGamesTypeCountdown } from '../NumberGamesTypeCountdown/NumberGamesTypeCountdown';
import { CouponApiResponse } from '../../Types/ApiResponse/numberGames';
import { NumberGamesType } from '../../Utils/numberGamesType';

export type ReceiptProps = {
  title: string;
  text: string;
  disclaimer: string;
};

type Props = {
  couponData: CouponApiResponse;
  numberGamesType: NumberGamesType;
  poolFeed: PoolInfo | undefined;
  receiptProps: ReceiptProps;
};

export const Receipt = ({ couponData, numberGamesType, poolFeed, receiptProps }: Props) => {
  const { title, disclaimer } = receiptProps;
  let { text } = receiptProps;
  const { couponId, primaryGame, transactionDate } = couponData;
  const { drawInfo, rows } = primaryGame;
  const drawDate = drawInfo[0]?.drawDate || '';
  const logoUrl = `/dlo/Components/DanskeSpil/Domain/Feature.Components/Graphics/BrandLogos/${numberGamesType}.svg`;

  text = text.replace('{poolsize}', poolFeed?.poolSizeFormatted || getDefaultPoolSizeFormatted(numberGamesType));

  return (
    <div className={`kl-free-prize-claim kl-free-prize-claim--${numberGamesType}`}>
      <img
        src={logoUrl} alt='' className={'kl-free-prize-claim__game-type-logo'}/>

      <NumberGamesTypeCountdown
        numberGamesType={numberGamesType}
        className={'kl-free-prize-claim__numbergames-countdown'}
        drawDate={drawDate}/>

      <div>
        <div className={'kl-free-prize-claim__title'} dangerouslySetInnerHTML={{ __html: title }}/>
        <div className={'kl-free-prize-claim__text'} dangerouslySetInnerHTML={{ __html: text }}/>
      </div>

      <div className={'kl-free-prize-claim__receipt'}>
        <div className={'kl-free-prize-claim__receipt-paper'}>
          <img src={logoUrl} alt={''} className={'kl-free-prize-claim__receipt-logo'}/>
          <div className={'kl-free-prize-claim__receipt-date'}>
            {transactionDate
              ? new Date(transactionDate).toLocaleDateString('da-DK', {
                day: 'numeric',
                month: 'long',
                year: 'numeric',
              }) +
              ' kl.' +
              new Date(transactionDate).toLocaleTimeString('da-DK', {
                hour: '2-digit',
                minute: '2-digit',
                hour12: false,
              })
              : ''}
          </div>
          <div className={'kl-free-prize-claim__receipt-coupon-id'}>Kupon: {couponId}</div>
          <div className={'kl-free-prize-claim__receipt-rows'}>
            {rows.map((row, index) => {
              const rowNumbers = row.numbers || [];
              const rowExtraNumbers = row.extraNumbers || [];
              return (
                <div className={'kl-free-prize-claim__receipt-row'} key={index}>
                  <div className={'kl-free-prize-claim__receipt-row-prefix'}>{index + 1}.</div>
                  <div className={'kl-free-prize-claim__receipt-row-numbers'}>
                    {rowNumbers.map((rowNumber) => (
                      <div key={rowNumber} className={'kl-free-prize-claim__receipt-row-number'}>
                        {rowNumber}
                      </div>
                    ))}

                    {rowExtraNumbers.length ? (
                      <>
                        <div className={'kl-free-prize-claim__receipt-row-seperator'}>+</div>
                        {rowExtraNumbers.map((rowExtraNumber) => (
                          <div key={rowExtraNumber} className={'kl-free-prize-claim__receipt-row-extra-number'}>
                            {rowExtraNumber}
                          </div>
                        ))}
                      </>
                    ) : null}


                  </div>
                </div>
              );
            })}
          </div>
          <div className={'kl-free-prize-claim__total'}>
            <div className={'kl-free-prize-claim__total-text'}>Samlet v&aelig;rdi</div>
            <div className={'kl-free-prize-claim__total-price'}>0 kr.</div>
          </div>
          <div className={'kl-free-prize-claim__disclaimer'} dangerouslySetInnerHTML={{ __html: disclaimer }}/>
        </div>
      </div>
    </div>
  );
};
