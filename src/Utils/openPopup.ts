import { PopupButtonProps, PopupVariantProps } from '../Types/popup';

type PopupProps = {
  variant?: PopupVariantProps;
  title: string;
  subtitle?: string;
  text?: string;
  image?: string;
  image2X?: string;
  expireDate?: string | null;
  ctaLabel?: string;
  buttons?: PopupButtonProps[];
  onOverlayClicked?: () => void;
};

type PopupBasicProps = {
  title: string;
  text: string;
  ctaLabel?: string;
};

type PopupErrorProps = {
  title: string;
  subtitle?: string;
  text: string;
  ctaLabel?: string;
  buttons?: PopupButtonProps[];
};

type PopupFirstLotProps = {
  title: string;
  text: string;
  image: string;
  image2X: string;
};

type PopupNewPrizeProps = {
  title: string;
  image: string;
  buttons: PopupButtonProps[];
  onOverlayClicked?: () => void;
};

type PopupPrizeExpiresProps = {
  title: string;
  expireDate: string | null;
  image: string;
  buttons: PopupButtonProps[];
  onOverlayClicked?: () => void;
};

type PopupSimpleProps = {
  title: string;
  text: string;
  buttons: PopupButtonProps[];
  onOverlayClicked?: () => void;
};

export const openPopup = (props: PopupProps) => {
  document.dispatchEvent(
    new CustomEvent('klublotto:modal:open', {
      detail: { region: 'klublotto', ...props },
    })
  );
};

export const openPopupBasic = ({ title, text, ctaLabel }: PopupBasicProps) => {
  openPopup({ variant: 'basic', title, text, ctaLabel });
};

export const openPopupError = ({ title, subtitle, text, buttons, ctaLabel }: PopupErrorProps) => {
  openPopup({ variant: 'error', title, subtitle, text, buttons, ctaLabel });
};

export const openPopupFirstLot = ({ title, text, image, image2X }: PopupFirstLotProps) => {
  openPopup({ variant: 'firstLot', title, text, image, image2X });
};

export const openPopupNewPrize = ({ title, buttons, image, onOverlayClicked }: PopupNewPrizeProps) => {
  openPopup({ variant: 'newPrize', title, buttons, image, onOverlayClicked });
};

export const openPopupPrizeExpires = ({
  title,
  expireDate,
  buttons,
  image,
  onOverlayClicked,
}: PopupPrizeExpiresProps) => {
  openPopup({ variant: 'prizeExpires', title, expireDate, buttons, image, onOverlayClicked });
};

export const openPopupSimple = ({ title, text, buttons, onOverlayClicked }: PopupSimpleProps) => {
  openPopup({ variant: 'simple', title, text, buttons, onOverlayClicked });
};

export const openPopupWelcome = ({ title, text, ctaLabel }: PopupBasicProps) => {
  openPopup({ variant: 'welcome', title, text, ctaLabel });
};
