import { useImperativeHandle, useRef, type FormEvent, type RefObject } from 'react';
import type { LoginFn } from '../App';

type Props = {
  login: LoginFn;
  ref: RefObject<LoginAlertHandler | null>;
};
export type LoginAlertHandler = {
  str: string;
  loginAlert: () => boolean;
};
export default function Login({ login, ref }: Props) {
  const idRef = useRef<HTMLInputElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);

  const idAlert = () => {
    alert('Input the id!');
    idRef.current?.focus();
  };
  const nameAlert = () => {
    alert('Input the name!');
    nameRef.current?.focus();
  };
  const makeLogin = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    const id = Number(idRef.current?.value);
    const name = nameRef.current?.value ?? '';
    login(id, name);
  };

  const loginAlertHandler = {
    str: 'STRING',
    loginAlert() {
      if (!idRef.current?.value || isNaN(Number(idRef.current?.value))) {
        idAlert();
        return false;
      } else if (!nameRef.current?.value) {
        nameAlert();
        return false;
      }
      return true;
    },
  };

  useImperativeHandle(ref, () => loginAlertHandler);

  return (
    <form onSubmit={makeLogin}>
      <div>
        LoginID :
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
