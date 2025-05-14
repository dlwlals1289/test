// import type { Cart, LoginFn, Session } from '../App';
import Login, { type LoginHandler } from './Login';
import Profile from './Profile';
import Item from './Item';
import { useState, type RefObject } from 'react';
import { useSession } from '../contexts/session/useSession';

type Props = {
  logoutButtonRef: RefObject<HTMLButtonElement | null>;
  loginHandlerRef: RefObject<LoginHandler | null>;
};

export default function My({ logoutButtonRef, loginHandlerRef }: Props) {
  const [isAdding, setAdding] = useState(false);
  const toggleAdding = () => setAdding(!isAdding);
  const { session, login, removeCartItem, addCartItem, editCartItem } = useSession();
  const { loginUser, cart } = session;

  return (
    <>
      {loginUser ? (
        <Profile logoutButtonRef={logoutButtonRef} />
      ) : (
        <Login login={login} loginHandlerRef={loginHandlerRef} />
      )}

      <div>
        <ul>
          {cart.map((item) => (
            <li key={item.id}>
              <Item item={item} removeItem={removeCartItem} addItem={addCartItem} editItem={editCartItem} />
            </li>
          ))}
          {isAdding ? (
            <li>
              <Item
                item={{ id: 0, name: '', price: 3000 }}
                removeItem={removeCartItem}
                addItem={addCartItem}
                editItem={editCartItem}
                toggleAdding={toggleAdding}
              />
            </li>
          ) : (
            <button onClick={() => setAdding(true)}>ADD</button>
          )}
        </ul>
      </div>
    </>
  );
}
