import { useTimeout } from './useTimer';

export const useDebounce = <T extends (...args: Parameters<T>) => ReturnType<T>>(
  cb: T,
  delay: number = 1,
  ...args: Parameters<T>
) => {
  //   let timer: ReturnType<typeof useTimeout>;
  //   const { reset, clear } = useTimeout(cb, delay, ...args);
  //   return (...args: Parameters<typeof cb>) => {
  //     if (timer) clear();
  //     timer = setTimeout(cb, delay, ...args);
  //   };
};
