import ticketsData from '../../mocks/ApiData/KlubLotto/accounts/tickets.json';
import couponData from '../../@ApiData/KlubLotto/NumberGamesCoupon/coupon.json';
import PageErrorMessages from '../../@ApiData/KlubLotto/NumberGamesCoupon/PageErrorMessages.json';

const ApiRequest = async ({ url, withCredentials, timeout = 20 }: { url: string, withCredentials?: boolean, timeout?: number }) => {
  await new Promise((resolve) => setTimeout(resolve, 500));

  // if (url) console.error('url', url)
  
  if (url.includes('/accounts/tickets')) {
    return ticketsData;
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