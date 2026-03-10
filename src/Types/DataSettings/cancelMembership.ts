import { SitecoreGenericLink } from '../sitecore';

export type CancelMembershipDataSettings = {
  ctaCancel: SitecoreGenericLink;
  ctaConfirm: SitecoreGenericLink;
  errorPopupCtaLabel: string;
  errorPopupText: string;
  errorPopupTitle: string;
  successPopupCtaLabel: string;
  successPopupText: string;
  successPopupTitle: string;
};
