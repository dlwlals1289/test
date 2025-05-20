import { useDeferredValue, useEffect, useReducer, useRef, useState } from 'react';
import Item from './Item';
import ColorTitle from './ColorTitle';
import SlowList from './slowList';
import clsx from 'clsx';
import { Link, useSearchParams } from 'react-router-dom';
import { useSession } from '../contexts/session/useSession';

export default function Items() {
  const qRef = useRef<HTMLInputElement>(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const {
    session: { cart },
  } = useSession();

  const [isAdding, toggleAdding] = useReducer((pre) => !pre, false);
  const [searchStr, setSearchStr] = useState('');
  const [query] = useState('');
  const deferedQuery = useDeferredValue(searchStr);

  const totalPrice = cart.reduce((acc, item) => acc + item.price, 0);

  const [totalExpectPrice, addExpectPrice] = useReducer(
    (prePrice, newPrice) => totalPrice + newPrice + prePrice * 0,
    totalPrice
  );

  const isSlow = false;
  const q = searchParams.get('q') ?? '';
  useEffect(() => {
    if (!qRef.current) return;
    qRef.current.value = q;
    setSearchStr(q);
  }, []);
  const setSearch = () => {
    if (qRef.current?.value) setSearchParams({ q: qRef.current.value });
  };

  return (
    <>
      <ColorTitle color={cart.length % 2 === 1 ? 'blue' : 'yellow'}>Total: {totalPrice.toLocaleString()}</ColorTitle>
      <h4>Expect: {totalExpectPrice.toLocaleString()}</h4>
      <div>
        <label htmlFor="search-str">
          검색{searchStr}({query}):
          <input type="text" id="search-str" onChange={(evt) => setSearchStr(evt.target.value)} />
        </label>
        {/* <h1 className={`${cart.length % 2 === 0 ? '' : 'red'}`}> */}
        <h1 className={clsx({ red: cart.length % 2 }, 'underline', 'xxx')}>
          {deferedQuery} vs {searchStr}
        </h1>
        <label htmlFor="search-str">
          q:
          <input type="number" id="q" onChange={setSearch} />
        </label>
        {isSlow && <SlowList text={deferedQuery} />}
      </div>
      <ul>
        {cart
          .filter((item) => item.name.includes(query))
          .map((item) => (
            <li key={item.id}>
              <Link to={`/items/${item.id}`}>{item.name}</Link>
            </li>
          ))}
        {isAdding ? (
          <li>
            <Item toggleAdding={toggleAdding} addExpectPrice={addExpectPrice} />
          </li>
        ) : (
          <button onClick={() => toggleAdding()}>ADD</button>
        )}
      </ul>
    </>
  );
}
