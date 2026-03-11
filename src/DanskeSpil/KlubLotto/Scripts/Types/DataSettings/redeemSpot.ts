import { SitecoreGenericLink, SitecoreImage } from '../sitecore';

export type RedeemSpotDataSettings = {
  reference: string;
  title: string;
  text: string;
  ctaLabel: string;
  image: SitecoreImage;
  linkToRedeemPage: SitecoreGenericLink;
};
