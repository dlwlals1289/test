import { useImperativeHandle, type ForwardedRef, type PropsWithChildren, type RefObject } from 'react';
import { useCounter } from '../contexts/counter/useCounter';
import { useFetch } from '../hooks/useFetch';
import { useToggle } from '../hooks/useToggle';
import LabelInput from './LabelInput';

export type HelloHandler = {
  xx: string;
  sayHello: () => void;
};

type Props = {
  id: number;
  helloButtonRef: RefObject<HTMLButtonElement | null>;
  refx: ForwardedRef<HelloHandler>;
};
type User = {
  id: number;
  name: string;
};

// {name: '홍길동'}
export default function Hello({ id, helloButtonRef, children, refx }: PropsWithChildren<Props>) {
  const { plusCount, minusCount } = useCounter();
  const [isshow, toggle] = useToggle();

  const helloHandler = {
    xx: 'XXXX',
    sayHello() {
      alert(`Hello, Mr.${name}!`);
    },
  };

  useImperativeHandle(refx, () => helloHandler);
  const {
    data: user,
    isLoading,
    error,
  } = useFetch<User>(`https://jsonplaceholder.typicode.com/users/${id}`, [id, isshow]);

  return (
    <div className="border">
      <h3>
        Hello, {isLoading ? '...' : user?.name}
        <div>{!!error && JSON.stringify(error)}</div>
      </h3>
      <div>{children}</div>
      <button ref={helloButtonRef} onClick={() => plusCount()}>
        count + 1
      </button>
      <button ref={helloButtonRef} onClick={() => minusCount()}>
        count - 1
      </button>
      <button onClick={toggle}>Reload</button>
      <LabelInput label="email" />
      <LabelInput label="name" />
    </div>
  );
}
