'use client';

import React, { useState, useEffect } from 'react';

interface TypingTextAnimationProps {
  text: string;
  speed?: 'slow' | 'medium' | 'fast';
  className?: string;
}

export function TypingTextAnimation({
  text,
  speed = 'medium',
  className = ''
}: TypingTextAnimationProps) {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  const speedMap = {
    slow: 150,
    medium: 100,
    fast: 50
  };

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, speedMap[speed]);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text, speed]);

  return (
    <span className={className}>
      {displayText}
      {currentIndex < text.length && (
        <span className="animate-pulse">|</span>
      )}
    </span>
  );
}