import { PropsWithChildren } from 'react';

export default function HelloTemplate({ children }: PropsWithChildren) {
  return (
    <>
      <div className='border border-amber-500 m-1 p-1'>{children}</div>
    </>
  );
}
