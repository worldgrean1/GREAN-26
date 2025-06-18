import { useState, useEffect } from 'react';

export function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState({
    windowHeight: 0,
    windowWidth: 0,
    scrolled: false
  });

  useEffect(() => {
    function handleResize() {
      setWindowDimensions({
        windowHeight: window.innerHeight,
        windowWidth: window.innerWidth,
        scrolled: window.scrollY > 0
      });
    }

    function handleScroll() {
      setWindowDimensions(prev => ({
        ...prev,
        scrolled: window.scrollY > 0
      }));
    }

    handleResize();
    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return windowDimensions;
}