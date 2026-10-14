import { motion } from 'framer-motion';
import { 
  SiReact, 
  SiTypescript, 
  SiNodedotjs, 
  SiExpress, 
  SiNestjs, 
  SiMongodb, 
  SiPostgresql, 
  SiRedis, 
  SiDocker, 
  SiTailwindcss, 
  SiStripe,
  SiGit
} from 'react-icons/si';

const techItems = [
  { name: 'React.js', icon: SiReact, color: '#61DAFB' },
  { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
  { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
  { name: 'Express.js', icon: SiExpress, color: '#FFFFFF' },
  { name: 'NestJS', icon: SiNestjs, color: '#E0234E' },
  { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
  { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
  { name: 'Redis', icon: SiRedis, color: '#DC382D' },
  { name: 'Docker', icon: SiDocker, color: '#2496ED' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
  { name: 'Stripe', icon: SiStripe, color: '#635BFF' },
  { name: 'Git', icon: SiGit, color: '#F05032' },
];

export default function TechMarquee() {
  const duplicatedItems = [...techItems, ...techItems, ...techItems];

  return (
    <div className="w-full py-10 overflow-hidden relative border-y border-subtle-borders/60 bg-secondary-background/40 backdrop-blur-sm">
      {/* Gradient masks for smooth fade-in and fade-out at edges */}
      <div className="absolute left-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 mb-4 flex items-center justify-between text-xs text-secondary-text uppercase tracking-widest">
        <span className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-fluorescent-lime animate-pulse" />
          Core Engineering Tech Stack
        </span>
        <span className="hidden sm:inline text-secondary-text/70">Continuous Architecture & Delivery</span>
      </div>

      <div className="flex select-none">
        <motion.div
          animate={{ x: ['0%', '-50%'] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: 'loop',
              duration: 28,
              ease: 'linear',
            },
          }}
          className="flex gap-4 md:gap-6 shrink-0"
        >
          {duplicatedItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="flex items-center gap-3 px-5 py-2.5 rounded-xl bg-card-background/80 border border-subtle-borders hover:border-fluorescent-lime/60 hover:shadow-[0_0_15px_rgba(198,255,61,0.15)] transition-all duration-300 group cursor-default"
              >
                <Icon 
                  size={20} 
                  style={{ color: item.color }} 
                  className="group-hover:scale-110 transition-transform duration-200" 
                />
                <span className="text-sm font-medium text-soft-white/90 group-hover:text-fluorescent-lime transition-colors">
                  {item.name}
                </span>
              </div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
}
