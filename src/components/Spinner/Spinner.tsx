import React from 'react';
import { GameType } from '../../Types/game';

type SpinnerProps = {
  className?: string;
  variant?: GameType | 'light' | 'dark';
};

export const Spinner = ({ className, variant = 'dark' }: SpinnerProps) => {
  return (
    <div className={`kl-spinner kl-spinner--${variant} ${className}`}>
      <div className={'kl-spinner__circle'}></div>
    </div>
  );
};
