import { useActionState, useEffect, useOptimistic, useRef } from 'react';
import SearchButton from './SearchButton';
type Post = { id: number; title: string; body: string };
const searchPost = async (userId: string) =>
  fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`).then((res) => res.json());
export default function Post() {
  const inpRef = useRef<HTMLInputElement>(null);
  const [posts, search, isPending] = useActionState<Post[], FormData>(async (_preState, formData) => {
    const userId = formData.get('searchStr')?.toString() || '1';
    setOptimistic(userId);
    const data = await searchPost(userId);
    return data;
  }, []);

  const [optimistic, setOptimistic] = useOptimistic<string, string>('', (_preState, optimistic) => optimistic);
  useEffect(() => {
    if (!isPending) inpRef.current?.focus();
  }, [isPending]);
  return (
    <>
      <h3>Post List</h3>
      <form action={search}>
        <input type="text" name="searchStr" ref={inpRef} disabled={isPending} placeholder="userId..." />
        {/* <button>search</button> */}
        <SearchButton />
      </form>
      {!!optimistic && <strong>searching ... {optimistic}</strong>}
      <ul>
        {posts.map(({ id, title }) => (
          <li key={id}>
            {id} . {title}
          </li>
        ))}
      </ul>
    </>
  );
}
