import Modal from '@/app/components/modal';
import Image from 'next/image';
import { Suspense, use } from 'react';

type Props = {
  params: Promise<{ photoId: string }>;
};
export default function PhotoIntercept({ params }: Props) {
  const { photoId } = use(params);
  const { author, download_url, width, height } = use(
    fetch(`https://picsum.photos/id/${photoId}/info`).then((res) => res.json())
  );

  return (
    <>
      <Suspense fallback='<h1> ......</h1>'>
        <Modal>
          <div>
            <Image
              src={download_url}
              alt={author}
              width={width}
              height={height}
              priority
            />
            <h1 className='text-3xl'>{author}</h1>
          </div>
        </Modal>
      </Suspense>
    </>
  );
}
