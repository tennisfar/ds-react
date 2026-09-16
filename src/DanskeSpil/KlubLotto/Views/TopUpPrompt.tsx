import { useEffect, useState } from 'react';
import './TopUpPrompt.less';

type TopUpPromptProps = {
  isOpen: boolean;
  logo: string;
  logoAlt: string;
  title?: string;
  subtitle?: string;
  onClose: () => void;
  onDecline: () => void;
};

type Step = 'prompt' | 'add-rows';

export const TopUpPrompt = ({
  isOpen,
  logo,
  logoAlt,
  title = 'Vil du også købe ekstra rækker?',
  subtitle = 'Øg din vinderchance',
  onClose,
  onDecline,
}: TopUpPromptProps) => {
  const [step, setStep] = useState<Step>('prompt');

  // Always land back on the initial prompt next time it's opened
  useEffect(() => {
    if (isOpen) {
      setStep('prompt');
    }
    document.dispatchEvent(new CustomEvent(isOpen ? 'klublotto:overlay:show' : 'klublotto:overlay:hide'));
  }, [isOpen]);

  // Clicking the overlay declines the top-up offer, same as pressing "Nej tak"
  useEffect(() => {
    document.addEventListener('klublotto:overlay:clicked', onDecline);
    return () => document.removeEventListener('klublotto:overlay:clicked', onDecline);
  }, [onDecline]);

  return (
    <div className={`kl-top-up-prompt${isOpen ? ' kl-top-up-prompt--open' : ''}`}>
      <div className="kl-top-up-prompt__sheet" role="dialog" aria-modal="true">
        <div className="kl-top-up-prompt__handle" />

        <button type="button" className="kl-top-up-prompt__close" onClick={onClose} aria-label="Luk">
          &times;
        </button>

        {step === 'prompt' ? (
          <div className="kl-top-up-prompt__content">
            <img className="kl-top-up-prompt__logo" src={logo} alt={logoAlt} />
            <div className="kl-top-up-prompt__title">{title}</div>
            <div className="kl-top-up-prompt__subtitle">{subtitle}</div>

            <div className="kl-top-up-prompt__buttons">
              <button type="button" className="kl-top-up-prompt__button" onClick={onDecline}>
                Nej tak
              </button>
              <button type="button" className="kl-top-up-prompt__button" onClick={() => setStep('add-rows')}>
                Køb rækker
              </button>
            </div>
          </div>
        ) : (
          // Placeholder — the row-quantity slider is a follow-up task
          <div className="kl-top-up-prompt__content">
            <div className="kl-top-up-prompt__title">Vælg antal rækker</div>
            <div className="kl-top-up-prompt__placeholder">Rækkevælgeren kommer i en kommende opgave.</div>

            <div className="kl-top-up-prompt__buttons">
              <button type="button" className="kl-top-up-prompt__button" onClick={onClose}>
                Luk
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
