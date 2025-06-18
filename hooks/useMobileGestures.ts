import { useEffect } from 'react';

interface UseMobileGesturesProps {
  onSwipeLeft?: () => void;
  onSwipeRight?: () => void;
  enabled?: boolean;
}

export function useMobileGestures({
  onSwipeLeft,
  onSwipeRight,
  enabled = true
}: UseMobileGesturesProps) {
  useEffect(() => {
    if (!enabled) return;

    let startX = 0;
    let startY = 0;

    function handleTouchStart(event: TouchEvent) {
      startX = event.touches[0].clientX;
      startY = event.touches[0].clientY;
    }

    function handleTouchEnd(event: TouchEvent) {
      const endX = event.changedTouches[0].clientX;
      const endY = event.changedTouches[0].clientY;
      
      const deltaX = endX - startX;
      const deltaY = endY - startY;
      
      // Only trigger if horizontal swipe is more significant than vertical
      if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 50) {
        if (deltaX > 0 && onSwipeRight) {
          onSwipeRight();
        } else if (deltaX < 0 && onSwipeLeft) {
          onSwipeLeft();
        }
      }
    }

    window.addEventListener('touchstart', handleTouchStart);
    window.addEventListener('touchend', handleTouchEnd);

    return () => {
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [onSwipeLeft, onSwipeRight, enabled]);
}