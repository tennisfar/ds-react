export type PoolInfo = {
  gameId: string;
  poolSizeDecimal: number;
  poolSizeFormatted: string;
  secondPrizePoolSizeDecimal: number;
  secondPrizePoolSizeFormatted: string;
  drawDate: string;
  gameStopDate: string;
  gameUrl: string;
  isOpen: boolean;
};

export const getPoolFeed = (): PoolInfo[] => {
  const element = document.getElementById('jackpot-info');
  if (!element?.textContent) {
    return [];
  }

  try {
    return JSON.parse(element.textContent) as PoolInfo[];
  } catch {
    console.error('Failed to parse jackpot-info JSON');
    return [];
  }
};

export const getPoolByGameId = (gameId: string): PoolInfo | undefined => {
  return getPoolFeed().find((pool) => pool.gameId === gameId);
};

const defaultPoolSizes: Record<string, string> = {
  lotto: 'min. 8',
  eurojackpot: 'min. 63',
  vikinglotto: 'min. 19',
  keno: '1',
  altellerintet: '500.000',
};

export const getDefaultPoolSizeFormatted = (gameId: string): string => {
  return defaultPoolSizes[gameId];
};
