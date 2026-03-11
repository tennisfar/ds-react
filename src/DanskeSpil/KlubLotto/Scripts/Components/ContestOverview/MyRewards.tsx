import React from 'react';
import { useWalletCountData } from '../../Hooks/useAccountsData';

export const MyRewards = () => {
  const { data } = useWalletCountData();

  if (!data) {
    return null;
  }

  return <div className={'kl-my-rewards__content-prize-count'}>{data.count}</div>;
};
