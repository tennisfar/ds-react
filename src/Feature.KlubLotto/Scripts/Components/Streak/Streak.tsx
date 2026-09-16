import useGameResultData from '../../Hooks/useGameResultData';
import '../../../Styles/Streak.less';

export const Streak = ({ game = 'block' }: { game?: string }) => {
  const { data, isLoading } = useGameResultData(game);

  if (isLoading || !data?.success) {
    return <div className="kl-streak">Indlæser...</div>;
  }

  const { streak, primary_stat, secondary_stat } = data.data;

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
