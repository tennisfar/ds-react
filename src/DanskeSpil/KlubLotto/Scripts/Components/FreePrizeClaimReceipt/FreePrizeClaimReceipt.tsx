import React, { useEffect, useState } from 'react';
import { getUrlParam } from '../../Utils/urlParams';
import { useNumberGamesCouponGetData } from '../../Hooks/useNumberGamesCouponData';
import { Spinner } from '../Spinner/Spinner';
import { ErrorDefaultOutput } from '../ErrorDefaultOutput/ErrorDefaultOutput';
import { CouponApiResponse, CouponApiPrimaryGameRowResponse } from '../../Types/ApiResponse/numberGames';
import { getNumberGamesType, NumberGamesType } from '../../Utils/numberGamesType.ts';
import { WalletListAwardClaimType } from '../../Types/ApiResponse/accounts.ts';
import { NumberGamesTypeCountdown } from '../NumberGamesTypeCountdown/NumberGamesTypeCountdown';
import { getDefaultPoolSizeFormatted, getPoolByGameId } from '../../Utils/poolFeed.ts';

// --- Types ---

type DataComponent = {
  type: WalletListAwardClaimType;
  title: string;
  text: string;
  disclaimer: string;
};

type Props = {
  dataComponents: DataComponent[];
};

// --- Helpers ---

const getLogoUrl = (gameType: NumberGamesType): string =>
  `/dlo/Components/DanskeSpil/Domain/Feature.Components/Graphics/BrandLogos/${gameType}.svg`;

const formatTransactionDate = (transactionDate: string): string => {
  const date = new Date(transactionDate);
  const datePart = date.toLocaleDateString('da-DK', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
  const timePart = date.toLocaleTimeString('da-DK', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  });
  return `${datePart} kl.${timePart}`;
};

const resolvePoolText = (
  text: string,
  awardClaimType: WalletListAwardClaimType,
): string => {
  const gameType = getNumberGamesType(awardClaimType);
  // const pool = poolFeed.find((p) => p.gameId === gameType);
  const poolSize = getPoolByGameId(gameType)?.poolSizeFormatted || getDefaultPoolSizeFormatted(gameType);
  return text.replace(/{poolsize}/gi, poolSize);
};

// --- Sub-components ---

const ReceiptRowNumbers = ({ row }: { row: CouponApiPrimaryGameRowResponse }) => {
  const rowNumbers = row.numbers || [];
  const rowExtraNumbers = row.extraNumbers || [];

  return (
    <div className={'kl-free-prize-claim-receipt__receipt-row-numbers'}>
      {rowNumbers.map((num) => (
        <div key={num} className={'kl-free-prize-claim-receipt__receipt-row-number'}>
          {num}
        </div>
      ))}
      {rowExtraNumbers.length > 0 && (
        <>
          <div className={'kl-free-prize-claim-receipt__receipt-row-seperator'}>+</div>
          {rowExtraNumbers.map((num) => (
            <div key={num} className={'kl-free-prize-claim-receipt__receipt-row-extra-number'}>
              {num}
            </div>
          ))}
        </>
      )}
    </div>
  );
};

// --- Main Component ---

export const FreePrizeClaimReceipt = ({ dataComponents }: Props) => {
  const couponId = getUrlParam('coupon') || '';
  const awardClaimType = getUrlParam('award') as WalletListAwardClaimType;
  const [numberGamesType, setNumberGamesType] = useState<NumberGamesType>('unknown');
  const [couponData, setCouponData] = useState<CouponApiResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const [disclaimer, setDisclaimer] = useState('');
  const {
    data: numberGamesCouponData,
    isLoading: isLoadingNumberGamesCouponData,
    isError: isErrorNumberGamesCouponData,
  } = useNumberGamesCouponGetData(couponId);
  
  // Sync loading state
  useEffect(() => {
    setLoading(isLoadingNumberGamesCouponData);
  }, [isLoadingNumberGamesCouponData]);

  // Validate params and determine game type
  useEffect(() => {
    if (!couponId || !awardClaimType || isErrorNumberGamesCouponData) {
      setLoading(false);
      setError(true);
      return;
    }
    setNumberGamesType(getNumberGamesType(awardClaimType));
  }, [couponId, awardClaimType, isErrorNumberGamesCouponData]);

  // Resolve content from dataComponents
  useEffect(() => {
    if (loading || error || numberGamesType === 'unknown') return;

    const typeData = dataComponents?.find((d) => d.type === awardClaimType);
    if (!typeData) {
      console.error('No matching data found for awardClaimType:', awardClaimType);
      setLoading(false);
      setError(true);
      return;
    }

    setTitle(typeData.title);
    setText(resolvePoolText(typeData.text, awardClaimType));
    setDisclaimer(typeData.disclaimer);

    setLoading(false);
    setError(false);
  }, [loading, error, numberGamesType, couponId, awardClaimType]);

  // Store coupon data
  useEffect(() => {
    if (numberGamesCouponData) {
      setCouponData(numberGamesCouponData);
    }
  }, [numberGamesCouponData]);

  // --- Render ---

  if (loading || !couponData) {
    return (
      <div className={'kl-lotto-row-claim__loading'}>
        <Spinner/>
      </div>
    );
  }

  if (error) {
    return <ErrorDefaultOutput className={'kl-lotto-row-claim__error'} variant={'dark'}/>;
  }

  const { primaryGame, transactionDate } = couponData;
  const { drawInfo, rows } = primaryGame;
  const drawDate = drawInfo[0]?.drawDate || '';
  const logoUrl = getLogoUrl(numberGamesType);

  return (
    <div className={`kl-free-prize-claim-receipt kl-free-prize-claim-receipt--${numberGamesType}`}>
      <img src={logoUrl} alt="" className={'kl-free-prize-claim-receipt__game-type-logo'}/>

      <NumberGamesTypeCountdown
        numberGamesType={numberGamesType}
        className={'kl-free-prize-claim-receipt__numbergames-countdown'}
        drawDate={drawDate}
      />

      <div>
        <div className={'kl-free-prize-claim-receipt__title'} dangerouslySetInnerHTML={{ __html: title }}/>
        <div className={'kl-free-prize-claim-receipt__text'} dangerouslySetInnerHTML={{ __html: text }}/>
      </div>

      <div className={'kl-free-prize-claim-receipt__receipt'}>
        <div className={'kl-free-prize-claim-receipt__receipt-paper'}>
          <img src={logoUrl} alt="" className={'kl-free-prize-claim-receipt__receipt-logo'}/>

          <div className={'kl-free-prize-claim-receipt__receipt-date'}>
            {transactionDate ? formatTransactionDate(transactionDate) : ''}
          </div>

          <div className={'kl-free-prize-claim-receipt__receipt-coupon-id'}>Kupon: {couponId}</div>

          <div className={'kl-free-prize-claim-receipt__receipt-rows'}>
            {rows.map((row, index) => (
              <div className={'kl-free-prize-claim-receipt__receipt-row'} key={index}>
                <div className={'kl-free-prize-claim-receipt__receipt-row-prefix'}>{index + 1}.</div>
                <ReceiptRowNumbers row={row}/>
              </div>
            ))}
          </div>

          <div className={'kl-free-prize-claim-receipt__total'}>
            <div className={'kl-free-prize-claim-receipt__total-text'}>Samlet v&aelig;rdi</div>
            <div className={'kl-free-prize-claim-receipt__total-price'}>0 kr.</div>
          </div>

          <div className={'kl-free-prize-claim-receipt__disclaimer'} dangerouslySetInnerHTML={{ __html: disclaimer }}/>
        </div>
      </div>
    </div>
  );
}