// src/components/My.tsx
import type { Session } from '../App';
import Login from './Login';
import Profile from './Profile';

type Props = {
  session: Session;
  login: () => void;
  logout: () => void;
};
export default function My({ session: { loginUser, cart }, login, logout }: Props) {
  return (
    <div className="mb-5">
      {loginUser ? <Profile loginUser={loginUser} logout={logout} /> : <Login login={login} />}
      <ul>
        {cart.map(({ id, name, price }) => (
          <li key={id}>
            {name}({price})
          </li>
        ))}
      </ul>
    </div>
  );
}
