import { useEffect, useState } from 'react';

// Local state that resets to `initialValue` whenever `key` changes (e.g. switching breakpoints).
export const useResetKeyState = <T,>(key: unknown, initialValue: T) => {
  const [state, setState] = useState(initialValue);

  useEffect(() => {
    setState(initialValue);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key]);

  return [state, setState] as const;
};
