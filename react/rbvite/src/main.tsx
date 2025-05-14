import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { SessionProvider } from './contexts/session/SessionProvider.tsx';
import { CounterProvider } from './contexts/counter/CounterProvider.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <SessionProvider>
      <CounterProvider>
        <App />
      </CounterProvider>
    </SessionProvider>
  </StrictMode>
);
