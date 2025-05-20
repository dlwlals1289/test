import { Navigate, useNavigate, useOutletContext, useParams } from 'react-router-dom';
import type { Cart } from '../contexts/session/SessionContext';
import { useSession } from '../contexts/session/useSession';

export default function ItemDetail() {
  const {
    session: { cart },
  } = useSession();
  const { currItem } = useOutletContext<{ currItem: Cart }>();
  const { id } = useParams();
  console.log('🚀 ~ ItemDetail ~ id:', currItem, id);

  let item = currItem;

  if (!currItem) {
    if (!id) {
      return <Navigate to="/items" />;
    }
    item = cart.find((item) => item.id === +id)!;
    // navigate('/itmes');
  }

  return (
    <>
      <h2>ItemDetail: {item.name}</h2>
      <div> 금액 : {item.price.toLocaleString()}</div>
    </>
  );
}
