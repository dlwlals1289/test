/* eslint-disable react-hooks/exhaustive-deps */
import Login from './Login';
import Profile from './Profile';
import Item from './Item';
import { useSession } from '../contexts/session/useSession';
import { useToggle } from '../hooks/useToggle';
import { useDeferredValue, useMemo, useReducer, useRef, useState, type RefObject } from 'react';
// import { useDebounce } from '../hooks/useDebounce';
import SlowList from './slowList';

type Props = {
  logoutButtonRef: RefObject<HTMLButtonElement | null>;
};

export default function My({ logoutButtonRef }: Props) {
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

  const [searchStr, setSearchStr] = useState('');
  // const [query, setQuery] = useState('');
  const [query] = useState('');

  // useDebounce(search, 1000, [searchStr]);
  // useThrottle(setQuery, 1000, [searchStr], searchStr);
  const deferedQuery = useDeferredValue(searchStr);
  const isSlow = false;

  return (
    <>
      {loginUser ? <Profile logoutButtonRef={logoutButtonRef} /> : <Login title={'LOGIN Page'} />}
      <h3>total : {totalPrice}</h3>
      <h3>Expect : {expectPrice.toLocaleString()}</h3>
      <button onClick={() => rerender((prev) => prev + 1)}>rerender</button>
      <div>
        현재 검색어 : {searchStr}
        <div>
          search:
          <input type="text" ref={searchWordRef} onChange={(evt) => setSearchStr(evt.target.value)} />
        </div>
        <ul>
          {cart
            .filter((item) => {
              return item.name.includes(query);
            })
            .map((item) => (
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
        {isSlow && <SlowList text={deferedQuery} />}
        <hr />
        {loginUser ? <Profile logoutButtonRef={logoutButtonRef} /> : <Login title={'Login Title'} />}
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
