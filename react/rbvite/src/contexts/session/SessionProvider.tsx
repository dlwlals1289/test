import { useCallback, useReducer, useRef, type PropsWithChildren } from 'react';
import { SessionContext, type Cart, type LoginUser, type Session } from './SessionContext';

const SampleSession: Session = {
  // loginUser: null,
  loginUser: { id: 1, name: 'Hong' },
  cart: [
    { id: 100, name: '라면', price: 3000 },
    { id: 101, name: '컵라면', price: 2000 },
    { id: 200, name: '파', price: 5000 },
  ],
};
type LoginHandler = {
  validate: () => boolean;
};

type Action =
  | {
      type: 'addItem' | 'editItem';
      payload: Cart;
    }
  | {
      type: 'removeItem';
      payload: number;
    }
  | {
      type: 'login';
      payload: LoginUser;
    }
  | {
      type: 'logout';
      payload: null;
    };
const reducer = (session: Session, { type, payload }: Action) => {
  switch (type) {
    case 'login':
    case 'logout': {
      return { ...session, loginUser: payload };
    }
    case 'addItem': {
      return { ...session, cart: [...session.cart, payload] };
    }
    case 'editItem': {
      return {
        ...session,
        cart: session.cart.map((item) => (item.id === payload.id ? payload : item)),
      };
    }
    case 'removeItem': {
      return {
        ...session,
        cart: session.cart.filter((item) => item.id !== payload),
      };
    }
    default:
      return session;
  }
};
export const SessionProvider = ({ children }: PropsWithChildren) => {
  const [session, dispatch] = useReducer(reducer, SampleSession);
  const addCartItem = useCallback((name: string, price: number) => {
    const id = Math.max(...session.cart.map((item) => item.id), 0) + 1;
    dispatch({ type: 'addItem', payload: { id, name, price } });
  }, []);
  const removeCartItem = (itemId: number) => dispatch({ type: 'removeItem', payload: itemId });
  const editCartItem = (item: Cart) => dispatch({ type: 'editItem', payload: item });
  const login = useCallback((id: number, name: string) => {
    if (!loginHandlerRef.current) return;
    if (loginHandlerRef.current.validate()) dispatch({ type: 'login', payload: { id, name } });
  }, []);
  const logout = () => dispatch({ type: 'logout', payload: null });

  const loginHandlerRef = useRef<LoginHandler>(null);

  const value = {
    session,
    login,
    logout,
    addCartItem,
    editCartItem,
    removeCartItem,
    loginHandlerRef,
  };

  return (
    <>
      <SessionContext.Provider value={value}>{children}</SessionContext.Provider>
    </>
  );
};
