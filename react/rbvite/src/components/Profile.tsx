import type { LoginUser } from '../App';

type Props = {
  loginUser: LoginUser | null;
  logout: () => void;
};

export default function Profile({ loginUser, logout }: Props) {
  return (
    <div className="mb-5">
      <h3 className="text-2xl mb-5">LoginUser: {loginUser?.name}</h3>
      <button onClick={logout}>LogOut</button>
    </div>
  );
}
