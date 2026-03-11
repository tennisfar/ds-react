import React from 'react';
import useLottoCountdown from '../../Hooks/useLottoCountdown';
import { LottoCountdownDigits } from './LottoCountdownDigits';

type LottoCountdownProps = {
  className?: string;
  drawDate: string;
};

export const LottoCountdown = ({ className, drawDate }: LottoCountdownProps) => {
  const { timeLeft, prevTimeLeft, clearAnimations } = useLottoCountdown({ drawDate });

  return (
    <div className={className}>
      <div className={'kl-lotto-countdown'}>
        <div className={'kl-lotto-countdown__header'}>Næste Lotto trækning</div>
        <div className={'kl-lotto-countdown__time'}>
          {timeLeft.d !== '00' && (
            <>
              <div className={'kl-lotto-countdown__unit-group'}>
                <LottoCountdownDigits
                  timeLeft={timeLeft.d}
                  prevTimeLeft={prevTimeLeft.d}
                  clearAnimations={clearAnimations}
                  label={'Dage'}
                />
              </div>

              <div className={'kl-lotto-countdown__separator'}></div>
            </>
          )}

          <div className={'kl-lotto-countdown__unit-group'}>
            <LottoCountdownDigits
              timeLeft={timeLeft.h}
              prevTimeLeft={prevTimeLeft.h}
              clearAnimations={clearAnimations}
              label={'Timer'}
            />
          </div>

          <div className={'kl-lotto-countdown__separator'}></div>

          <div className={'kl-lotto-countdown__unit-group'}>
            <LottoCountdownDigits
              timeLeft={timeLeft.m}
              prevTimeLeft={prevTimeLeft.m}
              clearAnimations={clearAnimations}
              label={'Min'}
            />
          </div>

          {timeLeft.d === '00' && (
            <>
              <div className={'kl-lotto-countdown__separator'}></div>
              <div className={'kl-lotto-countdown__unit-group'}>
                <LottoCountdownDigits
                  timeLeft={timeLeft.s}
                  prevTimeLeft={prevTimeLeft.s}
                  clearAnimations={clearAnimations}
                  label={'Sek'}
                />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
