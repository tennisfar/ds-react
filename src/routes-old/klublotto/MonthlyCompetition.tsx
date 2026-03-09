import { createFileRoute } from '@tanstack/react-router';
// @ts-ignore
import { LottoCountdown } from '@KlubLotto/Scripts/Components/LottoCountdown/LottoCountdown.tsx';
// @ts-ignore
import { Countdown } from '@KlubLotto/Scripts/Components/Countdown/Countdown.tsx';

export const Route = createFileRoute('/klublotto/MonthlyCompetition')({
  component: RouteComponent,
});

function RouteComponent() {
  // Calculate the first coming Saturday or next Saturday if today is already Saturday
  const getNextSaturday = () => {
    const now = new Date();

    // Get days until next Saturday (0-6, where 0 is Sunday and 6 is Saturday)
    let daysUntilSaturday = 6 - now.getDay(); // 6 represents Saturday

    // If today is Saturday (6), set to 7 to get next Saturday
    if (daysUntilSaturday === 0) {
      daysUntilSaturday = 7;
    }

    // Create date for next Saturday
    const nextSaturday = new Date(now);
    nextSaturday.setDate(now.getDate() + daysUntilSaturday);

    // Set time to 20:00:00
    nextSaturday.setHours(20, 0, 0, 0);

    // Format as ISO string and adjust to keep +02:00 timezone
    return nextSaturday.toISOString().replace('Z', '+00:00');
  };

  return (
    <div
      style={{
        maxWidth: '300px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '50px',
        margin: 'auto',
      }}
    >
      <div
        className="kl-countdown"
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          margin: 'auto',
          background: 'darkred',
          position: 'relative',
          zIndex: 10,
          padding: '30px',
          borderRadius: '8px',
        }}
      >
        <Countdown />
      </div>

      <div
        className="kl-countdown"
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          margin: 'auto',
          background: 'darkred',
          position: 'relative',
          zIndex: 10,
          padding: '30px',
          borderRadius: '8px',
        }}
      >
        <Countdown dueDate={getNextSaturday()} />
      </div>

      <div
        className="kl-countdown"
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          margin: 'auto',
          background: '#eee',
          position: 'relative',
          zIndex: 10,
          padding: '30px',
          borderRadius: '8px',
        }}
      >
        <LottoCountdown drawDate={getNextSaturday()} />
      </div>
    </div>
  );
}
