import { use } from 'react';

// htt~~~~/hi/morning
type Props = {
  params: Promise<{ time: string }>;
};

const Times = ['morning', 'afternoon', 'Evening', 'Night'];
export async function generateStaticParams() {
  return Times.map((time) => ({ time }));
}

export default function InterceptTime({ params }: Props) {
  const { time } = use(params);
  const url = '/hi/'.concat(time);
  return (
    <>
      <div className='flex justify-around gap-2'>
        Good <span className='capitalize'>{time}</span>
        <a href={url} className='text-sky-500 border border-blue-500 p-2'>
          Go Real {time}
        </a>
      </div>
    </>
  );
}
