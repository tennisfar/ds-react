export type CouponApiGameTypeResponse = 'Keno' | 'Lotto' | 'Viking' | 'Eurojackpot' | 'AllOrNothing';

export type CouponApiPrimaryGameRowResponse = {
  numbers: number[];
  extraNumbers: number[];
};

export type CouponApiResponse = {
  couponId: string;
  playType: string;
  transactionDate: string;
  price: number;
  state: string;
  primaryGame: {
    gameType: CouponApiGameTypeResponse;
    rows: Array<CouponApiPrimaryGameRowResponse>;
    drawInfo: Array<{
      drawNo: number;
      drawInProgress: boolean;
      drawDate: string;
      bundle: number;
    }>;
  };
  secondaryGames: [];
  campaignGames: Array<{
    campaignNo: number;
    campaignName: string;
    drawInfo: Array<{
      drawDate: string;
      drawComplete: boolean;
      bundles: number[];
      totalWinAmount: number;
      totalPlayerWinAmount: number;
      prizes: number[];
      totalTickets: number;
    }>;
  }>;
  rebuyInfo?: {
    rebuyCostPrice: number;
    draws: string[];
    validUntil: string;
  };
  canRebuy: boolean;
  rebuyCostPrice: number;
};
