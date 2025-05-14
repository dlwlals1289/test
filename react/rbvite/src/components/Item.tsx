import { useRef, useState, type FormEvent } from 'react';
import type { Cart } from '../contexts/session/SessionContext';
import { useSession } from '../contexts/session/useSession';

type Props = {
  item: Cart;
  toggleAdding?: () => void;
};
export default function Item({ item, toggleAdding }: Props) {
  const itemNameRef = useRef<HTMLInputElement>(null);
  const itemPriceRef = useRef<HTMLInputElement>(null);
  const [isEditing, setIsEditing] = useState(!item.id);
  const [hasDirty, setDirty] = useState(false);
  const { addCartItem, editCartItem, removeCartItem } = useSession();

  const submitItem = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    const name = itemNameRef.current?.value;
    const price = itemPriceRef.current?.value;
    if (!name) {
      alert('상품명을 입력하세요!');
      return;
    }

    if (!price) {
      alert('금액을 입력하세요!');
      return;
    }

    const { id } = item;
    if (id) {
      editCartItem({ id, name, price: +price });
    } else {
      addCartItem(name, +price);
      if (toggleAdding) {
        toggleAdding();
      }
    }

    setIsEditing(false);
  };

  const resetItem = () => {
    setIsEditing(false);
    setDirty(false);
    if (toggleAdding) {
      toggleAdding();
    }
  };
  const checkDirty = () => {
    setDirty(itemNameRef.current?.value !== item.name || Number(itemPriceRef.current?.value) !== item.price);
  };

  return (
    <div>
      {!isEditing ? (
        <div>
          <a href="#" onClick={() => setIsEditing(!isEditing)}>
            {item.id}. {item.name} ({item.price.toLocaleString()})
          </a>
          <button onClick={() => removeCartItem(item.id)} className="p-sm">
            x
          </button>
        </div>
      ) : (
        <form onSubmit={submitItem} onReset={resetItem}>
          <input
            type="text"
            ref={itemNameRef}
            className="w-sm"
            defaultValue={item.name}
            placeholder="상품명"
            onChange={() => checkDirty()}
          />
          <input
            type="text"
            ref={itemPriceRef}
            defaultValue={item.price}
            className="w-sm"
            onChange={() => checkDirty()}
          />
          <button type="reset" disabled={true}>
            취소
          </button>
          <button type="submit" disabled={!hasDirty}>
            ✔️{item.id ? '수정' : '추가'}
          </button>
        </form>
      )}
    </div>
  );
}
