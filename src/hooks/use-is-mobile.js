import { useEffect, useState } from 'react';

const getIsSmallWindow = () => window.innerWidth < 1024;

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(getIsSmallWindow());

  useEffect(() => {
    const onResize = () => {
      setIsMobile(getIsSmallWindow());
    };

    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return isMobile;
};

export default useIsMobile;
