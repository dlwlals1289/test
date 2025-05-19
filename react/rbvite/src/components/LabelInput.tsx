import { useId } from 'react';

export default function LabelInput({ label }: { label: string }) {
  const id = useId();
  return (
    <label htmlFor="">
      {label} : <input type="text" id={id}></input>
    </label>
  );
}
