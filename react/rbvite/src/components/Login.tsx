import { useImperativeHandle, useRef, type FormEvent, type RefObject } from 'react';
import { useSession } from '../contexts/session/useSession';
// import type { LoginFn } from '../App';

export type LoginHandler = {
  validate: () => boolean;
};

type Props = {
  loginHandlerRef: RefObject<LoginHandler | null>;
};

export default function Login({ loginHandlerRef }: Props) {
  const idRef = useRef<HTMLInputElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const { login } = useSession();

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

  const makeLogin = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    const id = Number(idRef.current?.value);
    const name = nameRef.current?.value ?? '';

    console.log(id, name);

    login(id, name);
  };

  return (
    <form onSubmit={makeLogin}>
      <div>
        LoginID:
        <input ref={idRef} type="number" />
      </div>
      <div>
        LoginName:
        <input type="text" ref={nameRef} />
      </div>
      <button type="reset">Cancel</button>
      <button type="submit">Login</button>
    </form>
  );
}
