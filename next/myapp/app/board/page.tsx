'use client';

import { Button } from '@/components/ui/button';
import { ContentToggle } from '@/components/ui/content-toggled';
import { Input } from '@/components/ui/input';
// import { ModeToggle } from '@/components/ui/mode-toggld';
import { Textarea } from '@/components/ui/textarea';

export default function Board() {
  return (
    <>
      <div className=''>
        <div className='flex gap-1  py-2'>
          <ContentToggle></ContentToggle>
          <Input type='title' placeholder='title...' />
        </div>
        <Textarea placeholder='content...' />
        <div className='flex gap-3  py-2'>
          <Button variant='secondary' onClick={() => alert('Cancel')}>
            취소
          </Button>
          <Button variant='destructive' onClick={() => alert('rewrite')}>
            수정
          </Button>
          <Button
            variant='primary'
            className='text-white'
            onClick={() => alert('Save')}
          >
            저장
          </Button>
        </div>
      </div>
    </>
  );
}
