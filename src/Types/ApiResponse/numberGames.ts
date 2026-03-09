export type CouponApiResponse = {
  couponId: string;
  playType: string;
  transactionDate: string;
  price: number;
  state: string;
  primaryGame: {
    gameType: string;
    rows: Array<{
      numbers: number[];
      extraNumbers: number[];
    }>;
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
