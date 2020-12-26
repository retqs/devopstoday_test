import { useEffect, useState } from 'react';

import { IAction } from '../types';
import api from '../api';
import { useDispatch } from 'react-redux';

interface IUseFetch {
  isLoading: boolean;
  error: null | string;
}

export const useFetch = (url: string, cb: () => IAction): IUseFetch => {
  const dispatch = useDispatch();
  const action = cb();

  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async function () {
      try {
        const res = await api.get(url);

        action.payload = res.data;

        dispatch(action);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  return {
    isLoading,
    error,
  };
};
