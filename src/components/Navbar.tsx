import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Projects', path: '/projects' },
  { name: 'Skills', path: '/skills' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-background/80 backdrop-blur-md border-b border-subtle-borders py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <NavLink to="/" className="text-2xl font-heading font-bold tracking-tighter group">
          <span className="text-soft-white group-hover:text-fluorescent-lime transition-colors">H</span>
          <span className="text-fluorescent-lime group-hover:text-soft-white transition-colors">H</span>
          <span className="text-electric-green text-3xl leading-none">.</span>
        </NavLink>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) => 
                `text-sm font-medium transition-colors hover:text-fluorescent-lime relative ${
                  isActive ? 'text-fluorescent-lime' : 'text-secondary-text'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className="absolute -bottom-2 left-0 right-0 h-[2px] bg-fluorescent-lime"
                      initial={false}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}
          <NavLink 
            to="/contact" 
            className="px-5 py-2 text-sm font-medium bg-secondary-background border border-subtle-borders rounded-full hover:border-fluorescent-lime hover:text-fluorescent-lime transition-all"
          >
            Let's Talk
          </NavLink>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-soft-white hover:text-fluorescent-lime transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-secondary-background/95 backdrop-blur-xl border-b border-subtle-borders md:hidden shadow-2xl"
          >
            <nav className="flex flex-col py-6 px-6 gap-6">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className={({ isActive }) => 
                    `text-lg font-medium transition-colors ${
                      isActive ? 'text-fluorescent-lime' : 'text-secondary-text'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
              <NavLink 
                to="/contact" 
                className="w-full py-3 text-center text-sm font-medium bg-fluorescent-lime/10 text-fluorescent-lime border border-fluorescent-lime/30 rounded-lg"
              >
                Let's Talk
              </NavLink>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
