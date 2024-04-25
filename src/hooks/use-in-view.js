import { useEffect, useRef, useState } from 'react';

const useInView = ({ root = null, rootMargin = '0px', threshold = 0.5 }) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const options = {
      root,
      rootMargin,
      threshold,
    };

    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
    }, options);

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [root, rootMargin, threshold]);

  return [elementRef, isIntersecting];
};

export default useInView;
