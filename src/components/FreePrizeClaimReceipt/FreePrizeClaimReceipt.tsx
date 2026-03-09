import React, { useEffect, useState } from 'react';
import { getUrlParam } from '../../Utils/urlParams';
import useNumberGamesCouponData from '../../Hooks/useNumberGamesCouponData';
// import useRedeemAwardData from '../../Hooks/useRedeemAwardData';
// import useWalletListData from '../../Hooks/useWalletListData';
import { Spinner } from '../Spinner/Spinner';
import { ErrorDefaultOutput } from '../ErrorDefaultOutput/ErrorDefaultOutput';
// import { WalletListAwardApiResponse, WalletListAwardClaimType } from '../../Types/ApiResponse/accounts';
import { CouponApiResponse } from '../../Types/ApiResponse/numberGames';
// import { FreePrizeClaimDataSettings } from '../../Types/DataSettings/freePrizeClaim';
// import { getPoolByGameId, PoolInfo } from '../../Utils/poolFeed';
// import { NumberGamesType, getNumberGamesType } from '../../Utils/numberGamesType';
// import { getGameRows } from '../../Utils/gameRows';

type Props = {
  dataComponents: [
    {
      // type: WalletListAwardClaimType;
      title: string;
      text: string;
      disclaimer: string;
    }
  ]
}

export const FreePrizeClaimReceipt = ({ dataComponents }: Props) => {
  const couponId = getUrlParam('coupon') || '';
  const awardClaimType = getUrlParam('type') || '';


  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
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
      // numberGamesCouponData.mutate(couponId);
    }
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

  return (
    <>
      <div>awardClaimType: {awardClaimType}</div>
      <div>loading: {loading ? 'true' : 'false'}</div>
      <div>error: {error ? 'true' : 'false'}</div>


      <div>couponData: {couponData ? 'yes' : 'no'}</div>
      <div>React: {React ? 'true' : 'false'}</div>
      <div></div>
      <div></div>
      <div>dataComponents.length: {dataComponents?.length}</div>
      <div>numberGamesCouponData.couponId: {numberGamesCouponData?.couponId}</div>

      <br/>
      <div>{receiptProps.title}</div>
      <div>{receiptProps.text}</div>
      <div>{receiptProps.disclaimer}</div>
      <div></div>
      <div></div>
      <div></div>
    </>
  );
  /*

  if (couponData) {

    console.error('couponData', couponData)

    return (
      <div className={'kl-free-prize-claim__receipt'}>
        {couponData.couponId} {receiptProps.title} {receiptProps.text} {receiptProps.disclaimer}
      </div>
    );
  }

  return (
    <div className={'kl-lotto-row-claim__loading'}>
      <Spinner/>
    </div>
  );
  
   */

};