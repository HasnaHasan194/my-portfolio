import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

export default function FloatingNav() {
  const [visible, setVisible] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 320);

      const sections = ['contact', 'projects', 'skills', 'about', 'hero'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    if (id === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-6 right-6 md:right-1/2 md:translate-x-1/2 z-40 flex items-center gap-1 p-1.5 rounded-full bg-card-background/90 backdrop-blur-xl border border-subtle-borders shadow-2xl"
        >
          {/* Quick Section Links (on md+ screens) */}
          <div className="hidden sm:flex items-center gap-1 px-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                  activeSection === item.id
                    ? 'bg-fluorescent-lime text-background font-semibold shadow-[0_0_10px_rgba(198,255,61,0.4)]'
                    : 'text-secondary-text hover:text-soft-white hover:bg-secondary-background'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="hidden sm:block w-[1px] h-4 bg-subtle-borders mx-1" />

          {/* Back to top button */}
          <button
            onClick={() => scrollToSection('hero')}
            className="p-2 rounded-full bg-secondary-background hover:bg-fluorescent-lime hover:text-background text-soft-white transition-all border border-subtle-borders hover:border-fluorescent-lime flex items-center gap-1.5 text-xs font-medium px-3"
            title="Back to Top"
          >
            <ArrowUp size={15} />
            <span className="sm:hidden">Top</span>
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
