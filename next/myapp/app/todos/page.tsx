import Link from 'next/link';
import { use } from 'react';

// export const dynamic = 'force-dynamic';

const getTodo = async () =>
  fetch('https://jsonplaceholder.typicode.com/posts', {
    cache: 'no-store',
  }).then((res) => res.json());

export default function Todos() {
  const todos = use(getTodo());
  return (
    <>
      <h1 className='text-2xl'>Todos Page : {todos?.length}</h1>
      <div className='flex gap-3 text-sky-700 '>
        <Link href={`/todos/${todos[0].id}`}>FirstTodo</Link>
        <Link href={`/todos/${todos[99].id}`}>LastTodo</Link>
      </div>
    </>
  );
}
