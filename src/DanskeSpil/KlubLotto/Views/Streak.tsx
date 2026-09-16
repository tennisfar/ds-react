import { useEffect, useState } from 'react';
import ApiRequest from '@SharedScripts/Helpers/ApiRequest';

type StreakStat = {
  key: string;
  value: number | boolean;
  percentile: number | null;
};

type StreakResult = {
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

export const Streak = ({ game = 'block' }: { game?: string }) => {
  const [result, setResult] = useState<StreakResult | null>(null);

  useEffect(() => {
    ApiRequest({ url: `/games/${game}/result` }).then(setResult);
  }, [game]);

  if (!result?.success) {
    return <div className="kl-streak">Indlæser...</div>;
  }

  const { streak, primary_stat, secondary_stat } = result.data;

  return (
    <div className="kl-streak" data-tracking="Streak">
      <div className="kl-streak__current">Nuværende streak: {streak.current}</div>
      <div className="kl-streak__days-to-next">Dage til næste: {streak.days_to_next}</div>
      <div className="kl-streak__primary-stat">
        {primary_stat.key}: {String(primary_stat.value)}
      </div>
      <div className="kl-streak__secondary-stat">
        {secondary_stat.key}: {String(secondary_stat.value)}
      </div>
    </div>
  );
};
