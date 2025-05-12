export default function Login({ login }: { login: () => void }) {
  return (
    <>
      <div>
        LoginID: <input type="text" />
      </div>
      <div>
        LoginName: <input type="text" />
      </div>
      <button onClick={login}>Login</button>
    </>
  );
}
