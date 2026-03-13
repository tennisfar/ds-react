import { WalletListAwardClaimType } from '../ApiResponse/accounts';
import { SitecoreGenericLink } from '../sitecore';

export type FreePrizeClaimDataProps = {
  type: WalletListAwardClaimType;
  claimTitle: string;
  claimText: string;
  claimDisclaimer: string;
  claimCtaLabel: string;
  expiredTitle: string;
  redeemedTitle: string;
};

export type FreePrizeClaimDataSettings = {
  dataComponents: FreePrizeClaimDataProps[];
  receiptLink: SitecoreGenericLink;
};
