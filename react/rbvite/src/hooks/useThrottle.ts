import { useEffect, useRef } from 'react';
import { useTimeout } from './useTimer';

export const useThrottle = <T extends (...args: Parameters<T>) => ReturnType<T>>(
  cb: T,
  delay: number = 1,
  depArr: unknown[],
  ...args: Parameters<T>
) => {
  const { ref } = useTimeout(cb, delay, depArr, ...args);
  const timerRef = useRef<ReturnType<typeof setTimeout>>(ref.current);

  useEffect(() => {
    if (timerRef.current) return;
    timerRef.current = setTimeout(() => {
      cb(...args);
      timerRef.current = undefined;
    }, delay);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, depArr);
};
