import { useImperativeHandle, useRef, type FormEvent } from 'react';
import { useSession } from '../contexts/session/useSession';
import type { LoginHandler } from '../contexts/session/SessionContext';

export default function Login() {
  const idRef = useRef<HTMLInputElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const { login, loginHandlerRef } = useSession();

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
