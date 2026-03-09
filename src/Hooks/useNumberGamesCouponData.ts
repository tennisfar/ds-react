import { useQuery } from '@tanstack/react-query';
import { getCoupon } from '../Api/NumberGamesApi';
import { CouponApiResponse } from '../Types/ApiResponse/numberGames';
// import { DictionaryApiResponse } from '../Types/ApiResponse/dictionary.ts';
// import { getDictionary } from '../Api/DictionaryApi.ts';

// const useNumberGamesCouponData = () => {
//   const { mutate, data, isPending, isError, isSuccess } = useMutation<CouponApiResponse, unknown, string>({
//     mutationFn: async (couponId: string) => {
//       return (await getCoupon(couponId)) as CouponApiResponse;
//     },
//   });
//
//   return {
//     mutate,
//     data,
//     isPending,
//     isError,
//     isSuccess,
//   };
// };

export const useNumberGamesCouponData = (couponId: string) => {
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

export default useNumberGamesCouponData;
