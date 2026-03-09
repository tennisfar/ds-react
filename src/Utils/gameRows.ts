import { WalletListAwardClaimType } from '../Types/ApiResponse/accounts';

export const getGameRows = (claimType: WalletListAwardClaimType): number => {
  const match = claimType.match(/^(\d+)_/);

  if (!match) {
    throw new Error(`Could not extract game rows from claim type: ${claimType}`);
  }
  return parseInt(match[1], 10);
};
