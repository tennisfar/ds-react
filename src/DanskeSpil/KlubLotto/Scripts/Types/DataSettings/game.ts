import { SitecoreFile, SitecoreGenericLink } from '../sitecore';

export type GameDataSettings = {
  gameResultTexts: {
    ctaLabel: string;
    gameAlreadyCompleted: string;
    gameCompletedAlreadyGranted: string;
    gameCompletedLotGranted: string;
    gameFailedAlreadyGranted: string;
    gameFailedLotNotGranted: string;
  };
  gameType:
    | 'block'
    | 'krydsord'
    | 'ordklover'
    | 'ordknuden'
    | 'quiz'
    | 'sudoku';
  linkBack: SitecoreGenericLink;
  submitQuizAnswerCtaLabel: string;
  successLottie: SitecoreFile;
};