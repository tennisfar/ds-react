import React from 'react';
import { openPopupBasic } from '../../Utils/openPopup';
import { trackEvent } from '../../Utils/tracking';
import { SignupPromoDataSettings } from '../../Types/DataSettings/signupPromo';

const SignupPromo = ({ buttonLabel, popupTitle, popupText, popupButtonLabel }: SignupPromoDataSettings) => {
  const handleClick = () => {
    trackEvent({ action: 'signupPromo', ctaLabel: buttonLabel });
    openPopupBasic({ title: popupTitle, text: popupText, ctaLabel: popupButtonLabel });
  };

  return (
    <div
      onClick={handleClick}
      className={
        'cursor-pointer leading-[0] border-[none] bg-none flex items-center gap-6 m-0 pl-16 pr-6 py-0 h-[4.2rem] rounded-2xl md:pr-16 md:pl-20 lg:h-[5.2rem] lg:py-2 lg:pt-10 lg:pb-12'
      }
    >
      <img src={'/dlo/Components/DanskeSpil/Domain/Feature.KlubLotto/Graphics/SignupPromo/questionmark.svg'} alt={''} />
      <div className={'whitespace-nowrap text-[#767676] text-center text-[12px] italic font-semibold leading-[normal]'}>
        {buttonLabel}
      </div>
    </div>
  );
};

export default SignupPromo;
