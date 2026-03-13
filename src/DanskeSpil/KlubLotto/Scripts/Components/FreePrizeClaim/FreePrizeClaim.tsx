import React, { useEffect, useState } from 'react';
import { getUrlParam } from '../../Utils/urlParams';
import useNumberGamesCouponData from '../../Hooks/useNumberGamesCouponData';
import useRedeemAwardData from '../../Hooks/useRedeemAwardData';
import useWalletListData from '../../Hooks/useWalletListData';
import { Claim, ClaimProps } from './_Claim';
import { Spinner } from '../Spinner/Spinner';
import { ErrorDefaultOutput } from '../ErrorDefaultOutput/ErrorDefaultOutput';
import { Expired, ExpiredProps } from './_Expired';
import { Redeemed, RedeemedProps } from './_Redeemed';
import { WalletListAwardApiResponse, WalletListAwardClaimType } from '../../Types/ApiResponse/accounts';
import { CouponApiResponse } from '../../Types/ApiResponse/numberGames';
import { FreePrizeClaimDataSettings } from '../../Types/DataSettings/freePrizeClaim';
import { getNumberGamesType } from '../../Utils/numberGamesType';
import { getGameRows } from '../../Utils/gameRows';
import { NumberGamesType } from '../../Types/numberGames';

export const FreePrizeClaim = ({ dataComponents, receiptLink }: FreePrizeClaimDataSettings) => {
  const ticketAwardId = getUrlParam('id') || '';
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [redeem, setRedeem] = useState(false);
  const [numberGamesType, setNumberGamesType] = useState<NumberGamesType>(null);
  const [gameRows, setGameRows] = useState<number>(0);
  const [couponId, setCouponId] = useState<string | null>(null);
  const [ticket, setTicket] = useState<WalletListAwardApiResponse | null>(null);
  const [claimProps, setClaimProps] = useState<ClaimProps>({ title: '', text: '', disclaimer: '', ctaLabel: '' });
  const [expiredProps, setExpiredProps] = useState<ExpiredProps>({ title: '' });
  const [redeemedProps, setRedeemedProps] = useState<RedeemedProps>({ title: '' });
  const [couponData, setCouponData] = useState<CouponApiResponse | null>(null);
  const [awardClaimType, setAwardClaimType] = useState<WalletListAwardClaimType | null>(null);
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
        setAwardClaimType(ticketWithAwardId.type);
        setTicket(ticketWithAwardId);
      } else {
        setError(true);
        setLoading(false);
      }
    }
  }, [walletList, isLoadingWalletList, ticket]);

  useEffect(() => {
    if (awardClaimType) {
      setNumberGamesType(getNumberGamesType(awardClaimType));
      setGameRows(getGameRows(awardClaimType));
    }
  }, [awardClaimType]);

  useEffect(() => {
    if (!ticket || !awardClaimType) return;

    const typeData = dataComponents?.find((data) => data.type === awardClaimType);

    if (!typeData) {
      console.error('No matching data found for awardClaimType:', awardClaimType);
      return;
    }

    const { claimTitle, claimText, claimDisclaimer, claimCtaLabel, redeemedTitle, expiredTitle } = typeData;

    setClaimProps({ title: claimTitle, text: claimText, disclaimer: claimDisclaimer, ctaLabel: claimCtaLabel });
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
  }, [numberGamesCouponData.isSuccess, numberGamesCouponData.isError, numberGamesCouponData.data]);

  useEffect(() => {
    if (couponData && !loading) {
      setLoading(true);
      location.href = receiptLink.url + `?coupon=${couponData.couponId}`;
    }
  }, [couponData, loading]);

  const handleRedeem = () => {
    setRedeem(true);
  };

  if (loading) {
    return (
      <div className={'kl-free-prize-claim__loading'}>
        <Spinner />
      </div>
    );
  }

  if (error) {
    return <ErrorDefaultOutput className={'kl-free-prize-claim__error'} variant={'dark'} />;
  }

  if (couponData) {
    return (
      <div className={'kl-free-prize-claim__loading'}>
        <Spinner />
      </div>
    );
  }

  if (ticket?.claimStatus === 'NotRedeemed') {
    return (
      <Claim
        ticket={ticket}
        numberGamesType={numberGamesType}
        gameRows={gameRows}
        handleRedeem={handleRedeem}
        claimProps={claimProps}
      />
    );
  }

  if (ticket?.claimStatus === 'Expired') {
    return <Expired ticket={ticket} numberGamesType={numberGamesType} expiredProps={expiredProps} />;
  }

  if (ticket?.claimStatus === 'Redeemed') {
    return <Redeemed ticket={ticket} numberGamesType={numberGamesType} redeemedProps={redeemedProps} />;
  }
};
