import React from 'react';
import usePrizesData from '../../Hooks/usePrizesData';
import { trackEventOnRedirect } from '../../Utils/tracking';
import { WeeklyPrizesDataSettings } from '../../Types/DataSettings/weeklyPrizes';
import { PrizeApiResponse } from '../../Types/ApiResponse/prizes';

export const WeeklyPrizes = ({ linkToPrizePage }: WeeklyPrizesDataSettings) => {
  const { data, isLoading, isError } = usePrizesData();

  if (!data || isLoading || isError) {
    return <div className={'kl-weekly-prizes__grid'}>
      <div className={'kl-weekly-prizes__item'}>
        <div className={'kl-weekly-prizes__background'}></div>
        <div className={'kl-weekly-prizes__content'}></div>
      </div>
    </div>;
  }

  return (
    <div className={'kl-weekly-prizes__grid'}>
      {data && Object.entries(data)
        .filter(([key]) => key !== 'error')
        .map(([key, prize]) => {
          const typedPrize = prize as PrizeApiResponse;
          return (
            <a href={`${linkToPrizePage?.url}?praemie=${key}`}
              onClick={() => {
                trackEventOnRedirect({ action: 'weeklyPrizes_click', label: typedPrize.title });
              }}
              key={key}
              className={'kl-weekly-prizes__item'}>
              <div className={'kl-weekly-prizes__background'}></div>
              <div className={'kl-weekly-prizes__image'}>
                <img src={typedPrize.sprite} alt={typedPrize.title}/>
              </div>
              <div className={'kl-weekly-prizes__content'}>
                <div className={'kl-weekly-prizes__item-title'}>{typedPrize.title}</div>
                <div className={'kl-weekly-prizes__description'}>{typedPrize.amount}</div>
              </div>
            </a>
          );
        })}
    </div>
  );
};