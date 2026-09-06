import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUp } from 'lucide-react';

export const ScrollToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      
      // Calculate scroll progress percentage (0 to 100)
      if (docHeight > 0) {
        const progress = Math.min(100, Math.max(0, (scrollTop / docHeight) * 100));
        setScrollProgress(progress);
      }

      // Show button after scrolling past hero section (approx 350px)
      if (scrollTop > 350) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // Circular progress calculations (Radius = 18, circumference = 2 * PI * 18 = ~113.1)
  const radius = 18;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (scrollProgress / 100) * circumference;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          transition={{ type: 'spring', stiffness: 350, damping: 25 }}
          className="fixed bottom-20 sm:bottom-22 lg:bottom-6 right-18 sm:right-20 lg:right-22 z-40 pointer-events-auto"
        >
          <button
            id="scroll-to-top-btn"
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="group relative w-12 h-12 rounded-full flex items-center justify-center bg-slate-900/85 hover:bg-slate-800/95 border border-white/15 hover:border-blue-400/50 shadow-[0_8px_25px_rgba(0,0,0,0.5)] backdrop-blur-xl transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer"
          >
            {/* Ambient subtle glow */}
            <div className="absolute inset-0 rounded-full bg-blue-500/10 group-hover:bg-blue-500/25 blur-md transition-all -z-10" />

            {/* Circular Progress SVG Ring */}
            <svg
              className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none p-0.5"
              viewBox="0 0 44 44"
            >
              {/* Background Track */}
              <circle
                cx="22"
                cy="22"
                r={radius}
                className="stroke-white/10"
                strokeWidth="2.5"
                fill="transparent"
              />
              {/* Active Animated Progress Arc */}
              <circle
                cx="22"
                cy="22"
                r={radius}
                className="stroke-blue-400 transition-all duration-150 ease-out"
                strokeWidth="2.5"
                strokeDasharray={circumference}
                strokeDashoffset={strokeDashoffset}
                strokeLinecap="round"
                fill="transparent"
              />
            </svg>

            {/* Centered Arrow Icon */}
            <ArrowUp className="w-5 h-5 text-slate-200 group-hover:text-white group-hover:-translate-y-0.5 transition-transform duration-200" />

            {/* Hover Tooltip for Desktop */}
            <div className="absolute bottom-full mb-2 hidden lg:group-hover:flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-900/95 border border-white/15 text-[10px] font-medium text-slate-200 whitespace-nowrap shadow-xl pointer-events-none backdrop-blur-md">
              <span>Top</span>
              <span className="font-mono text-blue-300 font-bold">{Math.round(scrollProgress)}%</span>
            </div>
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
