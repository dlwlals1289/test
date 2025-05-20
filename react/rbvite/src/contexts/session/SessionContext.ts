import { createContext, createRef, type RefObject } from 'react';

export type LoginUser = {
  id: number;
  name: string;
};
export type Cart = {
  id: number;
  name: string;
  price: number;
};
export type Session = {
  loginUser: LoginUser | null;
  cart: Cart[];
};
export type LoginHandler = {
  validate: () => boolean;
};

export type SessionContextType = {
  session: Session;
  login: (id: number, name: string) => void;
  logout: () => void;
  removeItem: (id: number) => void;
  addItem: (name: string, price: number) => void;
  editItem: (item: Cart) => void;
  loginHandlerRef: RefObject<LoginHandler | null>; // react19
  // loginHandlerRef : ForwardedRef<LoginHandler> // react18
};
export const SessionContext = createContext<SessionContextType>({
  session: { loginUser: null, cart: [] },
  login: () => {},
  logout: () => {},
  removeItem: () => {},
  addItem: () => {},
  editItem: () => {},
  loginHandlerRef: createRef<LoginHandler>(),
});
