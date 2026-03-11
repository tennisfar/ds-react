export type PrizeApiResponse = {
  max: number;
  title: string;
  description: string;
  distribution: string;
  sprite: string;
  terms: string;
  amount: string;
};

export type PrizesApiResponse = {
  [key: string]: PrizeApiResponse;
};