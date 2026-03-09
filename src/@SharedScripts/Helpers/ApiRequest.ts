import ticketsData from '../../mocks/ApiData/KlubLotto/accounts/tickets.json';
import couponData from '../../@ApiData/KlubLotto/NumberGamesCoupon/coupon.json';

const ApiRequest = async ({ url, withCredentials, timeout = 20 }: { url: string, withCredentials: boolean, timeout: number }) => {
  await new Promise((resolve) => setTimeout(resolve, 500));

  if (url.includes('/accounts/tickets')) {
    return ticketsData;
  }
  
  if (url.includes('numbergames-coupon/v2/coupon')) {
    return couponData;
  }

  return null;
};

export default ApiRequest;