import html from './PrizeDrawExperience.html?raw';

export const PrizeDrawExperience = () => {
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
};
