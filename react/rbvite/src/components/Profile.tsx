// import type { RefObject } from 'react';
// import type { LoginUser } from '../App';
import type { RefObject } from 'react';
import { useSession } from '../contexts/session/useSession';
import Trans from './Trans';

type Props = {
  logoutButtonRef: RefObject<HTMLButtonElement | null>;
};

export default function Profile({ logoutButtonRef }: Props) {
  const {
    session: { loginUser },
    logout,
  } = useSession();
  return (
    <>
      <Trans />
      <h3>LoginUser: {loginUser?.name}</h3>
      <button ref={logoutButtonRef} onClick={logout}>
        LogOut
      </button>
    </>
  );
}
