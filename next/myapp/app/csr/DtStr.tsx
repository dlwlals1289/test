'use client';

import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';

export default function DtStr() {
  const [dtStr, setDtStr] = useState('');
  const dt = new Date().toString();

  useEffect(() => setDtStr(dt), [dt]);
  return (
    <>
      <h3>Dtstr : {dtStr}</h3>
      <div className='flex gap-3'>
        <button onClick={() => alert(dtStr)} className='btn btn-primary'>
          Button
        </button>
        <button onClick={() => alert(dtStr)} className='btn bg-primary'>
          Primary Button
        </button>
      </div>
      <Button variant='destructive' size='sm'>
        ShadCn Button
      </Button>
    </>
  );
}
