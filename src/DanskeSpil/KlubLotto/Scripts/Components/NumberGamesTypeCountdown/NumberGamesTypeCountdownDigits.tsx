import React from 'react';

type GameTypeCountdownDigitProps = {
  timeLeft: string;
  prevTimeLeft: string;
  clearAnimations: boolean;
};

type GameTypeCountdownDigitsProps = GameTypeCountdownDigitProps & {
  label: string;
};

const Digit = ({ timeLeft, prevTimeLeft, clearAnimations }: GameTypeCountdownDigitProps) => {
  const addAnimation = timeLeft !== prevTimeLeft;

  return (
    <div
      className={`kl-numbergames-countdown__digit ${addAnimation && !clearAnimations ? 'kl-numbergames-countdown__digit--roll-in' : ''}`}
    >
      <div data-pos={'next'}>{timeLeft}</div>
      <div data-pos={'prev'}>{prevTimeLeft}</div>
    </div>
  );
};

export const NumberGamesTypeCountdownDigits = ({ timeLeft, prevTimeLeft, clearAnimations, label }: GameTypeCountdownDigitsProps) => {
  return (
    <div className={'kl-numbergames-countdown__unit'}>
      <div className={'kl-numbergames-countdown__digits'}>
        <Digit timeLeft={timeLeft[0]} prevTimeLeft={prevTimeLeft[0]} clearAnimations={clearAnimations}/>
        <Digit timeLeft={timeLeft[1]} prevTimeLeft={prevTimeLeft[1]} clearAnimations={clearAnimations}/>
      </div>
      <div className={'kl-numbergames-countdown__unit-label'}>{label}</div>
    </div>
  );
};
