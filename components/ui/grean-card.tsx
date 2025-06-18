'use client';

import React from 'react';

interface GreanCardProps {
  children: React.ReactNode;
  pattern?: 'dots' | 'grid' | 'none';
  gradient?: boolean;
  className?: string;
}

export function GreanCard({
  children,
  pattern = 'none',
  gradient = false,
  className = ''
}: GreanCardProps) {
  const baseClasses = 'relative rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden';
  
  const backgroundClasses = gradient
    ? 'bg-gradient-to-br from-white to-slate-50 dark:from-slate-800 dark:to-slate-900'
    : 'bg-white dark:bg-slate-800';

  const patternOverlay = pattern === 'dots' ? (
    <div className="absolute inset-0 opacity-10">
      <div className="absolute inset-0" style={{
        backgroundImage: 'radial-gradient(circle, #3DD56D 1px, transparent 1px)',
        backgroundSize: '20px 20px'
      }} />
    </div>
  ) : pattern === 'grid' ? (
    <div className="absolute inset-0 opacity-10">
      <div className="absolute inset-0" style={{
        backgroundImage: 'linear-gradient(#3DD56D 1px, transparent 1px), linear-gradient(90deg, #3DD56D 1px, transparent 1px)',
        backgroundSize: '20px 20px'
      }} />
    </div>
  ) : null;

  return (
    <div className={`${baseClasses} ${backgroundClasses} ${className}`}>
      {patternOverlay}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}