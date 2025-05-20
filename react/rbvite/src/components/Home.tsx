import { FaHome } from 'react-icons/fa';
import { useCounter } from '../contexts/counter/useCounter';
import { useRef } from 'react';
import type { HelloHandler } from './Hello';

export default function Home() {
  const { count } = useCounter();

  const helloButtonRef = useRef<HTMLButtonElement>(null);
  const logoutButtonRef = useRef<HTMLButtonElement>(null);
  const helloHandlerRef = useRef<HelloHandler>(null);

  return (
    <>
      <h2>
        <FaHome /> HOME ({count})
      </h2>

      <button onClick={() => helloButtonRef.current?.click()}>Click Hello</button>
      <button onClick={() => logoutButtonRef.current?.click()}>Logout in App</button>

      <button onClick={() => console.log(helloHandlerRef.current?.xx)}>sayHello</button>
    </>
  );
}
