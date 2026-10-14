import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LuxuryPreloaderProps {
  onComplete?: () => void;
}

export default function LuxuryPreloader({ onComplete }: LuxuryPreloaderProps) {
  const [progress, setProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Check if preloader was already shown in this session
    const hasLoaded = sessionStorage.getItem('hasna_portfolio_loaded');
    if (hasLoaded) {
      setIsLoaded(true);
      if (onComplete) onComplete();
      return;
    }

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsLoaded(true);
            sessionStorage.setItem('hasna_portfolio_loaded', 'true');
            if (onComplete) onComplete();
          }, 350);
          return 100;
        }
        // Luxury non-linear loading progression
        const step = Math.floor(Math.random() * 8) + 4;
        return Math.min(prev + step, 100);
      });
    }, 45);

    return () => clearInterval(interval);
  }, [onComplete]);

  // Click to skip
  const handleSkip = () => {
    setIsLoaded(true);
    sessionStorage.setItem('hasna_portfolio_loaded', 'true');
    if (onComplete) onComplete();
  };

  return (
    <AnimatePresence>
      {!isLoaded && (
        <motion.div
          key="luxury-preloader"
          initial={{ opacity: 1, y: 0 }}
          exit={{ 
            y: '-100%',
            transition: { 
              duration: 0.85, 
              ease: [0.76, 0, 0.24, 1] 
            } 
          }}
          onClick={handleSkip}
          className="fixed inset-0 z-[100] bg-background flex flex-col justify-between p-8 md:p-16 select-none cursor-pointer"
        >
          {/* Subtle luxury ambient glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-fluorescent-lime/5 rounded-full blur-[140px] pointer-events-none" />

          {/* Top Row: Brand & Status */}
          <div className="flex justify-between items-center z-10">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-xs font-mono tracking-[0.25em] text-secondary-text uppercase flex items-center gap-2"
            >
              <span className="w-2 h-2 rounded-full bg-fluorescent-lime animate-pulse" />
              <span>Full-Stack Engineer</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xs font-mono tracking-[0.2em] text-secondary-text uppercase hidden sm:block"
            >
              Portfolio &copy; 2026
            </motion.div>
          </div>

          {/* Center: Luxury Editorial Typography (Pheeqoh Style) */}
          <div className="flex flex-col items-center justify-center my-auto z-10">
            <div className="overflow-hidden mb-3">
              <motion.h1
                initial={{ y: '100%' }}
                animate={{ y: 0 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-heading font-bold tracking-tight text-soft-white text-center"
              >
                HASNA HASAN<span className="text-fluorescent-lime">.</span>
              </motion.h1>
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-xs sm:text-sm font-mono tracking-[0.3em] text-secondary-text uppercase text-center"
            >
              Architecting Digital Experiences
            </motion.p>
          </div>

          {/* Bottom: Luxury Hairline Progress Line & Counter (Direct Pheeqoh Reference) */}
          <div className="w-full max-w-2xl mx-auto z-10 flex flex-col gap-3">
            <div className="flex justify-between items-baseline font-mono text-xs text-secondary-text">
              <span className="tracking-widest uppercase">System Initialization</span>
              <span className="text-fluorescent-lime font-bold text-sm tracking-wider">
                {progress}%
              </span>
            </div>

            {/* Hairline Progress Track */}
            <div className="w-full h-[2px] bg-subtle-borders/60 overflow-hidden relative rounded-full">
              <motion.div
                className="h-full bg-gradient-to-r from-fluorescent-lime via-electric-green to-fluorescent-lime shadow-[0_0_10px_rgba(198,255,61,0.6)]"
                style={{ width: `${progress}%` }}
                transition={{ ease: 'easeOut' }}
              />
            </div>

            <div className="flex justify-between items-center text-[11px] font-mono text-secondary-text/60 mt-1">
              <span>Clean Architecture • Real-Time Systems</span>
              <span className="italic opacity-60">Click anywhere to skip</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
