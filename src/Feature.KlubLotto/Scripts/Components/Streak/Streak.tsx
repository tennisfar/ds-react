import useGameResultData from '../../Hooks/useGameResultData';
import '../../../Styles/Streak.less';

// Static placeholder data — no leaderboard endpoint exists yet, mirrors the Figma reference values.
const leaderboard = [
  { rank: 15, score: 1495 },
  { rank: 17, score: 1390 },
  { rank: 18, score: 1365 },
  { rank: 19, score: 1348, isCurrentUser: true },
  { rank: 20, score: 1310 },
  { rank: 21, score: 1280 },
  { rank: 22, score: 1245 },
  { rank: 23, score: 1190 },
];
const dailyBestScore = 2842;

const formatNumber = (value: number) => value.toLocaleString('da-DK');

export const Streak = ({ game = 'block' }: { game?: string }) => {
  const { data, isLoading } = useGameResultData(game);

  if (isLoading || !data?.success) {
    return <div className="kl-streak">Indlæser...</div>;
  }

  const { streak, primary_stat, secondary_stat } = data.data;

  return (
    <div className="kl-streak" data-tracking="Streak">
      <div className="kl-streak__hero">
        <div className="kl-streak__hero-label">Din nuværende streak</div>
        <div className="kl-streak__hero-heading">{streak.current} dage i træk!</div>
      </div>

      <div className="kl-streak__stats">
        <div className="kl-streak__stat-card">
          <div className="kl-streak__stat-label">Din score idag</div>
          <div className="kl-streak__stat-value">{String(primary_stat.value)}</div>
          {primary_stat.percentile !== null && (
            <div className="kl-streak__stat-percentile">Top {primary_stat.percentile}%</div>
          )}
        </div>
        <div className="kl-streak__stat-card">
          <div className="kl-streak__stat-label">Din bedste</div>
          <div className="kl-streak__stat-value">{String(secondary_stat.value)}</div>
          {secondary_stat.percentile !== null && (
            <div className="kl-streak__stat-percentile">Top {secondary_stat.percentile}%</div>
          )}
        </div>
      </div>

      <div className="kl-streak__leaderboard">
        <div className="kl-streak__leaderboard-header">
          <div className="kl-streak__leaderboard-title">Leaderboard</div>
          <div className="kl-streak__leaderboard-best">
            <div className="kl-streak__leaderboard-best-value">{formatNumber(dailyBestScore)}</div>
            <div className="kl-streak__leaderboard-best-label">Dagens bedste</div>
          </div>
        </div>
        <ul className="kl-streak__leaderboard-list">
          {leaderboard.map((entry) => (
            <li
              key={entry.rank}
              className={
                entry.isCurrentUser
                  ? 'kl-streak__leaderboard-row kl-streak__leaderboard-row--current'
                  : 'kl-streak__leaderboard-row'
              }
            >
              <span className="kl-streak__leaderboard-rank">
                {entry.rank}. {entry.isCurrentUser && 'Dig'}
              </span>
              <span className="kl-streak__leaderboard-score">{formatNumber(entry.score)}</span>
            </li>
          ))}
        </ul>
      </div>

      <a className="kl-streak__cta" href="#">
        Tilbage til spil &amp; quiz
      </a>
    </div>
  );
};
