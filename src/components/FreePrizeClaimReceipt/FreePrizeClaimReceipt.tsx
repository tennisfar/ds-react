import React, { useEffect, useState } from 'react';
import { getUrlParam } from '../../Utils/urlParams';
import useNumberGamesCouponData from '../../Hooks/useNumberGamesCouponData';
import { Spinner } from '../Spinner/Spinner';
import { ErrorDefaultOutput } from '../ErrorDefaultOutput/ErrorDefaultOutput';
import { CouponApiResponse } from '../../Types/ApiResponse/numberGames';
import { getNumberGamesType, NumberGamesType } from '../../Utils/numberGamesType.ts';
import { WalletListAwardClaimType } from '../../Types/ApiResponse/accounts.ts';
import { NumberGamesTypeCountdown } from '../NumberGamesTypeCountdown/NumberGamesTypeCountdown';
import { getDefaultPoolSizeFormatted, PoolInfo } from '../../Utils/poolFeed.ts';

type Props = {
  dataComponents: [
    {
      type: WalletListAwardClaimType;
      title: string;
      text: string;
      disclaimer: string;
    }
  ],
  poolFeed: PoolInfo[];
}

export const FreePrizeClaimReceipt = ({ dataComponents, poolFeed }: Props) => {
  const couponId = getUrlParam('coupon') || '';
  const awardClaimType = getUrlParam('award') as WalletListAwardClaimType;
  const [numberGamesType, setNumberGamesType] = useState<NumberGamesType>('unknown');
  const [couponData, setCouponData] = useState<CouponApiResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const [title, setTitle] = useState<string>('');
  const [text, setText] = useState<string>('');
  const [disclaimer, setDisclaimer] = useState<string>('');

  const {
    data: numberGamesCouponData,
    isLoading: isLoadingNumberGamesCouponData,
    isError: isErrorNumberGamesCouponData,
  } = useNumberGamesCouponData(couponId);

  useEffect(() => {
    setLoading(isLoadingNumberGamesCouponData);
  }, [isLoadingNumberGamesCouponData]);

  useEffect(() => {
    if (!couponId || !awardClaimType || isErrorNumberGamesCouponData) {
      setLoading(false);
      setError(true);
      return;
    }

    setNumberGamesType(getNumberGamesType(awardClaimType));
  }, [couponId, awardClaimType, isErrorNumberGamesCouponData]);

  useEffect(() => {
    if (loading || error || numberGamesType === 'unknown') {
      return;
    }

    const typeData = dataComponents?.find((data) => data.type === awardClaimType);

    if (!typeData) {
      console.error('No matching data found for awardClaimType:', awardClaimType);
      setLoading(false);
      setError(true);
      return;
    }
    
    const pool = poolFeed.find((pool) => pool.gameId === getNumberGamesType(awardClaimType));
    const modifiedText = typeData.text.replace('{poolsize}', pool?.poolSizeFormatted || getDefaultPoolSizeFormatted(getNumberGamesType(awardClaimType)));
    setTitle(typeData.title);
    setText(modifiedText);
    setDisclaimer(typeData.disclaimer);
  }, [loading, error, numberGamesType, couponId, awardClaimType]);

  useEffect(() => {
    if (!numberGamesCouponData) {
      return
    }
    setCouponData(numberGamesCouponData);
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