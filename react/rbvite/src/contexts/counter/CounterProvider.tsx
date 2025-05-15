import { useState, type PropsWithChildren } from 'react';
import { CounterContext } from './CounterContext';

export const CounterProvider = ({ children }: PropsWithChildren) => {
  const [count, setCount] = useState<number>(0);
  const plusCount = () => setCount((c) => c + 1);
  const minusCount = () => setCount((c) => c - 1);

  return <CounterContext.Provider value={{ count, plusCount, minusCount }}>{children}</CounterContext.Provider>;
};
