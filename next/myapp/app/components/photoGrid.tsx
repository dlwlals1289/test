'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

type Album = {
  id: number;
  author: string;
  url: string;
  download_url: string;
};
export default function PhotoGrid() {
  const imgUrl = 'https://picsum.photos/v2/list?limit=10';

  const [album, setAlbum] = useState<Album[]>();
  useEffect(() => {
    fetch(imgUrl)
      .then((res) => res.json())
      .then((data) => setAlbum(data));
    // console.log(album);
  }, []);
  console.log(album);

  const router = useRouter();
  const getPhoto = (id: number) => {
    router.push(`/photos/${id}`);
  };
  return (
    <>
      <div className='grid grid-cols-5 gap-4'>
        {album?.map((a) => (
          <div key={a.id} className='border border-gray-500  m-1 p-1'>
            <img
              src={a.download_url}
              className='basis-1/4'
              onClick={() => getPhoto(a.id)}
            ></img>
            {/* <div>{a.title}</div> */}
          </div>
        ))}
      </div>
    </>
  );
}
