import React, { useEffect, useState } from 'react';
import usePrizesData from '../../Hooks/usePrizesData';
import { DisclaimerBase } from '../Disclaimer/Disclaimer';
import { getUrlParam } from '../../Utils/urlParams';
import { PrizesApiResponse } from '../../Types/ApiResponse/prizes';

export const PrizeDetails = () => {
  const prize = getUrlParam('praemie') || '';

  const { data } = usePrizesData() as {
    data: PrizesApiResponse | undefined;
    isLoading: boolean;
    isError: boolean;
  };

  const [prizeDetails, setPrizeDetails] = useState<{
    title: string;
    sprite: string;
    description: string;
    terms: string;
  } | null>(null);

  useEffect(() => {
    if (data && data[prize]) {
      setPrizeDetails(data[prize]);
    }
  }, [data, prize]);

  return (
    <div className={'kl-prize'}>
      <div className={'kl-prize__background'}></div>

      <div className={'kl-prize__image'}>
        {prizeDetails?.sprite && <img src={prizeDetails.sprite} alt={prizeDetails.title || ''} />}
      </div>

      {prizeDetails?.title && <div className={'kl-prize__title'}>{prizeDetails.title}</div>}

      {prizeDetails?.description && <div className={'kl-prize__description'}>{prizeDetails.description}</div>}

      {prizeDetails?.terms && (
        <>
          <div className={'kl-prize__terms-title'}>Regler & Vilkår</div>

          <div className={'kl-prize__terms'}>
            <DisclaimerBase>{prizeDetails.terms}</DisclaimerBase>
          </div>
        </>
      )}
    </div>
  );
};
