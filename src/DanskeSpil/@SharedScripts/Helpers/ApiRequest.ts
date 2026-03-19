// @ts-nocheck
import ticketsData from '@PATH.MOCK.API_DATA/KlubLotto/accounts/tickets.json';
import couponData from '@PATH.MOCK.API_DATA/NumberGamesCoupon/coupon.json';
import PageErrorMessages from '@PATH.MOCK.API_DATA/NumberGamesCoupon/PageErrorMessages.json';
import accountsWalletListData from '@PATH.MOCK.API_DATA/KlubLotto/accounts/wallet/list.json';
import accountsWalletCountData from '@PATH.MOCK.API_DATA/KlubLotto/accounts/wallet/count.json';
import accountsWallet1234RedeemData from '@PATH.MOCK.API_DATA/KlubLotto/accounts/wallet/1234/redeem.json';
import gamesData from '@PATH.MOCK.API_DATA/KlubLotto/games.json';

const ApiRequest = async ({ url, withCredentials, timeout = 20, }: {
  url: string; withCredentials?: boolean; timeout?: number;
}) => {
  await new Promise((resolve) => setTimeout(resolve, 10));

  if (url) console.error('ApiRequest: ', url);

  if (url.includes('dlo/accounts/wallet/1234/redeem')) {
    return accountsWallet1234RedeemData;
  }

  if (url.includes('dlo/accounts/wallet/count')) {
    return accountsWalletCountData;
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
