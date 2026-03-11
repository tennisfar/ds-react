import { useRef, useEffect } from 'react';

/**
 * Custom hook to determine if the component is mounting for the first time.
 * @returns {boolean} - Returns true if the component is mounting for the first time, otherwise false.
 */
export const useIsMount = (): boolean => {
  const isMountRef = useRef(true);
  useEffect(() => {
    isMountRef.current = false;
  }, []);
  return isMountRef.current;
};
