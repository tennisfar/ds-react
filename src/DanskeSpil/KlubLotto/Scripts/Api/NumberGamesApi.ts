import ApiRequest from '@SharedScripts/Helpers/ApiRequest';
import { isDevEnvironment, isTownEnvironment } from '../Utils/environment';
import { CouponApiResponse } from '../Types/ApiResponse/numberGames';

const baseUrl = '/dlo/webapi/gateway/numbergames-coupon';
const withCredentials = isDevEnvironment();

export const getCoupon = async (couponId: string): Promise<CouponApiResponse> => {
  const url = `${baseUrl}/v2/coupon?couponId=${couponId}`;
  const timeout = () => {
    if (isDevEnvironment() || isTownEnvironment()) {
      return 120; // Increase timeout for dev or town environment
    }
    return 20;
  };

  return await ApiRequest({ url, withCredentials, timeout: timeout() });
};
