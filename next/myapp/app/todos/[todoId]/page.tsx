import { use } from 'react';

export const revalidate = 10; // 10초
// export const dynamicParams = false;
type Todo = {
  id: number;
  title: string;
};
const getTodo = async (todoId: string) => {
  const data = (await fetch(
    `https://jsonplaceholder.typicode.com/posts/${todoId}`
  ).then((res) => res.json())) as Todo;
  return data;
};

const TODO = ['1', '100'];
export const generateStaticParams = () => TODO.map((todoId) => ({ todoId }));

export default function TodoId({
  params,
}: {
  params: Promise<{ todoId: string }>;
}) {
  const { todoId } = use(params);
  const { id, title }: Todo = use(getTodo(todoId));
  return (
    <>
      <h1 className='text-2xl'>
        Todos Page : {id}.{title}
      </h1>
      {/* <div className='flex gap-3 text-sky-700 '>
        <Link href={`/todos/${todos[0].id}`}>FirstTodo</Link>
        <Link href={`/todos/${todos[99].id}`}>LastTodo</Link>
      </div> */}
    </>
  );
}
