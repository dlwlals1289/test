import { use } from 'react';

type Props = {
  searchParams: Promise<{ q: string }>;
};
export default function Hello({ searchParams }: Props) {
  const { q } = use(searchParams);
  return (
    <>
      {' '}
      <div className='border m-1 p-1 border-blue-500'>
        <h3 className='font-bold'>
          Hello Page <span> {`${q}`}</span>
        </h3>
        <div> {`${new Date()}`}</div>
      </div>
    </>
  );
}
