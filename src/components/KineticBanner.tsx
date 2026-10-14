import { motion } from 'framer-motion';

export default function KineticBanner() {
  const wordsRow1 = [
    "FULL-STACK ARCHITECTURE",
    "CLEAN CODE & SOLID",
    "SCALABLE BACKENDS",
    "REAL-TIME WEBSOCKETS",
    "DOCKER & CLOUD",
    "SECURE AUTHENTICATION",
    "HIGH AVAILABILITY",
  ];

  const wordsRow2 = [
    "TYPESCRIPT STRICT",
    "MICROSERVICES & REST",
    "OPTIMIZED DATABASE QUERIES",
    "ENTERPRISE PERFORMANCE",
    "MODERN INTERACTIVE UX",
    "END-TO-END DEPLOYMENTS",
  ];

  return (
    <div className="w-full py-12 md:py-16 overflow-hidden relative border-y border-subtle-borders/60 bg-secondary-background/60 backdrop-blur-md select-none">
      {/* Ambient edge shadow masks */}
      <div className="absolute left-0 top-0 bottom-0 w-28 md:w-52 bg-gradient-to-r from-background to-transparent z-20 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-28 md:w-52 bg-gradient-to-l from-background to-transparent z-20 pointer-events-none" />

      {/* Decorative Crosshair Framing */}
      <span className="absolute top-2 left-6 font-mono text-xs text-fluorescent-lime/40 z-10 pointer-events-none">+</span>
      <span className="absolute top-2 right-6 font-mono text-xs text-fluorescent-lime/40 z-10 pointer-events-none">+</span>
      <span className="absolute bottom-2 left-6 font-mono text-xs text-fluorescent-lime/40 z-10 pointer-events-none">+</span>
      <span className="absolute bottom-2 right-6 font-mono text-xs text-fluorescent-lime/40 z-10 pointer-events-none">+</span>

      {/* Row 1: Leftward Scrolling Solid Kinetic Typography */}
      <div className="flex mb-4">
        <motion.div
          animate={{ x: ['0%', '-50%'] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: 'loop',
              duration: 26,
              ease: 'linear',
            },
          }}
          className="flex items-center gap-8 md:gap-14 shrink-0 font-heading font-black text-2xl md:text-4xl tracking-widest uppercase text-soft-white/90"
        >
          {[...wordsRow1, ...wordsRow1].map((word, idx) => (
            <div key={idx} className="flex items-center gap-8 md:gap-14 group">
              <span className="group-hover:text-fluorescent-lime transition-colors duration-300">
                {word}
              </span>
              <span className="text-fluorescent-lime text-xl md:text-2xl animate-pulse">✦</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Row 2: Rightward Scrolling Outlined Stylized Typography (Adam Kiser Contrast Aesthetic) */}
      <div className="flex">
        <motion.div
          animate={{ x: ['-50%', '0%'] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: 'loop',
              duration: 30,
              ease: 'linear',
            },
          }}
          className="flex items-center gap-8 md:gap-14 shrink-0 font-heading font-black text-xl md:text-3xl tracking-widest uppercase"
        >
          {[...wordsRow2, ...wordsRow2].map((word, idx) => (
            <div key={idx} className="flex items-center gap-8 md:gap-14 group">
              <span 
                className="text-transparent transition-all duration-300 group-hover:text-electric-green/80"
                style={{
                  WebkitTextStroke: '1px rgba(162, 166, 174, 0.45)',
                }}
              >
                {word}
              </span>
              <span className="text-electric-green/60 text-lg md:text-xl">●</span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
