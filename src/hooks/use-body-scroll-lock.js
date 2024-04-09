import { useLayoutEffect } from 'react';

const useBodyScrollLock = (lock) => {
  useLayoutEffect(() => {
    const originalStyle = window.getComputedStyle(document.body).overflow;

    if (lock) {
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.body.style.overflow = originalStyle;
    };
  }, [lock]);
};

export default useBodyScrollLock;
