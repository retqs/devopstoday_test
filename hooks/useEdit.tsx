import { useCallback, useState } from 'react';

import { ReactChangeEvent } from '../types';

// if we'd like to extend functionality we could
// make useResourceCreate/useResourceEdit that accepts name and id

interface IUseEditProp<T> {
  data: T;
  handleChange: (e: ReactChangeEvent) => void;
}

export function useEdit<T>(state: T): IUseEditProp<T> {
  const [data, setData] = useState(state);

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const target = e.target;
      const value = target.type === 'checkbox' ? target.checked : target.value;

      setData({ ...data, [target.name]: value });
    },
    [data],
  );

  return {
    data,
    handleChange,
  };
}
