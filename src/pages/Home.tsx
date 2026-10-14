import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Download, Mail } from 'lucide-react';
import TechMarquee from '../components/TechMarquee';
import DeveloperTerminal from '../components/DeveloperTerminal';
import FloatingNav from '../components/FloatingNav';
import ScrollProgress from '../components/ScrollProgress';
import KineticBanner from '../components/KineticBanner';
import EngineeringReel from '../components/EngineeringReel';
import MetricCounters from '../components/MetricCounters';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';

interface HomeProps {
  initialSection?: string;
}

export default function Home({ initialSection }: HomeProps) {
  const dynamicWords = [
    "Real Problems.",
    "Scalable Backends.",
    "Complex Workflows.",
    "Modern Web Apps."
  ];
  const [wordIndex, setWordIndex] = useState(0);

  // 3D Parallax tilt state for hero portrait
  const [heroTilt, setHeroTilt] = useState({ rotateX: 0, rotateY: 0 });
  const [activeModalProjectId, setActiveModalProjectId] = useState<string | null>(null);

  const handleOpenCaseStudyFromReel = (projectId: string) => {
    setActiveModalProjectId(projectId);
    const el = document.getElementById('projects');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const wordInterval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % dynamicWords.length);
    }, 3200);
    return () => clearInterval(wordInterval);
  }, []);

  useEffect(() => {
    const targetId = initialSection || (window.location.hash ? window.location.hash.replace('#', '') : null);
    if (targetId) {
      const el = document.getElementById(targetId);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth' });
        }, 150);
      }
    }
  }, [initialSection]);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleHeroMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setHeroTilt({
      rotateX: -y * 14,
      rotateY: x * 14,
    });
  };

  const handleHeroMouseLeave = () => {
    setHeroTilt({ rotateX: 0, rotateY: 0 });
  };

  return (
    <div className="relative w-full overflow-hidden">
      {/* Scroll progress indicator at very top */}
      <ScrollProgress />

      {/* Floating navigation & Back to top pill */}
      <FloatingNav />

      {/* Hero Section with Adam Kiser / Pheeqoh Interactive Motion */}
      <section 
        id="hero" 
        onMouseMove={handleHeroMouseMove}
        onMouseLeave={handleHeroMouseLeave}
        className="pt-20 pb-16 md:pt-28 md:pb-24 px-6 md:px-12 max-w-7xl mx-auto min-h-screen flex flex-col justify-center relative"
      >
        
        {/* Kinetic Typography Backdrop */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden z-0 opacity-[0.035] leading-none">
          <motion.div
            animate={{ x: [-35, 35, -35] }}
            transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
            className="text-[16vw] font-black font-heading tracking-tighter whitespace-nowrap text-soft-white uppercase"
          >
            HASNA HASAN • FULL-STACK
          </motion.div>
        </div>

        {/* Floating Ambient Architectural Chips in Canvas (Apart from Image) */}
        <motion.div
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="hidden xl:flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary-background/60 backdrop-blur-md border border-subtle-borders text-[11px] font-mono text-secondary-text absolute top-28 right-24 pointer-events-none z-10"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-fluorescent-lime animate-ping" />
          <span>Clean Architecture & SOLID</span>
        </motion.div>

        <motion.div
          animate={{ y: [0, 14, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="hidden xl:flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary-background/60 backdrop-blur-md border border-subtle-borders text-[11px] font-mono text-secondary-text absolute bottom-36 left-12 pointer-events-none z-10"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-electric-green" />
          <span>Real-Time WebSockets & Docker</span>
        </motion.div>

        {/* Editorial Metadata Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-secondary-text mb-8 border-b border-subtle-borders/50 pb-4 w-full z-10"
        >
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-fluorescent-lime animate-pulse" />
            <span className="text-soft-white font-medium uppercase tracking-wider">01 // Full-Stack Software Developer</span>
          </div>
          
          <div className="hidden md:flex items-center gap-4 text-[11px] tracking-widest text-secondary-text/80 uppercase">
            <span>Specialty: MERN & Clean Architecture</span>
            <span className="text-subtle-borders">/</span>
            <span>Docker • AWS EC2</span>
            <span className="text-subtle-borders">/</span>
            <span className="text-fluorescent-lime">Available for 2026 Roles</span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center z-10">
          
          {/* Left Content */}
          <div className="lg:col-span-7 flex flex-col items-start">
            
            {/* Status Pill */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex items-center gap-3 bg-secondary-background/80 border border-subtle-borders rounded-full px-4 py-1.5 mb-6 backdrop-blur-sm"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-fluorescent-lime animate-ping" />
              <span className="text-xs font-mono text-secondary-text uppercase tracking-widest">
                Kerala, India • Available Globally
              </span>
            </motion.div>
            
            {/* Masked Luxury Title with Rotating Word Flip */}
            <div className="overflow-hidden mb-6">
              <motion.h1 
                initial={{ y: '100%' }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="text-5xl md:text-6xl lg:text-7xl font-bold font-heading leading-[1.1]"
              >
                Building Digital Experiences That Solve{' '}
                <span className="inline-block relative min-h-[1.2em]">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={dynamicWords[wordIndex]}
                      initial={{ y: 35, opacity: 0, rotateX: -45 }}
                      animate={{ y: 0, opacity: 1, rotateX: 0 }}
                      exit={{ y: -35, opacity: 0, rotateX: 45 }}
                      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                      className="text-fluorescent-lime glow-text inline-block"
                    >
                      {dynamicWords[wordIndex]}
                    </motion.span>
                  </AnimatePresence>
                </span>
              </motion.h1>
            </div>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-xl text-soft-white mb-4 max-w-xl leading-relaxed font-light"
            >
              Hi, I'm <strong className="font-semibold text-fluorescent-lime">Hasna Hasan</strong> — a Full-Stack Developer passionate about building real-world web applications, scalable backend systems, secure authentication, and interactive user experiences.
            </motion.p>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-base text-secondary-text mb-10 max-w-xl leading-relaxed"
            >
              From multi-role platforms and payment workflows to real-time applications, I enjoy turning complex requirements into practical digital solutions.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap items-center gap-4"
            >
              <button 
                onClick={() => scrollTo('projects')}
                className="group flex items-center gap-2 px-6 py-3 bg-fluorescent-lime text-background font-bold rounded-xl hover:bg-electric-green transition-all shadow-[0_0_15px_rgba(198,255,61,0.3)] hover:shadow-[0_0_20px_rgba(124,255,107,0.5)] cursor-pointer"
              >
                <span>View My Projects</span>
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
              
              <a 
                href="/Hasna_Hasan_Resume.pdf" 
                download="Hasna_Hasan_Resume.pdf" 
                className="flex items-center gap-2 px-6 py-3 bg-secondary-background border border-subtle-borders text-soft-white font-medium rounded-xl hover:border-fluorescent-lime hover:text-fluorescent-lime transition-all"
              >
                <Download size={18} />
                <span>Download Resume</span>
              </a>
              
              <button 
                onClick={() => scrollTo('contact')}
                className="flex items-center gap-2 px-4 py-3 bg-secondary-background border border-subtle-borders rounded-xl text-secondary-text hover:text-fluorescent-lime hover:border-fluorescent-lime transition-colors cursor-pointer"
                title="Get in touch"
              >
                <Mail size={18} />
                <span className="text-sm font-medium">Contact Me</span>
              </button>
            </motion.div>
          </div>
          
          {/* Right Visual: Clean Photo with 3D Mouse Parallax & Architectural Framing */}
          <div className="lg:col-span-5 flex justify-center perspective-[1200px]">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              style={{
                transform: `rotateX(${heroTilt.rotateX}deg) rotateY(${heroTilt.rotateY}deg)`,
                transition: 'transform 0.18s ease-out'
              }}
              className="relative w-full max-w-[360px] md:max-w-[380px] aspect-[4/5] mx-auto group"
            >
              {/* Vibrant ambient glow aura behind the image */}
              <div className="absolute -inset-3 bg-gradient-to-tr from-fluorescent-lime/25 via-electric-green/15 to-transparent rounded-[38px] blur-2xl -z-10 opacity-70 group-hover:opacity-100 transition-opacity duration-700" />
              
              {/* Corner crosshairs / brackets */}
              <span className="absolute -top-2.5 -left-2.5 font-mono text-xs text-fluorescent-lime z-20 pointer-events-none">+</span>
              <span className="absolute -top-2.5 -right-2.5 font-mono text-xs text-fluorescent-lime z-20 pointer-events-none">+</span>
              <span className="absolute -bottom-2.5 -left-2.5 font-mono text-xs text-fluorescent-lime z-20 pointer-events-none">+</span>
              <span className="absolute -bottom-2.5 -right-2.5 font-mono text-xs text-fluorescent-lime z-20 pointer-events-none">+</span>

              {/* Accent border */}
              <div className="absolute -inset-1 rounded-[34px] border border-fluorescent-lime/30 -z-10 group-hover:border-fluorescent-lime/60 transition-colors duration-500" />

              {/* Main Image Container */}
              <div className="w-full h-full relative rounded-[30px] overflow-hidden glass-card shadow-2xl">
                <img 
                  src="/portfolioimage.jpg" 
                  alt="Hasna Hasan" 
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800';
                  }}
                />
                
                {/* Subtle bottom gradient shadow inside image */}
                <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-background/85 to-transparent pointer-events-none" />
                
                {/* Editorial caption at bottom */}
                <div className="absolute bottom-4 left-5 right-5 flex items-center justify-between text-xs text-soft-white/90">
                  <span className="font-heading font-semibold tracking-wide">Hasna Hasan</span>
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-background/80 text-fluorescent-lime border border-subtle-borders">
                    Full-Stack Dev
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Hero Interactive Developer Terminal */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="mt-16 md:mt-20 w-full z-10"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2 text-xs font-mono text-secondary-text uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-fluorescent-lime animate-ping" />
              <span>Interactive Architecture & Engineering Console</span>
            </div>
            <span className="text-xs font-mono text-secondary-text hidden sm:inline">Click tabs to inspect code & system status</span>
          </div>

          <DeveloperTerminal />
        </motion.div>

        {/* Editorial Scroll Down Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="mt-16 flex flex-col items-center gap-2.5 text-secondary-text cursor-pointer hover:text-fluorescent-lime transition-colors group z-10"
          onClick={() => scrollTo('about')}
        >
          <div className="flex items-center gap-2 text-[11px] font-mono uppercase tracking-[0.25em]">
            <span>Scroll to explore</span>
            <span className="text-fluorescent-lime font-bold">↓</span>
          </div>
          
          <div className="w-[1px] h-9 bg-subtle-borders relative overflow-hidden rounded-full">
            <motion.div
              animate={{ y: ['-100%', '100%'] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
              className="w-full h-1/2 bg-gradient-to-b from-transparent via-fluorescent-lime to-transparent"
            />
          </div>
        </motion.div>
      </section>

      {/* Animated Infinite Tech Stack Marquee */}
      <TechMarquee />

      {/* Adam Kiser Inspired Kinetic Typography Banner */}
      <KineticBanner />

      {/* Adam Kiser Inspired Interactive Engineering Showreel */}
      <EngineeringReel onOpenCaseStudy={handleOpenCaseStudyFromReel} />

      {/* Adam Kiser Inspired Production Telemetry Counters */}
      <MetricCounters />

      {/* All portfolio sections unified on Home page */}
      <About isSection />
      
      <Skills isSection />
      
      <Projects 
        isSection 
        activeModalProjectId={activeModalProjectId}
        onClearActiveModalProject={() => setActiveModalProjectId(null)}
      />
      
      <Contact isSection />
    </div>
  );
}
