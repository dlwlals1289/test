import { useEffect, useRef } from 'react';

export const useTimeout = <T extends (...args: Parameters<T>) => ReturnType<T>>(
  cb: T,
  delay: number,
  ...args: Parameters<T>
) => {
  const timerRef = useRef<ReturnType<typeof setTimeout>>(undefined);

  const clear = () => clearTimeout(timerRef.current);
  const reset = () => {
    clear();
    timerRef.current = setTimeout(() => cb(...args), delay);
  };

  useEffect(() => {
    timerRef.current = setTimeout(() => cb(...args), delay);

    return () => clearTimeout(timerRef.current);
  }, [delay, ...args]);
  // }, [cb, delay, ...args]); // ToDo append cb

  return { reset, clear };
};

export const useInterval = <T extends (...args: Parameters<T>) => ReturnType<T>>(
  cb: T,
  delay: number,
  ...args: Parameters<T>
) => {
  const timerRef = useRef<ReturnType<typeof setInterval>>(undefined);
  const clear = () => {
    console.log('clear >>> ', timerRef.current);
    clearTimeout(timerRef.current);
  };
  const reset = () => {
    console.log('clear in reset >>> ', timerRef.current);
    clear();
    console.log('reset >>> ', timerRef.current);
    setTheTimer();
  };

  const setTheTimer = () => {
    timerRef.current = setInterval(() => cb(...args), delay);
  };
  useEffect(() => {
    console.log('****************** ', timerRef.current);

    setTheTimer();
    return clear();
    // return () => null
    // ===
    // return () => timerRef.current && clearTimeout(timerRef.current);
  }, [delay, ...args]);

  return { reset, clear };
};
