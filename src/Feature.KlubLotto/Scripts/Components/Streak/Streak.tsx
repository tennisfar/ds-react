import useGameResultData from '../../Hooks/useGameResultData';
import lightning from '../../../Graphics/Streak/lightning.svg';
import '../../../Styles/Streak.less';

const formatNumber = (value: number) => value.toLocaleString('da-DK');

const statLabels: Record<string, string> = {
  score: 'Din score idag',
  answered_correct: 'Dit svar idag',
  best_score: 'Din bedste',
  correct_total: 'Rigtige i alt',
};

const formatStatValue = (value: number | boolean) => {
  if (typeof value === 'boolean') return value ? 'Rigtigt' : 'Forkert';
  return formatNumber(value);
};

export const Streak = ({ game = 'block' }: { game?: string }) => {
  const { data, isLoading } = useGameResultData(game);

  if (isLoading || !data?.success) {
    return <div className="kl-streak">Indlæser...</div>;
  }

  const { streak, primary_stat, secondary_stat, module } = data.data;

  return (
    <div className="kl-streak" data-tracking="Streak">
      <div className="kl-streak__hero">
        <div className="kl-streak__hero-label">Din nuværende streak</div>
        <div className="kl-streak__hero-heading">{streak.current} dage i træk!</div>
      </div>

      <div className="kl-streak__stats">
        <div className="kl-streak__stat-card">
          <div className="kl-streak__stat-frame">
            <div className="kl-streak__stat-label">{statLabels[primary_stat.key] ?? primary_stat.key}</div>
            <div className="kl-streak__stat-value">{formatStatValue(primary_stat.value)}</div>
          </div>
          {primary_stat.percentile !== null && (
            <div className="kl-streak__stat-percentile">
              <img className="kl-streak__stat-percentile-icon" src={lightning} alt="" />
              Top {primary_stat.percentile}%
            </div>
          )}
        </div>
        <div className="kl-streak__stat-card">
          <div className="kl-streak__stat-frame">
            <div className="kl-streak__stat-label">{statLabels[secondary_stat.key] ?? secondary_stat.key}</div>
            <div className="kl-streak__stat-value">{formatStatValue(secondary_stat.value)}</div>
            {secondary_stat.percentile !== null && (
              <div className="kl-streak__stat-percentile">
                <img className="kl-streak__stat-percentile-icon" src={lightning} alt="" />
                Top {secondary_stat.percentile}%
              </div>
            )}
          </div>
        </div>
      </div>

      {module.type === 'leaderboard' && (
        <div className="kl-streak__leaderboard">
          <div className="kl-streak__leaderboard-header">
            <div className="kl-streak__leaderboard-title">Leaderboard</div>
            {module.data.highlight.value !== null && (
              <div className="kl-streak__leaderboard-best">
                <div className="kl-streak__leaderboard-best-value">{formatNumber(module.data.highlight.value)}</div>
                <div className="kl-streak__leaderboard-best-label">Dagens bedste</div>
              </div>
            )}
          </div>
          <ul className="kl-streak__leaderboard-list">
            {module.data.top.map((entry) => (
              <li
                key={entry.rank}
                className={
                  entry.rank === module.data.player.rank
                    ? 'kl-streak__leaderboard-row kl-streak__leaderboard-row--current'
                    : 'kl-streak__leaderboard-row'
                }
              >
                <span className="kl-streak__leaderboard-rank">
                  {entry.rank}. {entry.rank === module.data.player.rank && 'Dig'}
                </span>
                <span className="kl-streak__leaderboard-score">{formatNumber(entry.value)}</span>
              </li>
            ))}
            {!module.data.top.some((entry) => entry.rank === module.data.player.rank) && (
              <li className="kl-streak__leaderboard-row kl-streak__leaderboard-row--current">
                <span className="kl-streak__leaderboard-rank">{module.data.player.rank ? `${module.data.player.rank}. ` : ''}Dig</span>
                <span className="kl-streak__leaderboard-score">{formatNumber(module.data.player.value)}</span>
              </li>
            )}
          </ul>
        </div>
      )}
    </div >
  );
};
