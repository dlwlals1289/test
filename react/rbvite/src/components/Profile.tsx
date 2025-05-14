import type { RefObject } from 'react';
// import type { LoginUser } from '../App';
import { useSession } from '../contexts/session/useSession';

type Props = {
  logoutButtonRef?: RefObject<HTMLButtonElement | null>;
};

export default function Profile({ logoutButtonRef }: Props) {
  const { session, logout } = useSession();
  const { loginUser } = session;
  return (
    <>
      <h3>LoginUser: {loginUser?.name}</h3>
      <button ref={logoutButtonRef} onClick={logout}>
        LogOut
      </button>
    </>
  );
}
