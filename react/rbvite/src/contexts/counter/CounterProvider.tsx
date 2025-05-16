import { useReducer, type PropsWithChildren } from 'react';
import { CounterContext } from './CounterContext';

// type Action1 =
//   | {
//       type: 'plusCount';
//     }
//   | {
//       type: 'minusCount';
//     };
// // 내꺼
// const reducer1 = (state: number, action: Action1) => {
//   switch (action.type) {
//     case 'plusCount':
//       return { count: state + 1 };
//     case 'minusCount':
//       return { count: state + 1 };
//     default:
//       return state;
//   }
// };

// 강사님 꺼
type Action = {
  type: 'plus' | 'minus';
  payload: number;
};
const reducer = (count: number, { type, payload }: Action) => {
  if (type == 'plus') {
    return count + payload;
  } else if (type == 'minus') {
    return count - payload;
  } else {
    return count;
  }
};

export const CounterProvider = ({ children }: PropsWithChildren) => {
  // const [count, setCount] = useState<number>(0);
  const [count, dispatch] = useReducer(reducer, 0);
  const plusCount = (payload: number = 1) => dispatch({ type: 'plus', payload });
  const minusCount = (payload: number = 1) => dispatch({ type: 'minus', payload });

  // const [count, dispatch] = useReducer(reducer1, 0);
  // const plusCount = (payload: number = 1) => dispatch({ type: 'plus', payload });
  // const minusCount = dispatch({ type: 'minus', payload: 1 });

  return <CounterContext.Provider value={{ count, plusCount, minusCount }}>{children}</CounterContext.Provider>;
};
