import { useEffect, useRef, useState } from 'react';

const useSliderIndicatorCountdown = (querySelector: string) => {
  const [dotSelected, setDotSelected] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(true);
  const listRef = useRef<Element | null>(null);

  useEffect(() => {
    listRef.current = document.querySelector(querySelector);
    const slides = document.querySelectorAll(`${querySelector} > [id^='slide']`);

    const settings = {
      observerOptions: {
        root: listRef.current,
        rootMargin: '0px',
        threshold: 0.85,
      },
    };

    function onIntersectionObserved(entries: IntersectionObserverEntry[]) {
      const visibleSlides = entries.filter((entry) => entry.isIntersecting).length;
      setIsVisible(visibleSlides < slides.length);

      if (visibleSlides !== 0) {
        entries.forEach((entry: IntersectionObserverEntry) => {
          if (entry.isIntersecting) {
            const slideIndex = parseInt(entry.target.id.replace('slide', ''), 10);

            if (slides.length === 2) {
              setDotSelected(slideIndex);
            } else {
              if (slideIndex === 0) {
                setDotSelected(0);
              } else if (slideIndex === slides.length - 1) {
                setDotSelected(2);
              } else {
                setDotSelected(1);
              }
            }
          }
        });
      }
    }

    // eslint-disable-next-line compat/compat
    const observer = new IntersectionObserver(onIntersectionObserved, settings.observerOptions);

    slides.forEach((slide) => {
      observer.observe(slide);
    });

    const handleResize = () => {
      observer.disconnect();
      slides.forEach((slide) => {
        observer.observe(slide);
      });
    };

    const debouncedHandleResize = debounce(handleResize, 200);

    window.addEventListener('resize', debouncedHandleResize);

    return () => {
      observer.disconnect();
      window.removeEventListener('resize', debouncedHandleResize);
    };
  }, [querySelector]);

  return { dotSelected, isVisible };
};

function debounce<T extends unknown[]>(func: (...args: T) => void, wait: number) {
  let timeout: number | undefined;
  return function (...args: T) {
    clearTimeout(timeout);
    timeout = window.setTimeout(() => func(...args), wait);
  };
}

export default useSliderIndicatorCountdown;
