'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export const ScrollToHash = () => {
  const pathname = usePathname();

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      // Small delay to ensure the DOM is ready after navigation
      setTimeout(() => {
        const element = document.getElementById(hash.replace('#', ''));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [pathname]);

  return null;
};
