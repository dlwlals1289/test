import { createContext } from 'react';

type CounterContextType = {
  count: number;
  plusCount: () => void;
};

export const CounterContext = createContext<CounterContextType>({
  count: 0,
  plusCount: () => {},
});
