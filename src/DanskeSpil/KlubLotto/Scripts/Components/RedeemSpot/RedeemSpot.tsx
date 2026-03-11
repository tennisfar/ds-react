import React, { useEffect, useState } from 'react';
import useWalletListData from '../../Hooks/useWalletListData';
import { Button } from '../Button/Button';
import { RedeemSpotDataSettings } from '../../Types/DataSettings/redeemSpot';
import { WalletListAwardApiResponse } from '../../Types/ApiResponse/accounts';

export const RedeemSpot = ({ reference, title, text, ctaLabel, image, linkToRedeemPage }: RedeemSpotDataSettings) => {
  const [isActive, setIsActive] = useState(false);
  const [hasFocus, setHasFocus] = useState(false);
  const [awardId, setAwardId] = useState('');
  const { data, isLoading, isError, refetch } = useWalletListData();

  useEffect(() => {
    if (!data || isLoading || isError || isActive) {
      return;
    }

    const redeemableAward = data.find((award: WalletListAwardApiResponse) => {
      return award.claimStatus === 'NotRedeemed' && award.reference === reference;
    });

    if (!redeemableAward || !redeemableAward.id) {
      // Retry after 5 seconds if not found
      const timeout = setTimeout(() => {
        refetch();
      }, 5000);
      return () => clearTimeout(timeout);
    }

    setAwardId(redeemableAward.id.toString());

    const timeout = setTimeout(() => {
      setIsActive(true);
      setHasFocus(true);
    }, 2000);

    return () => clearTimeout(timeout);
  }, [data, isLoading, isError, reference, isActive, refetch]);

  useEffect(() => {
    if (!isActive) return;

    const timeout = setTimeout(() => {
      setHasFocus(!hasFocus);
    }, 5000);

    return () => clearTimeout(timeout);
  }, [isActive, hasFocus]);

  return (
    <div className={`kl-redeem-spot ${isActive ? 'kl-redeem-spot--active' : ''} ${hasFocus ? 'kl-redeem-spot--bounce' : ''}`}>
      <div className={'kl-redeem-spot__inner'}>
        <div className={'kl-redeem-spot__graphics'}>
          <img className={'kl-redeem-spot__graphics-img'} src={image?.src} alt={image?.alt}/>
        </div>
        <div className={'kl-redeem-spot__card'}>
          <div className={'kl-redeem-spot__bg'}></div>
          <div className={'kl-redeem-spot__title'}>{title}</div>
          <div className={'kl-redeem-spot__text'}>{text}</div>
          <Button
            tracking={{ action: 'redeemSpot' }}
            href={`${linkToRedeemPage?.url}?id=${awardId}`}
            styleModifier={'kl-redeem-spot__button'}
            variant={'primary'}
            inverted={true}
          >
            {ctaLabel}
          </Button>
        </div>
      </div>
    </div>
  );
};