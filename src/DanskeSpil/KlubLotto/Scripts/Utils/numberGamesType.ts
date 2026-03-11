import { WalletListAwardClaimType } from '../Types/ApiResponse/accounts';

export type NumberGamesType = 'keno' | 'lotto' | 'vikinglotto' | 'eurojackpot' | 'allornothing' | 'unknown';

export const getNumberGamesType = (claimType: WalletListAwardClaimType): NumberGamesType => {
  if (claimType.includes('KENO')) return 'keno';
  if (claimType.includes('LOTTO')) return 'lotto';
  if (claimType.includes('VIKING')) return 'vikinglotto';
  if (claimType.includes('EUROJACKPOT')) return 'eurojackpot';
  if (claimType.includes('ALLORNOTHING')) return 'allornothing';

  throw new Error(`Unknown claim type: ${claimType}`);
};

export const getNumberGamesTypeLabel = (numberGamesType: NumberGamesType): string => {
  switch (numberGamesType) {
  case 'keno':
    return 'Keno';
  case 'lotto':
    return 'Lotto';
  case 'vikinglotto':
    return 'Vikinglotto';
  case 'eurojackpot':
    return 'Eurojackpot';
  case 'allornothing':
    return 'Alt eller Intet';
  default:
    throw new Error(`Unknown number games type: ${numberGamesType}`);
  }
};