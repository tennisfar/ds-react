import { WalletListAwardClaimType } from '../ApiResponse/accounts';

export type FreePrizeClaimDataProps = {
  type: WalletListAwardClaimType;
  claimTitle: string;
  claimText: string;
  claimDisclaimer: string;
  claimCtaLabel: string;
  receiptTitle: string;
  receiptText: string;
  receiptDisclaimer: string;
  expiredTitle: string;
  redeemedTitle: string;
};

export type FreePrizeClaimDataSettings = {
  dataComponents: FreePrizeClaimDataProps[];
};
