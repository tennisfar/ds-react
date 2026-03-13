// @ts-ignore
import React from 'react';
import useLottoCountdown from '../../Hooks/useLottoCountdown';
import { NumberGamesTypeCountdownDigits } from './NumberGamesTypeCountdownDigits';
import { getNumberGamesTypeLabel } from '../../Utils/numberGamesType';
import { NumberGamesType } from '../../Types/numberGames';

type Props = {
  className?: string;
  drawDate: string;
  numberGamesType: NumberGamesType;
};

export const NumberGamesTypeCountdown = ({ className, drawDate, numberGamesType }: Props) => {
  const { timeLeft, prevTimeLeft, clearAnimations } = useLottoCountdown({ drawDate });

  if (!numberGamesType) {
    return null;
  }

  return (
    <div className={className}>
      <div className={'kl-numbergames-countdown'}>
        <div className={'kl-numbergames-countdown__header'}>
          Næste {getNumberGamesTypeLabel(numberGamesType)} trækning
        </div>
        <div className={'kl-numbergames-countdown__time'}>
          {timeLeft.d !== '00' && (
            <>
              <div className={'kl-numbergames-countdown__unit-group'}>
                <NumberGamesTypeCountdownDigits
                  timeLeft={timeLeft.d}
                  prevTimeLeft={prevTimeLeft.d}
                  clearAnimations={clearAnimations}
                  label={'Dage'}
                />
              </div>

              <div className={'kl-numbergames-countdown__separator'}></div>
            </>
          )}

          <div className={'kl-numbergames-countdown__unit-group'}>
            <NumberGamesTypeCountdownDigits
              timeLeft={timeLeft.h}
              prevTimeLeft={prevTimeLeft.h}
              clearAnimations={clearAnimations}
              label={'Timer'}
            />
          </div>

          <div className={'kl-numbergames-countdown__separator'}></div>

          <div className={'kl-numbergames-countdown__unit-group'}>
            <NumberGamesTypeCountdownDigits
              timeLeft={timeLeft.m}
              prevTimeLeft={prevTimeLeft.m}
              clearAnimations={clearAnimations}
              label={'Min'}
            />
          </div>

          {timeLeft.d === '00' && (
            <>
              <div className={'kl-numbergames-countdown__separator'}></div>
              <div className={'kl-numbergames-countdown__unit-group'}>
                <NumberGamesTypeCountdownDigits
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
