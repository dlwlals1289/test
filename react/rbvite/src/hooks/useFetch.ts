import { useLayoutEffect, useState } from 'react';
import { toErrorWithMessage } from '../utils/error-utils';

export const useFetch = <T>(url: string, depArr: unknown[] = []) => {
  const [data, setData] = useState<T>();
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useLayoutEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;
    console.log('---------------------');
    setIsLoading(true);
    fetch(url, { signal })
      .then((res) => {
        if (!res.ok) setError(`${res.status} ${res.statusText || 'Error'}`);
        else {
          return res.json();
        }
      })
      .then(setData)
      .catch((err) => {
        console.log(err);
        if (signal.aborted) setError(toErrorWithMessage(err).message);
      })
      .finally(() => setIsLoading(false));

    return () => controller.abort();
  }, depArr);

  return { data, error, isLoading };
};
