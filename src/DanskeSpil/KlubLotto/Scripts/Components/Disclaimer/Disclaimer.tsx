import React from 'react';

type DisclaimerBaseProps = {
  children: string;
  className?: string;
};

export const DisclaimerBase = ({ children, className = '' }: DisclaimerBaseProps) => {
  return <div className={`kl-disclaimer__base ${className}`} dangerouslySetInnerHTML={{ __html: children }} />;
};
