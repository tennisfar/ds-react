import { WalletListAwardClaimType } from '../ApiResponse/accounts';

export type FreePrizeClaimReceiptDataProps = {
  type: WalletListAwardClaimType;
  title: string;
  text: string;
  disclaimer: string;
};

export type FreePrizeClaimReceiptDataSettings = {
  dataComponents: FreePrizeClaimReceiptDataProps[];
};
