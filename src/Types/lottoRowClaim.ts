import { SitecoreImage } from './sitecore';
import { WalletListAwardApiResponse } from './ApiResponse/accounts';
import { CouponApiResponse } from './ApiResponse/numberGames';

export type ClaimProps = {
  ticket: WalletListAwardApiResponse;
  claimProps: {
    title: string;
    text: string;
    disclaimer: string;
    ctaLabel: string;
    image: SitecoreImage;
  };
  handleRedeem: () => void;
};

export type ExpiredProps = {
  ticket: WalletListAwardApiResponse;
  expiredProps: {
    title: string;
    image: SitecoreImage;
  };
};

export type RedeemedProps = {
  ticket: WalletListAwardApiResponse;
  redeemedProps: {
    title: string;
    image: SitecoreImage;
  };
};

export type ReceiptProps = {
  couponData: CouponApiResponse;
  receiptProps: {
    title: string;
    text: string;
    disclaimer: string;
  };
};

export type JackpotGame = {
  GameId: 'lotto';
  PoolSizeDecimal: number;
  PoolSizeFormatted: string;
  SecondPrizePoolSizeDecimal: number;
  SecondPrizePoolSizeFormatted: string;
  DrawDate: string;
  GameStopDate: string;
  GameUrl: string;
  IsOpen: boolean;
};
