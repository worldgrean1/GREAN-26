'use client';

import React from 'react';
import Image from 'next/image';

export default function MobileLandingDemo() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 flex flex-col items-center justify-center p-4">
      <div className="text-center">
        <Image
          src="/images/grean-logo-icon.png"
          alt="GREAN WORLD Logo"
          width={80}
          height={80}
          className="mx-auto mb-4"
        />
        <h1 className="text-2xl font-bold text-[#3DD56D] mb-2">GREAN WORLD</h1>
        <p className="text-sm text-slate-600 dark:text-slate-400 mb-8">Energy Technology PLC</p>
        
        <div className="space-y-4">
          <div className="bg-gradient-to-r from-green-500 to-green-600 text-white p-4 rounded-lg">
            <h2 className="font-bold mb-2">Sustainable Energy Solutions</h2>
            <p className="text-sm">Powering a greener future with intelligent energy systems</p>
          </div>
          
          <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg">
            <h3 className="font-semibold mb-2">Contact Us</h3>
            <p className="text-sm">+251 913 330000</p>
            <p className="text-sm">info@greanworld.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}