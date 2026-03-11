import React from 'react';
import { trackEvent, trackEventOnRedirect } from '../../Utils/tracking';

type ButtonProps = {
  variant?: 'primary' | 'secondary';
  inverted?: boolean;
  disabled?: boolean;
  isWorking?: boolean;
  // FIXME: [KlubLotto] specify correct type
  // ref: https://github.com/ds-itu-frontend-service/shared-documentation/blob/main/Tech/Frontend/TYPESCRIPT.md#type-any-and-unknown
  /* eslint-disable @typescript-eslint/no-explicit-any */
  onClick?: (e: React.MouseEvent<any, MouseEvent>) => void;
  children: React.ReactNode;
  tracking?: {
    action: string;
    ctaLabel?: string;
  };
  // FIXME: [KlubLotto] specify correct type
  // ref: https://github.com/ds-itu-frontend-service/shared-documentation/blob/main/Tech/Frontend/TYPESCRIPT.md#type-any-and-unknown
  /* eslint-disable @typescript-eslint/no-explicit-any */
  [key: string]: any; // Allow additional props
};

export const Button = ({
  variant = 'primary',
  inverted = false,
  disabled = false,
  isWorking = false,
  onClick,
  children,
  tracking,
  ...rest
}: ButtonProps) => {
  const href = rest.href;
  const Component = href ? 'a' : 'button';

  // FIXME: [KlubLotto] specify correct type
  // ref: https://github.com/ds-itu-frontend-service/shared-documentation/blob/main/Tech/Frontend/TYPESCRIPT.md#type-any-and-unknown
  /* eslint-disable @typescript-eslint/no-explicit-any */
  const handleClick = (e: React.MouseEvent<any, MouseEvent>) => {
    if (disabled) return;

    if (Component === 'button') {
      e.preventDefault();
    }

    if (tracking) {
      tracking.ctaLabel = tracking.ctaLabel || (typeof children === 'string' ? children : '');
      if (Component === 'button') {
        trackEvent(tracking);
      } else if (Component === 'a') {
        trackEventOnRedirect(tracking);
      }
    }

    onClick?.(e);
  };

  return (
    <Component
      onClick={handleClick}
      className={`kl-button kl-button--${variant}${inverted ? '-inverted' : ''}${disabled ? '-disabled' : ''} ${isWorking ? 'kl-button--working' : ''}`}
      {...rest}
    >
      {children}
    </Component>
  );
};
