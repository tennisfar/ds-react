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
  gameType: 'quiz' | 'ordknuden' | 'sudoku' | 'krydsord' | 'ordklover';
  linkBack: SitecoreGenericLink;
  submitQuizAnswerCtaLabel: string;
  successLottie: SitecoreFile;
};
