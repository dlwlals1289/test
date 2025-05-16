// import type { Cart, LoginFn, Session } from '../App';
import Login from './Login';
import Profile from './Profile';
import Item from './Item';
// import { useState } from 'react';
import { useSession } from '../contexts/session/useSession';
import { useToggle } from '../hooks/useToggle';
import { useEffect, useMemo, useState } from 'react';
// import { useEffect, useState } from 'react';

export default function My() {
  // const [isshow, setAdding] = useState(false);
  // const toggleAdding = () => setAdding(!isshow);
  const [isshow, toggle] = useToggle();
  const [total, setTotal] = useState(0);
  const {
    session: { loginUser, cart },
  } = useSession();

  // const array = useMemo(() => [1, 2, 3], []);
  const [, rerender] = useState(0);
  // const memocart = useMemo(() => cart, []);
  // const array = [1, 2, 3];

  // useEffect(() => {
  //   const sum = array.reduce((acc, a) => acc + a, 0);
  //   console.log('array >> ', sum);
  // }, [...array]);
  useEffect(() => {
    const sum = cart.reduce((acc, a) => acc + a.price, 0);
    setTotal(sum);
    console.log(sum);
  }, [cart]);

  const totalPrice = useMemo(() => {
    const sum = cart.reduce((acc, a) => acc + a.price, 0);
    console.log('정답 >>>', sum);
    return sum;
  }, [cart]);
  console.log('total >>', totalPrice);

  // type Post = {
  //   id: number;
  //   title: string;
  // };
  // const POSTS_URL = 'https://jsonplaceholder.typicode.com/posts?userId=1';

  // const [posts, setPosts] = useState<Post[]>([]);
  // const [error, setError] = useState(null);
  // useEffect(() => {
  // 방법1 -> 강사님이 비추천하심
  // (async function() {
  //   const res = await fetch(POSTS_URL);
  //   const data = await res.json();
  // })();

  // 방법2
  // const controller = new AbortController();
  // const { signal } = controller;

  //   fetch(POSTS_URL, { signal })
  //     .then((res) => {
  //       // console.log(typeof res);
  //       return res.json();
  //     })
  //     .then(setPosts)
  //     .catch((err) => {
  //       console.log(err);
  //       if (signal.aborted) setError(err);
  //     });

  //   return () => controller.abort();
  // }, []);

  return (
    <>
      {loginUser ? <Profile /> : <Login />}
      <h3>total : {total}</h3>
      <button onClick={() => rerender((prev) => prev + 1)}>rerender</button>
      <div>
        <ul>
          {cart.map((item) => (
            <li key={item.id}>
              <Item item={item} toggleAdding={toggle} />
            </li>
          ))}
          {isshow ? (
            <li>
              <Item item={{ id: 0, name: '', price: 3000 }} toggleAdding={toggle} />
            </li>
          ) : (
            // <button onClick={() => setAdding(true)}>ADD</button>
            <button onClick={() => toggle()}>ADD</button>
          )}
        </ul>
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
