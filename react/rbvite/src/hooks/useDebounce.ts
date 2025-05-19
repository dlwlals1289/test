import { useEffect } from 'react';
import { useTimeout } from './useTimer';

export const useDebounce = <T extends (...args: Parameters<T>) => ReturnType<T>>(
  cb: T,
  delay: number = 1,
  depArr: unknown[],
  ...args: Parameters<T>
) => {
  const { reset } = useTimeout(cb, delay, depArr, ...args);
  useEffect(reset, depArr);
};
