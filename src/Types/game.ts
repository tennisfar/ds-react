import { SitecoreFile, SitecoreGenericLink } from './sitecore';
import { ResultState } from './useGameFlow';
import { GameDataSettings } from './DataSettings/game';

export type GamePostMessageState =
  | 'gameStarted'
  | 'gamePaused'
  | 'gameUnpaused'
  | 'gameCompleted'
  | 'gameFailed'
  | 'gameEvent'
  | 'gameClose';

export type Platform = 'web' | 'ios' | 'android';

export type QuizGameContentProps = {
  // FIXME: [KlubLotto] specify correct type
  // ref: https://github.com/ds-itu-frontend-service/shared-documentation/blob/main/Tech/Frontend/TYPESCRIPT.md#type-any-and-unknown
  /* eslint-disable @typescript-eslint/no-explicit-any */
  currentQuestion?: any;
  isLoading: boolean;
  error: boolean;
  onSubmitAnswer: (answer: string | null) => void;
  gameResultTexts: GameResultTexts;
  solution: string;
  result: ResultState;
  linkBack: SitecoreGenericLink;
  successLottie: SitecoreFile;
  submitQuizAnswerCtaLabel: string;
};

export type GameType = GameDataSettings['gameType'];

export type GameResultTexts = GameDataSettings['gameResultTexts'];
