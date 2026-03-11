import React, { useEffect, useState } from 'react';
import { getUrlParam } from '../../Utils/urlParams';
import useNumberGamesCouponData from '../../Hooks/useNumberGamesCouponData';
import useRedeemAwardData from '../../Hooks/useRedeemAwardData';
import useWalletListData from '../../Hooks/useWalletListData';
import { Claim } from './_Claim';
import { Receipt } from './_Receipt';
import { Spinner } from '../Spinner/Spinner';
import { ErrorDefaultOutput } from '../ErrorDefaultOutput/ErrorDefaultOutput';
import { Expired } from './_Expired';
import { Redeemed } from './_Redeemed';
import { LottoRowClaimDataSettings } from '../../Types/DataSettings/lottoRowClaim';
import { WalletListAwardApiResponse } from '../../Types/ApiResponse/accounts';
import { CouponApiResponse } from '../../Types/ApiResponse/numberGames';

export const LottoRowClaim = ({ claimCtaLabel, claimDisclaimer, claimImage, claimText, claimTitle, expiredImage, expiredTitle, receiptDisclaimer, receiptText, receiptTitle, redeemedImage, redeemedTitle }: LottoRowClaimDataSettings) => {
  const claimProps = {
    title: claimTitle,
    text: claimText,
    disclaimer: claimDisclaimer,
    ctaLabel: claimCtaLabel,
    image: claimImage,
  };

  const expiredProps = {
    title: expiredTitle,
    image: expiredImage,
  };

  const receiptProps = {
    title: receiptTitle,
    text: receiptText,
    disclaimer: receiptDisclaimer,
  };

  const redeemedProps = {
    title: redeemedTitle,
    image: redeemedImage,
  };

  const ticketAwardId = getUrlParam('id') || '';
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [redeem, setRedeem] = useState(false);
  const [couponId, setCouponId] = useState<string | null>(null);
  const [ticket, setTicket] = useState<WalletListAwardApiResponse | null>(null);
  const { data: walletList, isLoading: isLoadingWalletList, isError: isErrorWalletList } = useWalletListData();
  const [couponData, setCouponData] = useState<CouponApiResponse | null>(null);
  const { data: redeemData, isLoading: isLoadingRedeemAward, isError: isErrorRedeemAward } = useRedeemAwardData(ticketAwardId, redeem && !!ticketAwardId);
  const numberGamesCouponData = useNumberGamesCouponData();

  useEffect(() => {
    if (!ticket && !isLoadingWalletList && (walletList?.length ?? 0) > 0) {
      const ticketWithAwardId = (walletList ?? []).find((ticket: WalletListAwardApiResponse) => ticket.id === ticketAwardId);
      if (ticketWithAwardId) {
        setTicket(ticketWithAwardId);
      } else {
        setError(true);
        setLoading(false);
      }
    }
  }, [walletList, isLoadingWalletList, ticket]);

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

  if (error) {
    return <ErrorDefaultOutput className={'kl-lotto-row-claim__error'} variant={'dark'}/>;
  }

  if (couponData) {
    return <Receipt couponData={couponData} receiptProps={receiptProps}/>;
  }

  if (loading || !ticket) {
    return (
      <div className={'kl-lotto-row-claim__loading'}>
        <Spinner/>
      </div>
    );
  }

  return (
    <div className={'kl-lotto-row-claim'}>
      {ticket.claimStatus === 'NotRedeemed' && <Claim ticket={ticket} claimProps={claimProps} handleRedeem={handleRedeem}/>}
      {ticket.claimStatus === 'Expired' && <Expired ticket={ticket} expiredProps={expiredProps}/>}
      {ticket.claimStatus === 'Redeemed' && <Redeemed ticket={ticket} redeemedProps={redeemedProps}/>}
    </div>
  );
};