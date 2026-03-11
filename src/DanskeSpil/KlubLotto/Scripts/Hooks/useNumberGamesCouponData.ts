import { useMutation, useQuery } from '@tanstack/react-query';
import { getCoupon } from '../Api/NumberGamesApi';
import { CouponApiResponse } from '../Types/ApiResponse/numberGames';

const useNumberGamesCouponData = () => {
  const { mutate, data, isPending, isError, isSuccess } = useMutation<CouponApiResponse, unknown, string>({
    mutationFn: async (couponId: string) => {
      return (await getCoupon(couponId)) as CouponApiResponse;
    },
  });

  return {
    mutate,
    data,
    isPending,
    isError,
    isSuccess,
  };
};

export default useNumberGamesCouponData;

export const useNumberGamesCouponGetData = (couponId: string) => {
  const { data, isLoading, isError } = useQuery<CouponApiResponse>({
    queryKey: ['numberGamesCouponData', couponId],
    queryFn: async () => (await getCoupon(couponId)) as CouponApiResponse,
  });

  return {
    data,
    isLoading,
    isError,
  };
};
