import { useImperativeHandle, type ForwardedRef, type PropsWithChildren, type RefObject } from 'react';

type Props = {
  name: string;
  age: number;
  plusCount: () => void;
  helloButtonRef: RefObject<HTMLButtonElement | null>;
  ref: ForwardedRef<HelloHandler>;
  // children: ReactNode; // PropsWithChildren
};

export type HelloHandler = {
  hello: string;
  sayHello: () => void;
};

// {name: '홍길동'}
export default function Hello({ name, age, plusCount, children, helloButtonRef, ref }: PropsWithChildren<Props>) {
  const helloHandler = {
    hello: 'hello',
    sayHello() {
      alert(`Hello, Mr${name}`);
    },
  };
  useImperativeHandle(ref, () => helloHandler);
  return (
    <div className="border">
      <h3>
        Hello {name} <small>({age})</small>
      </h3>
      <div>{children}</div>
      <button ref={helloButtonRef} onClick={plusCount}>
        count + 1
      </button>
    </div>
  );
}
