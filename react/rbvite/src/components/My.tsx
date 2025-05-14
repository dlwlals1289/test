// import type { Cart, LoginFn, Session } from '../App';
import Login from './Login';
import Profile from './Profile';
import Item from './Item';
import { useState } from 'react';
import { useSession } from '../contexts/session/useSession';

export default function My() {
  const [isAdding, setAdding] = useState(false);
  const toggleAdding = () => setAdding(!isAdding);
  const {
    session: { loginUser, cart },
  } = useSession();

  return (
    <>
      {loginUser ? <Profile /> : <Login />}

      <div>
        <ul>
          {cart.map((item) => (
            <li key={item.id}>
              <Item item={item} />
            </li>
          ))}
          {isAdding ? (
            <li>
              <Item item={{ id: 0, name: '', price: 3000 }} toggleAdding={toggleAdding} />
            </li>
          ) : (
            <button onClick={() => setAdding(true)}>ADD</button>
          )}
        </ul>
      </div>
    </>
  );
}
