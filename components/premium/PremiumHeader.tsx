'use client';

import React from 'react';
import Image from 'next/image';

interface PremiumHeaderProps {
  scrolled: boolean;
}

export default function PremiumHeader({ scrolled }: PremiumHeaderProps) {
  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/80 dark:bg-slate-900/80 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Image
              src="/images/grean-logo-icon.png"
              alt="GREAN WORLD Logo"
              width={40}
              height={40}
              className="object-contain"
            />
            <div>
              <h1 className="text-xl font-bold text-[#3DD56D]">GREAN WORLD</h1>
              <p className="text-xs text-slate-600 dark:text-slate-400">Energy Technology PLC</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}