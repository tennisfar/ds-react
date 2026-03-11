import React from 'react';

type CountdownDigitProps = {
  timeLeft: string;
  prevTimeLeft: string;
  clearAnimations: boolean;
};

type CountdownDigitsProps = {
  timeLeft: string;
  prevTimeLeft: string;
  clearAnimations: boolean;
  label: string;
};

const Digit = ({ timeLeft, prevTimeLeft, clearAnimations }: CountdownDigitProps) => {
  const addAnimation = timeLeft !== prevTimeLeft;

  return (
    <div className={`kl-countdown__digit ${addAnimation && !clearAnimations ? 'kl-countdown__digit--roll-in' : ''}`}>
      <div data-pos={'next'}>{timeLeft}</div>
      <div data-pos={'prev'}>{prevTimeLeft}</div>
    </div>
  );
};

export const CountdownDigits = ({ timeLeft, prevTimeLeft, clearAnimations, label }: CountdownDigitsProps) => {
  return (
    <div className={'kl-countdown__unit'}>
      <div className={'kl-countdown__digits'}>
        <Digit timeLeft={timeLeft[0]} prevTimeLeft={prevTimeLeft[0]} clearAnimations={clearAnimations} />
        <Digit timeLeft={timeLeft[1]} prevTimeLeft={prevTimeLeft[1]} clearAnimations={clearAnimations} />
      </div>
      <div className={'kl-countdown__unit-label'}>{label}</div>
    </div>
  );
};
