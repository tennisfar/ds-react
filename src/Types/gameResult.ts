import { SitecoreFile, SitecoreGenericLink } from './sitecore';
import { GameResultTexts, GameType } from './game';

export type GameResultProps = {
  gameType: GameType;
  result: GameResultTextKeys;
  gameResultTexts: GameResultTexts;
  solution?: string;
  linkBack?: SitecoreGenericLink;
  successLottie?: SitecoreFile;
};

export type GameResultTextKeys = Extract<keyof GameResultTexts, string> | undefined;
