import React, { useEffect, useState } from 'react';

const Overlay = () => {
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);

  useEffect(() => {
    document.addEventListener('klublotto:overlay:show', showOverlay);
    document.addEventListener('klublotto:overlay:hide', hideOverlay);

    return () => {
      document.removeEventListener('klublotto:overlay:show', showOverlay);
      document.removeEventListener('klublotto:overlay:hide', hideOverlay);
    };
  }, []);

  useEffect(() => {
    if (isOverlayVisible) {
      const scrollbarWidth = getScrollbarWidth();
      document.body.style.paddingRight = `${scrollbarWidth}px`;
      document.body.classList.add('no-scroll');
    } else {
      document.body.style.paddingRight = '';
      document.body.classList.remove('no-scroll');
    }
  }, [isOverlayVisible]);

  const getScrollbarWidth = () => {
    return window.innerWidth - document.documentElement.clientWidth;
  };

  const showOverlay = () => setIsOverlayVisible(true);
  const hideOverlay = () => setIsOverlayVisible(false);

  return (
    <div
      className={`kl-overlay kl-overlay--modal ${isOverlayVisible ? 'show' : ''}`}
      onClick={() => {
        setIsOverlayVisible(false);
        document.dispatchEvent(new CustomEvent('klublotto:overlay:clicked'));
        document.dispatchEvent(new CustomEvent('klublotto:modal:close'));
      }}
    ></div>
  );
};

export default Overlay;