import React from 'react';

type LottoCountdownDigitProps = {
  timeLeft: string;
  prevTimeLeft: string;
  clearAnimations: boolean;
};

type LottoCountdownDigitsProps = {
  timeLeft: string;
  prevTimeLeft: string;
  clearAnimations: boolean;
  label: string;
};

const Digit = ({ timeLeft, prevTimeLeft, clearAnimations }: LottoCountdownDigitProps) => {
  const addAnimation = timeLeft !== prevTimeLeft;

  return (
    <div
      className={`kl-lotto-countdown__digit ${addAnimation && !clearAnimations ? 'kl-lotto-countdown__digit--roll-in' : ''}`}
    >
      <div data-pos={'next'}>{timeLeft}</div>
      <div data-pos={'prev'}>{prevTimeLeft}</div>
    </div>
  );
};

export const LottoCountdownDigits = ({ timeLeft, prevTimeLeft, clearAnimations, label }: LottoCountdownDigitsProps) => {
  return (
    <div className={'kl-lotto-countdown__unit'}>
      <div className={'kl-lotto-countdown__digits'}>
        <Digit timeLeft={timeLeft[0]} prevTimeLeft={prevTimeLeft[0]} clearAnimations={clearAnimations} />
        <Digit timeLeft={timeLeft[1]} prevTimeLeft={prevTimeLeft[1]} clearAnimations={clearAnimations} />
      </div>
      <div className={'kl-lotto-countdown__unit-label'}>{label}</div>
    </div>
  );
};
