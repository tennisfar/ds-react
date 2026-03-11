import React from 'react';

type SubtitleBaseProps = {
  children: React.ReactNode;
  className?: string;
};

export const SubtitleBase = ({ children, className = '' }: SubtitleBaseProps) => {
  return <div className={`kl-subtitle__base ${className}`}>{children}</div>;
};
