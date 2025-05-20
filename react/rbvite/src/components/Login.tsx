import { useEffect, useImperativeHandle, useRef, useState, type FormEvent } from 'react';
import { useSession } from '../contexts/session/useSession';
import type { LoginHandler } from '../contexts/session/SessionContext';
import { useCounter } from '../contexts/counter/useCounter';
// import { useInterval, useTimeout } from '../hooks/useTimer';
// import { useInterval, useTimeout } from '../hooks/useTimer';

export default function Login({ title = 'Login' }: { title?: string }) {
  const idRef = useRef<HTMLInputElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const { login, loginHandlerRef } = useSession();
  const { plusCount, minusCount } = useCounter();
  const [x, setX] = useState(0);

  const makeLogin = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    const id = Number(idRef.current?.value);
    const name = nameRef.current?.value ?? '';

    login(id, name);
  };
  const loginHandler: LoginHandler = {
    validate() {
      const id = Number(idRef.current?.value);
      const name = nameRef.current?.value;

      if (!id || isNaN(id)) {
        alert('Input the user id!');
        idRef.current?.focus();
        return false;
      } else if (!name) {
        alert('Input the user name!');
        nameRef.current?.focus();
        return false;
      }

      return true;
    },
  };

  useImperativeHandle(loginHandlerRef, () => loginHandler);

  useEffect(() => {
    plusCount();
    return minusCount;
  }, []);

  // const { reset, clear } = useInterval(() => setX((x) => x + 1), 1000);
  // useTimeout(reset, 2000);
  // useTimeout(clear, 5000);

  const tit = `MyBlob::${title}`;

  return (
    <>
      <title>{tit}</title>
      <meta name="og:title" />
      <form onSubmit={makeLogin}>
        <div>
          LoginID ({x}):
          <input ref={idRef} type="number" />
        </div>
        <div>
          LoginName:
          <input type="text" ref={nameRef} />
        </div>
        <button type="reset">Cancel</button>
        <button onClick={() => setX((x) => x + 1)} type="reset">
          plus count
        </button>
        <button type="submit">Login</button>
      </form>
    </>
  );
}
