'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function HelloSearchParams() {
  const [state, setState] = useState('');
  const sParams = useSearchParams();
  console.log('🚀 ~ HelloLayout ~ searchPrams:', sParams.get('q'));

  useEffect(() => {
    setState(sParams.get('q') ?? '');
    console.log('in useEffect');
  }, [sParams]);

  const urlParams = new URLSearchParams(sParams.toString());
  const router = useRouter();
  const pathName = usePathname();
  console.log(pathName);
  const setSearchParams = () => {
    console.log('dsfs');
    urlParams.set('q', 'new-qqq');
    urlParams.set('r', 'rrr');
    router.push(`/hello?${urlParams.toString()}`);
    router.push(`${pathName}?${urlParams.toString()}`);
  };
  return (
    <>
      <h1>This is Hello Layout {state}</h1>
      <button onClick={setSearchParams}>Set Params</button>
    </>
  );
}
