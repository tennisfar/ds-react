import { SitecoreGenericLink, SitecoreImage } from '../sitecore';

export type NewPrizeNotificationDataSettings = {
  image: SitecoreImage;
  linkToRedeemPage: SitecoreGenericLink;
  referencesToIgnore: string;
  titleNewPrize: string;
  titlePrizeExpires: string;
}