import { NumberGamesType } from '../numberGames';

export type FreePrizeClaimReceiptDataProps = {
  numberGamesType: NumberGamesType;
  title: string;
  text: string;
  disclaimer: string;
};

export type FreePrizeClaimReceiptDataSettings = {
  dataComponents: FreePrizeClaimReceiptDataProps[];
};
