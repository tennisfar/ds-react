export type StreakStat = {
  key: string;
  value: number | boolean | null;
  percentile: number | null;
};

export type StreakLeaderboardEntry = {
  rank: number | null;
  value: number;
};

export type StreakModule =
  | {
      type: 'distribution';
      data: number[] | Record<string, number>;
    }
  | {
      type: 'leaderboard';
      data: {
        highlight: {
          key: string;
          value: number | null;
        };
        top: StreakLeaderboardEntry[];
        player: StreakLeaderboardEntry;
      };
    };

export type StreakResult = {
  success: boolean;
  message?: string;
  status?: string;
  data: {
    streak: {
      current: number;
      days_to_next: number;
    };
    primary_stat: StreakStat;
    secondary_stat: StreakStat;
    module: StreakModule;
  };
};
