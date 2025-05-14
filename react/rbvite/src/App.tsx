import { useRef } from 'react';
import './App.css';
import Hello, { type HelloHandler } from './components/Hello';
import My from './components/My';
import { useCounter } from './contexts/counter/useCounter';
import { SessionProvider } from './contexts/session/SessionProvider';

function App() {
  const { count } = useCounter();
  const helloButtonRef = useRef<HTMLButtonElement>(null);
  const helloHandlerRef = useRef<HelloHandler>(null);

  return (
    <>
      <h2>count: {count}</h2>
      <SessionProvider>
        <My />
      </SessionProvider>
      <Hello name={'홍길동'} age={33} helloButtonRef={helloButtonRef} refx={helloHandlerRef}>
        반갑습니다!
      </Hello>
      <button onClick={() => helloHandlerRef.current?.sayHello()}>say Hello</button>
    </>
  );
}

export default App;
