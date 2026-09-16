export type TopUpPromptProps = {
  isOpen: boolean;
  logo: string;
  logoAlt: string;
  title?: string;
  subtitle?: string;
  onClose: () => void;
  onDecline: () => void;
};

export type TopUpPromptStep = 'prompt' | 'add-rows';
