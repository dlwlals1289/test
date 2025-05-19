import { useActionState, useState } from 'react';
type User = { id: number; name: string };

async function searchUser(userId: string) {
  return fetch(`https://jsonplaceholder.typicode.com/users/${userId}`).then((res) => res.json());
}
// async function searchUser(userId: string) {
//   return new Promise((resolve) => {
//     setTimeout(() => resolve({ id: userId, name: 'Sampler' }), 1000);
//   });
// }
export default function Trans() {
  const [str, setStr] = useState('');

  const [list, search, isPending] = useActionState(async (preList: User[], formData: FormData) => {
    const value = formData.get('value')?.toString() ?? '';
    setStr(value);
    const data = (await searchUser(value)) as User;
    console.log('🚀 data:', data, preList);
    return [data];
  }, []);

  //   const search = (formData: FormData) => {
  //     const value = formData.get('value')?.toString() ?? '';
  //     setStr(value);
  //     startTransition(async () => {
  //       const data = (await searchUser(value)) as User;
  //       console.log('🚀 data:', data);
  //       setList([data]);
  //     });
  //   };

  return (
    <>
      <h3>{isPending ? <Spinner /> : str}</h3>
      <form>
        {/* <form action={search}> */}
        <input type="text" name="value" placeholder="userId..." />
        <button formAction={search}> Search</button>
      </form>
      <ul>
        {list.map(({ id, name }) => (
          <li key={id}>
            {id}. {name}
          </li>
        ))}
      </ul>
      <hr />
    </>
  );
}

function Spinner() {
  return <strong>Pending…</strong>;
}
