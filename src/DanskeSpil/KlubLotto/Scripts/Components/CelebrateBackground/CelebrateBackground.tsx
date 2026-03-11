import React from 'react';

export const CelebrateBackground = () => {
  return (
    <div className={'kl-celebrate-background'}>
      <div className={'kl-celebrate-background__lottie'}>
        {/* @ts-expect-error - lottie-player is a custom web component not recognized by TypeScript */}
        <lottie-player
          src={
            '/dlo/Components/DanskeSpil/Domain/Feature.KlubLotto/Graphics/LottieFiles/Vild-Celebration-Celebration-2.json'
          }
          autoplay={true}
          loop={true}
        />
      </div>
      <div className={'kl-celebrate-background__background'}></div>
    </div>
  );
};
