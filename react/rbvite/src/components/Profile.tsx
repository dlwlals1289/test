// import type { RefObject } from 'react';
// import type { LoginUser } from '../App';
import { useSession } from '../contexts/session/useSession';

export default function Profile() {
  const {
    session: { loginUser },
    logout,
  } = useSession();
  return (
    <>
      <h3>LoginUser: {loginUser?.name}</h3>
      <button onClick={logout}>LogOut</button>
    </>
  );
}
