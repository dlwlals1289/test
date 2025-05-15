import { useState } from 'react';

export const useToggle = (DefaultValue: boolean = false) => {
  const [isshow, setIsShow] = useState(DefaultValue);

  const toggle = () => setIsShow(!isshow);

  return [isshow, toggle] as const;
};
