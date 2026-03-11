export type CancelAccountApiResponse = {
  success: boolean;
};

export type CreateAccountApiResponse = {
  session: string;
  profile: {
    user_id: string;
    activemember: boolean;
  }
}

export type RedeemAwardApiResponse = {
  couponId: string;
};

export type WalletCountApiResponse = {
  count: number;
};

export type TicketApiResponse = {
  date: string;
  activity: boolean;
  activity_game: boolean;
  weekDayNumber: number;
  isPast: boolean;
};

export type TicketsApiResponse = TicketApiResponse[];

// Claim types from Sitecore, defined by BrandMobile.
// Format: {rows}_{game}_LIGHTNING — determines game type and row count.
export type WalletListAwardClaimType =
  | '5_KENO_KENOSMALL'
  | '10_KENO_KENOSMALL'
  | '1_LOTTO_LIGHTNING'
  | '2_LOTTO_LIGHTNING'
  | '3_LOTTO_LIGHTNING'
  | '4_LOTTO_LIGHTNING'
  | '5_LOTTO_LIGHTNING'
  | '6_LOTTO_LIGHTNING'
  | '7_LOTTO_LIGHTNING'
  | '8_LOTTO_LIGHTNING'
  | '9_LOTTO_LIGHTNING'
  | '10_LOTTO_LIGHTNING'
  | '1_VIKING_LIGHTNING'
  | '2_VIKING_LIGHTNING'
  | '3_VIKING_LIGHTNING'
  | '4_VIKING_LIGHTNING'
  | '5_VIKING_LIGHTNING'
  | '6_VIKING_LIGHTNING'
  | '7_VIKING_LIGHTNING'
  | '8_VIKING_LIGHTNING'
  | '9_VIKING_LIGHTNING'
  | '10_VIKING_LIGHTNING'
  | '1_EUROJACKPOT_LIGHTNING'
  | '2_EUROJACKPOT_LIGHTNING'
  | '3_EUROJACKPOT_LIGHTNING'
  | '4_EUROJACKPOT_LIGHTNING'
  | '5_EUROJACKPOT_LIGHTNING'
  | '6_EUROJACKPOT_LIGHTNING'
  | '7_EUROJACKPOT_LIGHTNING'
  | '8_EUROJACKPOT_LIGHTNING'
  | '9_EUROJACKPOT_LIGHTNING'
  | '10_EUROJACKPOT_LIGHTNING'
  | '1_ALLORNOTHING_LIGHTNING'
  | '2_ALLORNOTHING_LIGHTNING'
  | '3_ALLORNOTHING_LIGHTNING'
  | '4_ALLORNOTHING_LIGHTNING'
  | '5_ALLORNOTHING_LIGHTNING'
  | '6_ALLORNOTHING_LIGHTNING'
  | '7_ALLORNOTHING_LIGHTNING'
  | '8_ALLORNOTHING_LIGHTNING'
  | '9_ALLORNOTHING_LIGHTNING'
  | '10_ALLORNOTHING_LIGHTNING';

export type WalletListAwardApiResponse = {
  type: WalletListAwardClaimType;
  claimStatus:
    | 'NotRedeemed'
    | 'Redeemed'
    | 'Expired';
  id: string;
  reference: string;
  expires: string;
  created: string;
  redeemed: string;
  title: string;
  sprite: string;
  distribution: string;
  style: string;
};

export type WalletListApiResponse = WalletListAwardApiResponse[];

export type WalletApiResponse = {
  url: string;
  success: boolean;
};
