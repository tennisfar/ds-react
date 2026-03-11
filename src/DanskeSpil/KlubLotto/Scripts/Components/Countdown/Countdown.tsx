import React from 'react';
import useCountdown from '../../Hooks/useCountdown';
import { CountdownDigits } from './CountdownDigits';

// Create a type for the time unit keys to ensure type safety
type TimeUnitKey = 'd' | 'h' | 'm' | 's';

// Define the type for our time units
type TimeUnit = {
  key: TimeUnitKey;
  label: string;
};

type CountdownProps = {
  className?: string;
  dueDate?: string;
};

export const Countdown = ({ dueDate }: CountdownProps) => {
  const { timeLeft, prevTimeLeft, clearAnimations } = useCountdown({ dueDate });

  const timeUnits: TimeUnit[] = [
    { key: 'd', label: 'Dage' },
    { key: 'h', label: 'Timer' },
    { key: 'm', label: 'Min' },
    { key: 's', label: 'Sek' },
  ];

  return (
    <div className={'kl-countdown'}>
      {timeUnits.map((unit) => (
        <div className={'kl-countdown__unit-group'} key={unit.key}>
          <CountdownDigits
            timeLeft={timeLeft[unit.key]}
            prevTimeLeft={prevTimeLeft[unit.key]}
            clearAnimations={clearAnimations}
            label={unit.label}
          />
        </div>
      ))}
    </div>
  );
};
