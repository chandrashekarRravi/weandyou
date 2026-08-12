'use client';

import React, { useState, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { ArrowUp, Home } from 'lucide-react';

export const ScrollHomeButton = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [visible, setVisible] = useState(false);

  const isHome = pathname === '/';

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleClick = () => {
    if (isHome) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      router.push('/');
    }
  };

  return (
    <button
      onClick={handleClick}
      aria-label={isHome ? 'Scroll to top' : 'Go to home page'}
      className={[
        'fixed bottom-6 right-6 z-50',
        'w-12 h-12 rounded-full',
        'flex items-center justify-center',
        'bg-brand-dark/80 backdrop-blur-md',
        'border border-white/10',
        'text-white/60 hover:text-black',
        'hover:bg-brand-primary hover:border-brand-primary',
        'shadow-[0_8px_32px_rgba(0,0,0,0.4)]',
        'transition-all duration-300 ease-out',
        'hover:scale-110 active:scale-95',
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none',
      ].join(' ')}
    >
      {/* Icon transitions between arrow-up (home) and home icon (other pages) */}
      <span
        className={`absolute transition-all duration-300 ${isHome ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`}
        aria-hidden="true"
      >
        <ArrowUp className="w-5 h-5" strokeWidth={2.5} />
      </span>
      <span
        className={`absolute transition-all duration-300 ${!isHome ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`}
        aria-hidden="true"
      >
        <Home className="w-5 h-5" strokeWidth={2.5} />
      </span>
    </button>
  );
};
