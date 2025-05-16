// import type { Cart, LoginFn, Session } from '../App';
import Login from './Login';
import Profile from './Profile';
import Item from './Item';
// import { useState } from 'react';
import { useSession } from '../contexts/session/useSession';
import { useToggle } from '../hooks/useToggle';
import { useMemo, useReducer, useRef, useState } from 'react';
// import { useEffect, useState } from 'react';

export default function My() {
  const [isshow, toggle] = useToggle();
  const {
    session: { loginUser, cart },
  } = useSession();
  const [, rerender] = useState(0);
  const searchWordRef = useRef<HTMLInputElement>(null);

  const totalPrice = useMemo(() => {
    const sum = cart.reduce((acc, a) => acc + a.price, 0);
    console.log('정답 >>>', sum);
    return sum;
  }, [cart]);

  const [expectPrice, addExpectPrice] = useReducer(
    (preprice, newPrice) => totalPrice + newPrice + preprice * 0,
    totalPrice
  );

  const [isSearching, search] = useReducer(() => {
    return cart.filter((item) => {
      if (!searchWordRef.current?.value) return;
      return item.name.includes(searchWordRef.current?.value);
    });
  }, cart);

  return (
    <>
      {loginUser ? <Profile /> : <Login />}
      <h3>total : {totalPrice}</h3>
      <h3>Expect : {expectPrice.toLocaleString()}</h3>
      <button onClick={() => rerender((prev) => prev + 1)}>rerender</button>
      <div>
        <div>
          search:
          <input type="text" ref={searchWordRef} onChange={() => search()} />
        </div>
        {isSearching ? (
          <ul>
            {isSearching.map((item) => (
              <li key={item.id}>
                <Item item={item} addExpectPrice={addExpectPrice} toggleAdding={toggle} />
              </li>
            ))}
            {isshow ? (
              <li>
                <Item item={{ id: 0, name: '', price: 3000 }} addExpectPrice={addExpectPrice} toggleAdding={toggle} />
              </li>
            ) : (
              // <button onClick={() => setAdding(true)}>ADD</button>
              <button onClick={() => toggle()}>ADD</button>
            )}
          </ul>
        ) : (
          <></>
        )}

        <hr />
        {/* <h3>{JSON.stringify(error)}</h3> */}
        {/* <ul>
          {posts.map(({ id, title }) => (
            <li key={id}>
              {id}.<strong>{title}</strong>
            </li>
          ))}
        </ul> */}
      </div>
    </>
  );
}
