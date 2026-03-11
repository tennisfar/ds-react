import { SitecoreGenericLink, SitecoreImage } from '../sitecore';

export type DailyPlayHubDataSettings = {
  imageKrydsord: SitecoreImage;
  imageOrdklover: SitecoreImage;
  imageOrdknuden: SitecoreImage;
  imagePreviousGames: SitecoreImage;
  imageQuiz: SitecoreImage;
  imageSudoku: SitecoreImage;
  labelKrydsord: string;
  labelOrdklover: string;
  labelOrdknuden: string;
  labelPreviousGames: string;
  labelQuiz: string;
  labelSudoku: string;
  linkKrydsord: SitecoreGenericLink;
  linkOrdklover: SitecoreGenericLink;
  linkOrdknuden: SitecoreGenericLink;
  linkPreviousGames: SitecoreGenericLink;
  linkQuiz: SitecoreGenericLink;
  linkSudoku: SitecoreGenericLink;
}