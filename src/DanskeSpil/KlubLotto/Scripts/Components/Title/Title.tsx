import React from 'react';

type TitleBaseProps = {
    children: React.ReactNode;
    className?: string;
};

export const TitleBase = ({ children, className = '' }: TitleBaseProps) => {
  return <div className={`kl-title__base ${className}`}>{children}</div>;
};