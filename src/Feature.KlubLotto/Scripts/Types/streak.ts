export type StreakStat = {
  key: string;
  value: number | boolean;
  percentile: number | null;
};

export type StreakResult = {
  success: boolean;
  data: {
    streak: {
      current: number;
      days_to_next: number;
    };
    primary_stat: StreakStat;
    secondary_stat: StreakStat;
    module: {
      type: string;
      data: Record<string, number>;
    };
  };
};
