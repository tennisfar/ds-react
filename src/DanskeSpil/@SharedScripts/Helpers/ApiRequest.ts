// @ts-nocheck
import ticketsData from '@ApiData/KlubLotto/accounts/tickets.json';
import couponData from '@ApiData/NumberGamesCoupon/coupon.json';
import PageErrorMessages from '@ApiData/NumberGamesCoupon/PageErrorMessages.json';
import accountsWalletListData from '@ApiData/KlubLotto/accounts/wallet/list.json';
import accountsWallet1234RedeemData from '@ApiData/KlubLotto/accounts/wallet/1234/redeem.json';
import gamesData from '@ApiData/KlubLotto/games.json';

const ApiRequest = async ({
                            url,
                            withCredentials,
                            timeout = 20,
                          }: {
  url: string;
  withCredentials?: boolean;
  timeout?: number;
}) => {
  await new Promise((resolve) => setTimeout(resolve, 500));

  if (url) console.error('ApiRequest: ', url);

  if (url.includes('dlo/accounts/wallet/1234/redeem')) {
    return accountsWallet1234RedeemData;
  }

  if (url.includes('dlo/accounts/wallet/list')) {
    return accountsWalletListData;
  }

  if (url.includes('/accounts/tickets')) {
    return ticketsData;
  }

  if (url.includes('dlo/games')) {
    return gamesData;
  }

  if (url.includes('numbergames-coupon/v2/coupon')) {
    return couponData;
  }

  if (url.includes('dlo/scapi/common/dictionary/dictionary?path=/KlubLotto/PageErrorMessages&variants=1')) {
    return PageErrorMessages;
  }

  return null;
};

export default ApiRequest;
