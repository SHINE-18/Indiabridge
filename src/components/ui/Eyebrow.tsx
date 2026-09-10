import React from 'react';
import clsx from 'clsx';

interface EyebrowProps {
  children: React.ReactNode;
  className?: string;
  dotColor?: string;
  light?: boolean;
}

export function Eyebrow({ children, className, light = false }: EyebrowProps) {
  return (
    <div
      className={clsx(
        'inline-flex items-center text-[0.8rem] md:text-[0.84rem] font-mono uppercase tracking-[0.16em] font-medium select-none',
        light ? 'text-white/80' : 'text-ink-secondary',
        className
      )}
    >
      <span className="indicator-dot" />
      {children}
    </div>
  );
}
