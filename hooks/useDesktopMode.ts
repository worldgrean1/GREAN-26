import { useState, useEffect } from 'react';

export function useDesktopMode() {
  const [isDesktopMode, setIsDesktopMode] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem('desktopMode');
    if (saved) {
      setIsDesktopMode(JSON.parse(saved));
    }
  }, []);

  const toggleDesktopMode = () => {
    const newMode = !isDesktopMode;
    setIsDesktopMode(newMode);
    localStorage.setItem('desktopMode', JSON.stringify(newMode));
  };

  return { isDesktopMode, toggleDesktopMode, mounted };
}