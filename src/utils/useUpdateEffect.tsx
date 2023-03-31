import { ReactElement, useEffect, useRef } from 'react';

export const useUpdateEffect = (callback: any, dependencies: ReactElement[]) => {
  const isMounted = useRef(false);

  useEffect(() => {
    if (!isMounted.current) return () => (isMounted.current = !isMounted.current);
    return callback();
  }, dependencies);
};
