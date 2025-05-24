import Link from 'next/link';
import { PropsWithChildren } from 'react';

export default function InterceptLayout({ children }: PropsWithChildren) {
  return (
    <>
      <div className='border border-pink-500 m-1 p-1'>
        <h1 className='text-3xl flex gap-3'>
          Intercept Layout
          <Link href='/intercept/ic1' className='text-cyan-500'>
            IC1
          </Link>
          <a href='/intercept/ic1'> A - IC1</a>
          <Link href='/intercept/ic2' className='text-cyan-500'>
            IC2
          </Link>
          <Link href='/intercept/ic3' className='text-cyan-500'>
            IC3
          </Link>
        </h1>

        <div>{children}</div>
      </div>
    </>
  );
}
