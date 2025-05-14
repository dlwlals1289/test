import { useState, type PropsWithChildren } from 'react';
import { SessionContext, type Cart, type Session } from './SessionContext';

const SampleSession: Session = {
  // loginUser: null,
  loginUser: { id: 1, name: 'Hong' },
  cart: [
    { id: 100, name: '라면', price: 3000 },
    { id: 101, name: '컵라면', price: 2000 },
    { id: 200, name: '파', price: 5000 },
  ],
};
export const SessionProvider = ({ children }: PropsWithChildren) => {
  const [session, setSession] = useState<Session>(SampleSession);
  //   const idRef = useRef<HTMLInputElement>(null);
  //   const nameRef = useRef<HTMLInputElement>(null);

  //   const validate = () => {
  //     const id = Number(idRef.current?.value);
  //     const name = nameRef.current?.value;

  //     // console.log(id, name);
  //     if (!id || isNaN(id)) {
  //       alert('Input the user id!');
  //       idRef.current?.focus();
  //       return false;
  //     } else if (!name) {
  //       alert('Input the user name!');
  //       nameRef.current?.focus();
  //       return false;
  //     }

  //     return true;
  //   };
  //   const makeLogin = (id: number, name: string) => {
  //     if (validate()) setSession({ ...session, loginUser: { id, name } });
  //     else idRef.current?.focus();
  //   };
  //   const login = (evt: FormEvent<HTMLFormElement>) => {
  //     evt.preventDefault();
  //     const id = Number(idRef.current?.value);
  //     const name = nameRef.current?.value ?? '';
  //     console.log(id, name);
  //     makeLogin(id, name);
  //   };
  const login = (id: number, name: string) => {
    setSession({ ...session, loginUser: { id, name } });
  };

  const logout = () => {
    console.log('adfa');
    setSession({ ...session, loginUser: null });
  };

  const removeCartItem = (id: number) => {
    setSession({
      ...session,
      cart: session.cart.filter((item) => item.id !== id),
    });
  };

  const addCartItem = (name: string, price: number) => {
    const id = Math.max(...session.cart.map((item) => item.id), 0) + 1;
    setSession({ ...session, cart: [...session.cart, { id, name, price }] });
  };

  const editCartItem = (workingItem: Cart) => {
    setSession({
      ...session,
      cart: session.cart.map((item) => (item.id === workingItem.id ? workingItem : item)),
    });
  };

  return (
    <>
      <SessionContext.Provider
        value={{
          session,
          login,
          logout,
          removeCartItem,
          addCartItem,
          editCartItem,
        }}
      >
        {children}
      </SessionContext.Provider>
    </>
  );
};
