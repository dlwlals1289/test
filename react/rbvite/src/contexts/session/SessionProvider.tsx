import { useCallback, useEffect, useReducer, useRef, type PropsWithChildren } from 'react';
import { SessionContext, type Cart, type LoginUser, type Session } from './SessionContext';
import { useFetch } from '../../hooks/useFetch';

const KEY = 'SESSION_CART';

const setStorage = (cart: Cart[]) => localStorage.setItem(KEY, JSON.stringify(cart));

const getStorage = () => JSON.parse(localStorage.getItem(KEY) ?? '[]');

type LoginHandler = {
  validate: () => boolean;
};

type Action =
  | { type: 'INITIALIZE'; payload: Cart[] }
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
  let cart: Cart[] = [];
  switch (type) {
    case 'login':
    case 'logout': {
      return { ...session, loginUser: payload };
    }
    case 'addItem': {
      cart = [...session.cart, payload];
      break;
    }
    case 'editItem': {
      cart = session.cart.filter((item) => (item.id === payload.id ? payload : item));
      break;
    }
    case 'removeItem': {
      cart = session.cart.filter((item) => item.id !== payload);
      break;
    }
    case 'INITIALIZE':
      cart = payload;
      break;
    default:
      return session;
  }

  setStorage(cart);
  return { ...session, cart };
};
export const SessionProvider = ({ children }: PropsWithChildren) => {
  const [session, dispatch] = useReducer(reducer, {
    cart: getStorage(),
    loginUser: { id: 1, name: 'Hong' },
  });

  const { data } = useFetch<Cart[]>('apis/sample.json');
  useEffect(() => {
    // console.log('🚀 session.cart:', session.cart);
    if (session.cart.length || !data) return;
    // console.log('🚀 data22:', data);
    dispatch({ type: 'INITIALIZE', payload: data ?? [] });
  }, [data, session.cart]);

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
