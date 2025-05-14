import { createContext, type RefObject } from 'react';

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
  setIdRef: (ref: React.RefObject<HTMLInputElement>) => void;
  setNameRef: (ref: React.RefObject<HTMLInputElement>) => void;
  // nameRef: RefObject<HTMLInputElement> | null;
  validate: () => boolean;
};

export type SessionContextType = {
  session: Session;
  // login: (evt: FormEvent<HTMLFormElement>) => void;
  login: (id: number, name: string) => void;
  logout: () => void;
  removeCartItem: (id: number) => void;
  addCartItem: (name: string, price: number) => void;
  editCartItem: (item: Cart) => void;
  // loginHandler: LoginHandler;
};
export const SessionContext = createContext<SessionContextType>({
  session: {
    loginUser: { id: 1, name: 'Hong' },
    cart: [
      { id: 100, name: '라면', price: 3000 },
      { id: 101, name: '컵라면', price: 2000 },
      { id: 200, name: '파', price: 5000 },
    ],
  },
  // session: { loginUser: null, cart: [] },
  login: () => {},
  logout: () => {},
  removeCartItem: () => {},
  addCartItem: () => {},
  editCartItem: () => {},
  // loginHandler: {
  //   setIdRef: () => {},
  //   setNameRef: () => {},
  //   validate: () => false,
  // },
});
