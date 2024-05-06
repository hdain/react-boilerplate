import { useEffect, useState } from 'react';

const useScrollScale = ({ minScale, maxScale, ref }) => {
  const [scrollScale, setScrollScale] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;

      const { top, height } = ref.current.getBoundingClientRect();
      const scrollTop = window.scrollY;
      const newScale =
        minScale + ((scrollTop - top) / height) * (maxScale - minScale);
      setScrollScale(Math.min(Math.max(newScale, minScale), maxScale));
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [minScale, maxScale, ref]);

  return scrollScale;
};

export default useScrollScale;
