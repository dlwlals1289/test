import { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import type { Cart } from '../contexts/session/SessionContext';
import { useSession } from '../contexts/session/useSession';
import { FaExternalLinkAlt } from 'react-icons/fa';

export default function ItemLayout() {
  const {
    session: { cart },
  } = useSession();
  const [currItem, setCurrItem] = useState<Cart>();

  const navigate = useNavigate();
  const goItem = (id: number) => {
    setCurrItem(cart.find((item) => item.id === id));
    navigate(`${id}`);
  };
  return (
    <>
      <div className="border" style={{ width: '30rem' }}>
        <ul>
          {cart.map((item) => (
            <li key={item.id}>
              <button onClick={() => goItem(item.id)}>
                {item.id}.{item.name} <FaExternalLinkAlt />
              </button>
            </li>
          ))}
          <li></li>
        </ul>
        <div>
          <Outlet context={{ currItem }} />
        </div>
      </div>
    </>
  );
}
