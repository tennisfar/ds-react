import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { NewsSliderDataSettings } from '../../Types/DataSettings/newsSlider';

export const NewsSlider = ({ sliderSelector }: NewsSliderDataSettings) => {
  const [container, setContainer] = useState<Element | null>(null);
  const [arrowPrev, setArrowPrev] = useState<Element | null>(null);
  const [arrowNext, setArrowNext] = useState<Element | null>(null);

  const slideWidthRef = useRef(0);
  const [slideWidth, setSlideWidth] = useState<number>(0);
  const [isPrevHidden, setIsPrevHidden] = useState(true);
  const [isNextHidden, setIsNextHidden] = useState(true);

  // Update slideWidthRef when slideWidth changes
  useEffect(() => {
    slideWidthRef.current = slideWidth;
  }, [slideWidth]);

  // Set container and arrow elements
  useEffect(() => {
    const slider = document.querySelector(sliderSelector);
    if (!slider) return;
    setContainer(slider.querySelector('.kl-news-slider__inner'));
    setArrowPrev(slider.querySelector('.kl-news-slider__navigation--left'));
    setArrowNext(slider.querySelector('.kl-news-slider__navigation--right'));
  }, [sliderSelector]);

  // Update button visibility
  const updateButtonVisibility = useCallback(() => {
    if (container) {
      const { scrollLeft, scrollWidth, clientWidth } = container;
      setIsPrevHidden(scrollLeft === 0);
      setIsNextHidden(scrollLeft + clientWidth >= scrollWidth);
    }
  }, [container]);

  // Handle next/prev
  const handleNext = useCallback(() => {
    if (container) {
      const multiplier = window.innerWidth >= 1024 ? 2 : 1;
      container.scrollBy({ left: slideWidthRef.current * multiplier, top: 0, behavior: 'smooth' });
    }
  }, [container]);

  const handlePrev = useCallback(() => {
    if (container) {
      const multiplier = window.innerWidth >= 1024 ? 2 : 1;
      container.scrollBy({ left: -slideWidthRef.current * multiplier, top: 0, behavior: 'smooth' });
    }
  }, [container]);

  // Measure slide width and observe resize
  useLayoutEffect(() => {
    if (!container) return;
    const updateWidth = () => {
      const firstChild = container.firstElementChild as HTMLElement | null;
      const itemWidth = firstChild?.clientWidth || 0;
      const gap = parseInt(window.getComputedStyle(container).gap, 10) || 0;
      setSlideWidth(itemWidth + gap);
    };
    updateWidth();
    // TODO: Ensure compatibility (Safari 10.3 and Chrome 52) or provide polyfill for ResizeObserver
    // eslint-disable-next-line compat/compat
    const resizeObserver = new window.ResizeObserver(updateWidth);
    resizeObserver.observe(container);
    if (container.firstElementChild) {
      resizeObserver.observe(container.firstElementChild);
    }
    return () => resizeObserver.disconnect();
  }, [container]);

  // Listen for scroll events
  useEffect(() => {
    if (!container) return;
    container.addEventListener('scroll', updateButtonVisibility);
    updateButtonVisibility();
    return () => container.removeEventListener('scroll', updateButtonVisibility);
  }, [container, updateButtonVisibility]);

  // Listen for arrow clicks
  useEffect(() => {
    if (!(arrowPrev && arrowNext)) return;
    arrowPrev.addEventListener('click', handlePrev);
    arrowNext.addEventListener('click', handleNext);
    return () => {
      arrowPrev.removeEventListener('click', handlePrev);
      arrowNext.removeEventListener('click', handleNext);
    };
  }, [arrowPrev, arrowNext, handlePrev, handleNext]);

  // Toggle arrow visibility classes
  useEffect(() => {
    arrowNext?.classList.toggle('kl-news-slider__navigation--hidden', isNextHidden);
    arrowPrev?.classList.toggle('kl-news-slider__navigation--hidden', isPrevHidden);
  }, [arrowPrev, arrowNext, isNextHidden, isPrevHidden]);

  return null;
};
