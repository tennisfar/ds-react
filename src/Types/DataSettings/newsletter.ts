import { SitecoreGenericLink } from '../sitecore';

export type NewsletterDataSettings = {
  title: string;
  subtitle: string;
  disclaimer: string;
  ctaAcceptLabel: string;
  ctaDeclineLabel: string;
  continueLink: SitecoreGenericLink;
  consentIds: string;
};