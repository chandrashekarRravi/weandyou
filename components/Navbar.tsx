'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, Transition } from 'motion/react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter, usePathname } from 'next/navigation';
import { Layers, User, BarChart3, MessageSquare, BookOpen } from 'lucide-react';

const DotsMorphButton = ({ isOpen, onClick }: { isOpen: boolean; onClick: () => void }) => {
  const springConfig: Transition = {
    type: "spring",
    stiffness: 200,
    damping: 25,
    mass: 1.0
  };

  return (
    <button
      onClick={onClick}
      className="md:hidden relative w-10 h-10 flex items-center justify-center focus:outline-none text-white transition-opacity hover:opacity-80"
      aria-label="Toggle Menu"
    >
      <motion.div
        animate={isOpen ? "open" : "closed"}
        initial={false}
        className="relative w-6 h-6"
      >
        <motion.span
          className="absolute bg-current block rounded-full origin-center"
          variants={{
            closed: { top: 2, left: 2, width: 8, height: 8, rotate: 0 },
            open: { top: 11, left: -2, width: 28, height: 2, rotate: 45 }
          }}
          transition={springConfig}
        />
        <motion.span
          className="absolute bg-current block rounded-full origin-center"
          variants={{
            closed: { top: 2, right: 2, width: 8, height: 8, rotate: 0 },
            open: { top: 11, right: -2, width: 28, height: 2, rotate: -45 }
          }}
          transition={springConfig}
        />
        <motion.span
          className="absolute bg-current block rounded-full origin-center"
          variants={{
            closed: { bottom: 2, left: 2, width: 8, height: 8, scale: 1, opacity: 1 },
            open: { bottom: 2, left: 2, width: 8, height: 8, scale: 0, opacity: 0 }
          }}
          transition={springConfig}
        />
        <motion.span
          className="absolute bg-current block rounded-full origin-center"
          variants={{
            closed: { bottom: 2, right: 2, width: 8, height: 8, scale: 1, opacity: 1 },
            open: { bottom: 2, right: 2, width: 8, height: 8, scale: 0, opacity: 0 }
          }}
          transition={springConfig}
        />
      </motion.div>
    </button>
  );
};

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    if (pathname !== '/') {
      e.preventDefault();
      router.push('/#' + id);
    }
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-[#113d67]/80 backdrop-blur-xl border-full border-white/2 py-4 shadow-lg' : 'bg-transparent py-8'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center relative w-full">
        {/* Logo Output Left */}
        <Link href="/" className="flex items-center -ml-2 -my-12 md:-ml-4 md:-my-19 z-10">
          <Image 
            src="/WE&YOU-LOGO.png" 
            alt="WE&YOU Marketing Logo" 
            width={200}
            height={40}
            sizes="(max-width: 768px) 140px, 200px"
            className="w-[140px] md:w-[200px] h-auto object-contain max-w-none" 
            priority
            fetchPriority="high"
          />
        </Link>

        {/* Nav Links Centered (Icon Hover Effect) */}
        <div className="hidden md:flex gap-8 items-center absolute left-1/2 -translate-x-1/2 pointer-events-auto">
          {[
            { name: 'Services', icon: Layers },
            { name: 'About', icon: User },
            { name: 'Process', icon: BarChart3 },
            { name: 'FAQ', icon: MessageSquare }
          ].map(({ name, icon: Icon }) => (
            <a
              key={name}
              href={`/#${name.toLowerCase()}`}
              onClick={(e) => handleNavClick(e, name.toLowerCase())}
              className="group flex items-center px-2 py-2 text-white/60 hover:text-brand-primary transition-colors duration-300"
            >
              <Icon className="w-5 h-5 shrink-0 transition-transform duration-300 group-hover:scale-110" />
              <div className="grid grid-cols-[0fr] group-hover:grid-cols-[1fr] transition-all duration-500 ease-[cubic-bezier(0.19,1,0.22,1)]">
                <div className="overflow-hidden">
                  <span className="pl-2 block whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 text-sm font-bold tracking-wide">
                    {name}
                  </span>
                </div>
              </div>
            </a>
          ))}

          {/* Blog — direct page link */}
          <Link
            href="/blog"
            className="group flex items-center px-2 py-2 text-white/60 hover:text-brand-primary transition-colors duration-300"
          >
            <BookOpen className="w-5 h-5 shrink-0 transition-transform duration-300 group-hover:scale-110" />
            <div className="grid grid-cols-[0fr] group-hover:grid-cols-[1fr] transition-all duration-500 ease-[cubic-bezier(0.19,1,0.22,1)]">
              <div className="overflow-hidden">
                <span className="pl-2 block whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 text-sm font-bold tracking-wide">
                  Blog
                </span>
              </div>
            </div>
          </Link>
        </div>

        {/* Action Button & Mobile Nav Right */}
        <div className="flex items-center gap-4 z-10">
          <Link
            href="/start"
            className="hidden md:flex bg-brand-primary text-black px-6 py-2 rounded-full text-sm font-bold hover:scale-105 transition-transform"
          >
            Start Your Project
          </Link>

          <DotsMorphButton
            isOpen={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          />
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-brand-dark border-b border-white/10 p-6 flex flex-col gap-4 md:hidden"
          >
            {[
              { name: 'Services', icon: Layers },
              { name: 'About', icon: User },
              { name: 'Process', icon: BarChart3 },
              { name: 'FAQ', icon: MessageSquare }
            ].map(({ name, icon: Icon }) => (
              <a
                key={name}
                href={`/#${name.toLowerCase()}`}
                className="flex items-center gap-3 text-lg font-medium text-white/80 hover:text-brand-primary transition-colors"
                onClick={(e) => {
                  handleNavClick(e, name.toLowerCase());
                  setIsMobileMenuOpen(false);
                }}
              >
                <Icon className="w-5 h-5" />
                {name}
              </a>
            ))}

            {/* Blog */}
            <Link
              href="/blog"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center gap-3 text-lg font-medium text-white/80 hover:text-brand-primary transition-colors"
            >
              <BookOpen className="w-5 h-5" />
              Blog
            </Link>

            <Link
              href="/start"
              onClick={() => setIsMobileMenuOpen(false)}
              className="bg-brand-primary text-black px-6 py-3 rounded-xl text-lg font-sans font-semibold text-center"
            >
              Start Your Project
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
