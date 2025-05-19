import { useActionState, useOptimistic, useState } from 'react';
type User = { id: number; name: string };

// async function searchUser(userId: string) {
//   return fetch(`https://jsonplaceholder.typicode.com/users/${userId}`).then((res) => res.json());
// }
type Msg = {
  text: string;
  sending?: boolean;
};
async function searchUser(userId: string) {
  return new Promise((resolve) => {
    setTimeout(() => resolve({ id: userId, name: 'Sampler' }), 3000);
  });
}
export default function Trans() {
  const [str, setStr] = useState('');

  const [list1, search, isPending] = useActionState(async (preList: User[], formData: FormData) => {
    const value = formData.get('value')?.toString() ?? '';
    setStr(value);
    setOptimistic(value);
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

  const [optimistic, setOptimistic] = useOptimistic({ text: ' ', sending: false }, (currState: Msg, text: string) => {
    console.log('🚀 ~ Trans ~ currState:', currState);
    console.log('🚀 ~ Trans ~ optimisticValue:', text);
    return { text, sending: true };
  });

  return (
    <>
      <h3>{isPending ? <Spinner /> : str}</h3>
      <h4>
        {optimistic.sending && 'Search...'}
        <strong color="red">{optimistic.text}</strong>
      </h4>
      {/* <form> */}
      <form action={search} method="get">
        <input type="text" name="value" placeholder="userId..." />
        {/* <button formAction={search}> Search</button> */}
        <DesignedButton />
      </form>
      <ul>
        {list1.map(({ id, name }) => (
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

function DesignedButton() {
  //   const { pending, data, method, action } = useFormStatus();
  //   console.log(action);
  //   console.log(data?.get(), method);
  return <button>DesignedButton</button>;
}
