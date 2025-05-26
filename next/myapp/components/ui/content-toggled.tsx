'use client';

import { ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  //   DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

// type Checked = DropdownMenuCheckboxItemProps['checked'];
export function ContentToggle() {
  const [menu, setMenu] = useState('공지사항');

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='outline' className='w-24'>
          {menu}
          <ChevronDown />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='w-56'>
        <DropdownMenuSeparator />
        <DropdownMenuCheckboxItem
          checked={menu == '공지사항' ? true : false}
          onClick={() => setMenu('공지사항')}
          // onCheckedChange={setShow공지사항}
        >
          공지사항
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={menu == '자유게시판' ? true : false}
          onClick={() => setMenu('자유게시판')}
        >
          자유게시판
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={menu == '앨범' ? true : false}
          onClick={() => setMenu('앨범')}
        >
          앨범
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
