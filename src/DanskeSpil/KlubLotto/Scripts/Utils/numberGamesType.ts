import { WalletListAwardClaimType } from '../Types/ApiResponse/accounts';
import { CouponApiGameTypeResponse } from '../Types/ApiResponse/numberGames';
import { NumberGamesType } from '../Types/numberGames';

export const getNumberGamesType = (claimType: WalletListAwardClaimType): NumberGamesType => {
  if (claimType.includes('KENO')) return 'keno';
  if (claimType.includes('LOTTO')) return 'lotto';
  if (claimType.includes('VIKING')) return 'vikinglotto';
  if (claimType.includes('EUROJACKPOT')) return 'eurojackpot';
  if (claimType.includes('ALLORNOTHING')) return 'allornothing';

  throw new Error(`Unknown claim type: ${claimType}`);
};

export const getNumberGamesTypeFromGameRowResponse = (gameRowResponse: CouponApiGameTypeResponse): NumberGamesType => {
  if (gameRowResponse === 'Keno') return 'keno';
  if (gameRowResponse === 'Lotto') return 'lotto';
  if (gameRowResponse === 'Viking') return 'vikinglotto';
  if (gameRowResponse === 'Eurojackpot') return 'eurojackpot';
  if (gameRowResponse === 'AllOrNothing') return 'allornothing';

  throw new Error(`Unknown gameRowResponse: ${gameRowResponse}`);
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
