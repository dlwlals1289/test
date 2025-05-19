import { useActionState, useOptimistic } from 'react';

type Post = { id: number; title: string; body: string };
type Msg = {
  text: string;
  sending?: boolean;
};
async function searchPost(userId: string) {
  return fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`).then((res) => res.json());
}
export default function PostList() {
  const [list, search, isPending] = useActionState(async (preList: Post[], formData: FormData) => {
    const value = formData.get('value')?.toString() ?? '';
    setOptimistic(value);
    const data = (await searchPost(value)) as Post[];
    console.log('🚀 data:', preList);
    return data;
  }, []);
  const [optimistic, setOptimistic] = useOptimistic({ text: ' ', sending: false }, (currState: Msg, text: string) => {
    console.log('🚀 ~ Trans ~ currState:', currState);
    // console.log('🚀 ~ Trans ~ optimisticValue:', text);
    return { text, sending: true };
  });
  return (
    <>
      <h3>{isPending ? <Spinner /> : '작성자 검색'}</h3>
      <h4>
        {optimistic.sending && '작성자로 게시글 검색중입니다...'}
        <strong color="red">{optimistic.text}</strong>
      </h4>
      <form method="get">
        <input type="text" name="value" placeholder="작성자명..." />
      </form>
      <button formAction={search}>search</button>
      <ul>
        {list.map(({ id, title }) => (
          <li key={id}>
            {id}. {title}
            {/* {body} */}
          </li>
        ))}
      </ul>
    </>
  );
}

function Spinner() {
  return <strong>Pending…</strong>;
}
