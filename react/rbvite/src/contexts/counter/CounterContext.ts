import { createContext } from 'react';

type CounterContextType = {
  count: number;
  plusCount: () => void;
  minusCount: () => void;
};

export const CounterContext = createContext<CounterContextType>({
  count: 0,
  plusCount: () => {},
  minusCount: () => {},
});
