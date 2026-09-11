'use client';

import React, { createContext, useContext, useState, useEffect, useRef } from 'react';
import { useRouter, usePathname } from 'next/navigation';

interface PageTransitionContextType {
  navigateTo: (href: string) => void;
  isTransitioning: boolean;
}

const PageTransitionContext = createContext<PageTransitionContextType>({
  navigateTo: () => {},
  isTransitioning: false,
});

export const usePageTransition = () => useContext(PageTransitionContext);

export function PageTransitionProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const [phase, setPhase] = useState<'idle' | 'rising' | 'covered' | 'entering'>('idle');
  const [pageKey, setPageKey] = useState(0);
  const targetHrefRef = useRef<string | null>(null);

  const navigateTo = (href: string) => {
    if (phase !== 'idle') return;
    targetHrefRef.current = href;
    setPhase('rising');

    // 1. White screen rises from bottom to cover the entire viewport in 450ms
    setTimeout(() => {
      setPhase('covered');
      window.scrollTo(0, 0);

      // If already on the target page, force re-trigger by bumping key
      if (href === pathname || (href === '/' && pathname === '/')) {
        setPageKey((k) => k + 1);
        setTimeout(() => {
          setPhase('entering');
          setTimeout(() => {
            setPhase('idle');
            targetHrefRef.current = null;
          }, 1200);
        }, 50);
      } else {
        router.push(href);
      }
    }, 450);
  };

  // 2. When pathname changes after router.push:
  useEffect(() => {
    if (phase === 'covered') {
      window.scrollTo(0, 0);
      setPageKey((k) => k + 1);
      const timer = setTimeout(() => {
        setPhase('entering');
        const endTimer = setTimeout(() => {
          setPhase('idle');
          targetHrefRef.current = null;
        }, 1200);
        return () => clearTimeout(endTimer);
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [pathname, phase]);

  // 3. Lock scroll during transition phases to ensure rock-solid landing at top
  useEffect(() => {
    if (phase !== 'idle') {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [phase]);

  return (
    <PageTransitionContext.Provider value={{ navigateTo, isTransitioning: phase !== 'idle' }}>
      <div key={pageKey} className="relative z-[1] contents">
        {children}
      </div>

      {/* The White Screen Curtain that sweeps up from downside */}
      <div
        aria-hidden="true"
        className={`fixed inset-0 pointer-events-none will-change-transform bg-white ${
          phase === 'rising'
            ? 'z-[250] translate-y-0 transition-transform duration-[450ms] ease-[cubic-bezier(0.16,1,0.3,1)]'
            : phase === 'covered'
            ? 'z-[250] translate-y-0'
            : phase === 'entering'
            ? 'z-[0] translate-y-0'
            : 'z-[250] translate-y-full pointer-events-none'
        }`}
      />
    </PageTransitionContext.Provider>
  );
}
