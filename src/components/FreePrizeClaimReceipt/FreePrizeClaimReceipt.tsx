import React, { useEffect, useState } from 'react';
import { getUrlParam } from '../../Utils/urlParams';
import useNumberGamesCouponData from '../../Hooks/useNumberGamesCouponData';
// import useRedeemAwardData from '../../Hooks/useRedeemAwardData';
// import useWalletListData from '../../Hooks/useWalletListData';
import { Spinner } from '../Spinner/Spinner';
import { ErrorDefaultOutput } from '../ErrorDefaultOutput/ErrorDefaultOutput';
// import { WalletListAwardApiResponse, WalletListAwardClaimType } from '../../Types/ApiResponse/accounts';
import { CouponApiResponse } from '../../Types/ApiResponse/numberGames';
import { getNumberGamesType, NumberGamesType } from '../../Utils/numberGamesType.ts';
import { WalletListAwardClaimType } from '../../Types/ApiResponse/accounts.ts';
// import { FreePrizeClaimDataSettings } from '../../Types/DataSettings/freePrizeClaim';
// import { getPoolByGameId, PoolInfo } from '../../Utils/poolFeed';
// import { NumberGamesType, getNumberGamesType } from '../../Utils/numberGamesType';
// import { getGameRows } from '../../Utils/gameRows';
import { NumberGamesTypeCountdown } from '../NumberGamesTypeCountdown/NumberGamesTypeCountdown';

type Props = {
  dataComponents: [
    {
      type: WalletListAwardClaimType;
      title: string;
      text: string;
      disclaimer: string;
    }
  ]
}

export const FreePrizeClaimReceipt = ({ dataComponents }: Props) => {
  const couponId = getUrlParam('coupon') || '';
  const awardClaimType = getUrlParam('type') as WalletListAwardClaimType;


  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const [numberGamesType, setNumberGamesType] = useState<NumberGamesType>('unknown');

  // const [poolFeed, setPoolFeed] = useState<PoolInfo | undefined>(undefined);
  // const [gameRows, setGameRows] = useState<number>(0);
  // const [ticket, setTicket] = useState<WalletListAwardApiResponse | null>(null);
  const [couponData, setCouponData] = useState<CouponApiResponse | null>(null);
  // const [type, setType] = useState<WalletListAwardClaimType | null>(null);
  // const numberGamesCouponData = useNumberGamesCouponData(couponId);
  const [receiptProps, setReceiptProps] = useState<{
    title: string;
    text: string;
    disclaimer: string;
  }>({ title: '', text: '', disclaimer: '' });

  const { data: numberGamesCouponData, isLoading, isError } = useNumberGamesCouponData(couponId);


  useEffect(() => {
    if (!couponId || !awardClaimType) {
      setLoading(false);
      setError(true);
    }

    setNumberGamesType(getNumberGamesType(awardClaimType));
  }, [couponId, awardClaimType]);


  useEffect(() => {
    const typeData = dataComponents?.find((data) => data.type === awardClaimType);

    if (!typeData) {
      console.error('No matching data found for awardClaimType:', awardClaimType);
      setLoading(false);
      setError(true);
      return;
    }

    const { title, text, disclaimer } = typeData;
    setReceiptProps({ title, text, disclaimer });
  }, []);

  useEffect(() => {
    setLoading(isLoading);
    setError(isError);
  }, [isLoading, isError]);


  useEffect(() => {
    if (!numberGamesCouponData) return;

    setLoading(false);
    setError(false);
    setCouponData(numberGamesCouponData);

    // console.error('numberGamesCouponData', numberGamesCouponData)

  }, [numberGamesCouponData]);

  if (loading) {
    return (
      <div className={'kl-lotto-row-claim__loading'}>
        <Spinner/>
      </div>
    );
  }

  if (error) {
    return <ErrorDefaultOutput className={'kl-lotto-row-claim__error'} variant={'dark'}/>;
  }

  const logoUrl = `/dlo/Components/DanskeSpil/Domain/Feature.Components/Graphics/BrandLogos/${numberGamesType}.svg`;

  const { primaryGame, transactionDate } = couponData;
  const { drawInfo, rows } = primaryGame;
  const drawDate = drawInfo[0]?.drawDate || '';

  return (
    <div className={`kl-free-prize-claim kl-free-prize-claim--${numberGamesType}`}>

      <img src={logoUrl} alt='' className={'kl-free-prize-claim__game-type-logo'}/>

      <NumberGamesTypeCountdown
        numberGamesType={numberGamesType}
        className={'kl-free-prize-claim__numbergames-countdown'}
        drawDate={drawDate}/>

      <div>
        <div className={'kl-free-prize-claim__title'} dangerouslySetInnerHTML={{ __html: receiptProps.title }}/>
        <div className={'kl-free-prize-claim__text'} dangerouslySetInnerHTML={{ __html: receiptProps.text }}/>
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

          <div className={'kl-free-prize-claim__disclaimer'} dangerouslySetInnerHTML={{ __html: receiptProps.disclaimer }}/>

        </div>
      </div>
    </div>
  );
};