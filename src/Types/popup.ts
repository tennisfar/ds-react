import { ButtonLayoutProps } from './buttons';

export type PopupButtonProps = {
  href?: string;
  cb?: () => void;
  ctaLabel: string;
} & ButtonLayoutProps;

export type PopupVariantProps =
  | 'basic'
  | 'welcome'
  | 'error'
  | 'simple'
  | 'firstLot'
  | 'newPrize'
  | 'prizeExpires'
  | undefined;

export type PopupDataProps = {
  region: 'klublotto';
  variant: PopupVariantProps;
  title: string;
  subtitle?: string;
  text: string;
  image?: string;
  image2X?: string;
  expireDate?: string;
  ctaLabel?: string;
  buttons?: PopupButtonProps[];
  onOverlayClicked?: () => void;
  handleModalClose?: () => void;
};

export type PopupProps = {
  data: PopupDataProps;
  handleModalClose: () => void;
};
