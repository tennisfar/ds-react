import React, { useEffect, useState } from 'react';
import { getUrlParam } from '../../Utils/urlParams';
import useNumberGamesCouponData from '../../Hooks/useNumberGamesCouponData';
import useRedeemAwardData from '../../Hooks/useRedeemAwardData';
import useWalletListData from '../../Hooks/useWalletListData';
import { Claim, ClaimProps } from './_Claim';
import { Receipt, ReceiptProps } from './_Receipt';
import { Spinner } from '../Spinner/Spinner';
import { ErrorDefaultOutput } from '../ErrorDefaultOutput/ErrorDefaultOutput';
import { Expired, ExpiredProps } from './_Expired';
import { Redeemed, RedeemedProps } from './_Redeemed';
import { WalletListAwardApiResponse, WalletListAwardClaimType } from '../../Types/ApiResponse/accounts';
import { CouponApiResponse } from '../../Types/ApiResponse/numberGames';
import { FreePrizeClaimDataSettings } from '../../Types/DataSettings/freePrizeClaim';
import { getPoolByGameId, PoolInfo } from '../../Utils/poolFeed';
import { NumberGamesType, getNumberGamesType } from '../../Utils/numberGamesType';
import { getGameRows } from '../../Utils/gameRows';

export const FreePrizeClaim = ({ dataComponents }: FreePrizeClaimDataSettings) => {
  const ticketAwardId = getUrlParam('id') || '';
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [redeem, setRedeem] = useState(false);
  const [poolFeed, setPoolFeed] = useState<PoolInfo | undefined>(undefined);
  const [gameType, setGameType] = useState<NumberGamesType>('unknown');
  const [gameRows, setGameRows] = useState<number>(0);
  const [couponId, setCouponId] = useState<string | null>(null);
  const [ticket, setTicket] = useState<WalletListAwardApiResponse | null>(null);
  const [claimProps, setClaimProps] = useState<ClaimProps>({ title: '', text: '', disclaimer: '', ctaLabel: '' });
  const [receiptProps, setReceiptProps] = useState<ReceiptProps>({ title: '', text: '', disclaimer: '' });
  const [expiredProps, setExpiredProps] = useState<ExpiredProps>({ title: '' });
  const [redeemedProps, setRedeemedProps] = useState<RedeemedProps>({ title: '' });
  const [couponData, setCouponData] = useState<CouponApiResponse | null>(null);
  const [type, setType] = useState<WalletListAwardClaimType | null>(null);
  const { data: walletList, isLoading: isLoadingWalletList, isError: isErrorWalletList } = useWalletListData();
  const {
    data: redeemData,
    isLoading: isLoadingRedeemAward,
    isError: isErrorRedeemAward,
  } = useRedeemAwardData(ticketAwardId, redeem && !!ticketAwardId);
  const numberGamesCouponData = useNumberGamesCouponData();

  useEffect(() => {
    if (!ticket && !isLoadingWalletList && (walletList?.length ?? 0) > 0) {
      const ticketWithAwardId = (walletList ?? []).find(
        (ticket: WalletListAwardApiResponse) => ticket.id === ticketAwardId
      );
      if (ticketWithAwardId) {
        setType(ticketWithAwardId.type);
        setTicket(ticketWithAwardId);
      } else {
        setError(true);
        setLoading(false);
      }
    }
  }, [walletList, isLoadingWalletList, ticket]);

  useEffect(() => {
    if (type) {
      setGameType(getNumberGamesType(type));
      setGameRows(getGameRows(type));
    }
  }, [type]);

  useEffect(() => {
    if (gameType) {
      const poolFeed = getPoolByGameId(gameType);
      setPoolFeed(poolFeed);
    }
  }, [gameType]);

  useEffect(() => {
    if (!ticket || !type) return;

    const typeData = dataComponents?.find((data) => data.type === type);

    if (!typeData) {
      console.error('No matching data found for type:', type);
      return;
    }

    const {
      claimTitle,
      claimText,
      claimDisclaimer,
      claimCtaLabel,
      receiptTitle,
      receiptText,
      receiptDisclaimer,
      redeemedTitle,
      expiredTitle,
    } = typeData;

    setClaimProps({ title: claimTitle, text: claimText, disclaimer: claimDisclaimer, ctaLabel: claimCtaLabel });
    setReceiptProps({ title: receiptTitle, text: receiptText, disclaimer: receiptDisclaimer });
    setRedeemedProps({ title: redeemedTitle });
    setExpiredProps({ title: expiredTitle });
  }, [ticket]);

  useEffect(() => {
    if (isLoadingWalletList || isLoadingRedeemAward) {
      setLoading(true);
    } else {
      setLoading(false);
    }
  }, [isLoadingWalletList, isLoadingRedeemAward]);

  useEffect(() => {
    if (isErrorWalletList || isErrorRedeemAward) {
      setError(true);
    } else {
      setError(false);
    }
  }, [isErrorWalletList, isErrorRedeemAward]);

  useEffect(() => {
    if (redeem && redeemData && redeemData.couponId && !couponId) {
      setCouponId(redeemData.couponId);
    }
  }, [redeem, redeemData, couponId]);

  useEffect(() => {
    if (couponId) {
      setLoading(true);
      numberGamesCouponData.mutate(couponId);
    }
  }, [couponId]);

  useEffect(() => {
    if (numberGamesCouponData.isSuccess) {
      setLoading(false);
      setCouponData(numberGamesCouponData.data ?? null);
    }

    if (numberGamesCouponData.isError) {
      setError(true);
      setLoading(false);
    }
  }, [numberGamesCouponData]);

  const handleRedeem = () => {
    setRedeem(true);
  };

  if (loading) {
    return (
      <div className={'kl-lotto-row-claim__loading'}>
        <Spinner />
      </div>
    );
  }

  if (error) {
    return <ErrorDefaultOutput className={'kl-free-prize-claim__error'} variant={'dark'} />;
  }

  if (couponData) {
    return (
      <Receipt couponData={couponData} numberGamesType={gameType} poolFeed={poolFeed} receiptProps={receiptProps} />
    );
  }

  if (ticket?.claimStatus === 'NotRedeemed') {
    return (
      <Claim
        ticket={ticket}
        numberGamesType={gameType}
        gameRows={gameRows}
        handleRedeem={handleRedeem}
        claimProps={claimProps}
      />
    );
  }

  if (ticket?.claimStatus === 'Expired') {
    return <Expired ticket={ticket} numberGamesType={gameType} expiredProps={expiredProps} />;
  }

  if (ticket?.claimStatus === 'Redeemed') {
    return <Redeemed ticket={ticket} numberGamesType={gameType} redeemedProps={redeemedProps} />;
  }

  return (
    <div className={'kl-free-prize-claim__loading'}>
      <Spinner />
    </div>
  );
};
