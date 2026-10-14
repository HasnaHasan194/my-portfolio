import { motion } from 'framer-motion';
import { Download, ExternalLink, Code2, Server, Layout, BookOpen, BrainCircuit } from 'lucide-react';

interface AboutProps {
  isSection?: boolean;
}

export default function About({ isSection = false }: AboutProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section 
      id="about"
      className={isSection ? "py-20 md:py-28 px-6 md:px-12 max-w-7xl mx-auto scroll-mt-12 border-t border-subtle-borders/40 relative" : "pt-28 pb-16 md:pt-40 md:pb-24 px-6 md:px-12 max-w-7xl mx-auto min-h-screen"}
    >
      <div className="flex items-center gap-3 mb-8">
        <div className="w-2 h-2 rounded-full bg-fluorescent-lime animate-pulse" />
        <span className="text-xs font-semibold text-electric-green uppercase tracking-widest">About Me & Philosophy</span>
      </div>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 lg:grid-cols-12 gap-12"
      >
        {/* Left Column: Image & Contact Info */}
        <div className="lg:col-span-4 flex flex-col gap-8">
          <motion.div variants={itemVariants} className="relative aspect-square w-full max-w-md mx-auto lg:mx-0">
            <div className="absolute inset-0 border border-fluorescent-lime/20 rounded-2xl transform translate-x-3 translate-y-3 -z-10 glow-border" />
            <img 
              src="/portfolioimage.jpg" 
              alt="Hasna Hasan" 
              className="w-full h-full object-cover rounded-2xl glass-card"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800';
              }}
            />
          </motion.div>

          <motion.div variants={itemVariants} className="glass-card p-6 rounded-2xl">
            <h3 className="text-xl font-heading font-semibold mb-4 text-soft-white border-b border-subtle-borders pb-4">Connect</h3>
            <div className="flex flex-col gap-4">
              <a href="mailto:hasnahasnahasan194@gmail.com" className="flex items-center justify-between text-secondary-text hover:text-fluorescent-lime transition-colors group">
                <span>hasnahasnahasan194@gmail.com</span>
                <ExternalLink size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
              <a href="tel:+919207478990" className="flex items-center justify-between text-secondary-text hover:text-fluorescent-lime transition-colors group">
                <span>+91 92074 78990</span>
                <ExternalLink size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
              <a href="https://www.linkedin.com/in/hasna-hasan-6b3951330/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between text-secondary-text hover:text-fluorescent-lime transition-colors group">
                <span>LinkedIn</span>
                <ExternalLink size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
              <a href="https://github.com/HasnaHasan194" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between text-secondary-text hover:text-fluorescent-lime transition-colors group">
                <span>GitHub</span>
                <ExternalLink size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
              <a href="https://www.instagram.com/hasna._hasan/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between text-secondary-text hover:text-fluorescent-lime transition-colors group">
                <span>Instagram</span>
                <ExternalLink size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            </div>
            <div className="mt-6 pt-6 border-t border-subtle-borders">
              <a href="/HasnaResume.pdf" download className="flex items-center justify-center gap-2 w-full py-3 bg-secondary-background border border-subtle-borders text-soft-white font-medium rounded-lg hover:border-fluorescent-lime hover:text-fluorescent-lime transition-all">
                <Download size={18} />
                Download Resume
              </a>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Content */}
        <div className="lg:col-span-8 flex flex-col gap-12">
          <motion.div variants={itemVariants}>
            <h1 className="text-4xl md:text-5xl font-bold font-heading mb-6 leading-tight">
              Curious Mind.<br />
              Creative Builder.<br />
              <span className="text-fluorescent-lime glow-text">Full-Stack Developer.</span>
            </h1>
            <p className="text-lg text-secondary-text leading-relaxed">
              I'm Hasna Hasan, a Full-Stack Developer with a background in Zoology who transitioned into technology through dedicated learning and hands-on development. My focus is on building practical applications that solve real problems, with an emphasis on clean architecture, secure APIs, meaningful user experiences, and maintainable code.
            </p>
          </motion.div>

          {/* Philosophy Section */}
          <motion.div variants={itemVariants}>
            <h2 className="text-2xl font-heading font-semibold text-soft-white mb-6 flex items-center gap-3">
              <BrainCircuit className="text-fluorescent-lime" />
              Development Philosophy
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { icon: Code2, text: "Building real-world applications rather than only tutorial projects." },
                { icon: Layout, text: "Writing clean, reusable, maintainable code." },
                { icon: Server, text: "Understanding backend logic and system architecture." },
                { icon: ExternalLink, text: "Designing intuitive, responsive user interfaces." },
                { icon: BookOpen, text: "Continuously improving through problem-solving and practical development." }
              ].map((item, i) => (
                <motion.div 
                  key={i} 
                  whileHover={{ y: -4, scale: 1.01 }}
                  transition={{ duration: 0.2 }}
                  className="glass-card p-5 rounded-2xl flex items-start gap-4 border border-subtle-borders/80 hover:border-fluorescent-lime/50 hover:shadow-[0_0_20px_rgba(198,255,61,0.12)] transition-colors group cursor-default"
                >
                  <div className="p-2.5 bg-secondary-background rounded-xl border border-subtle-borders text-fluorescent-lime group-hover:scale-110 group-hover:border-fluorescent-lime/40 transition-all">
                    <item.icon size={20} />
                  </div>
                  <p className="text-sm text-secondary-text leading-relaxed group-hover:text-soft-white transition-colors">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Timeline Section */}
          <motion.div variants={itemVariants}>
            <h2 className="text-2xl font-heading font-semibold text-soft-white mb-8">Technical Journey</h2>
            <div className="relative border-l border-subtle-borders ml-3 md:ml-4 space-y-10">
              
              <div className="relative pl-8 md:pl-10">
                <div className="absolute left-0 top-1.5 w-3 h-3 bg-fluorescent-lime rounded-full -translate-x-[6.5px] glow-border" />
                <span className="text-sm text-electric-green font-medium mb-1 block">2024 – Present</span>
                <h3 className="text-xl font-semibold text-soft-white mb-1">MERN Stack Development</h3>
                <h4 className="text-md text-secondary-text mb-3">Brototype, Kochi</h4>
                <p className="text-sm text-secondary-text leading-relaxed max-w-2xl">
                  Intensive full-stack web development training focusing on the MERN stack with TypeScript. Architected multi-role platforms using Clean Architecture, integrated payment gateways, implemented secure authentication, and deployed applications using Docker on AWS EC2.
                </p>
              </div>

              <div className="relative pl-8 md:pl-10">
                <div className="absolute left-0 top-1.5 w-3 h-3 bg-subtle-borders rounded-full -translate-x-[6.5px]" />
                <span className="text-sm text-secondary-text font-medium mb-1 block">2021 – 2024</span>
                <h3 className="text-xl font-semibold text-soft-white mb-1">B.Sc. Zoology</h3>
                <h4 className="text-md text-secondary-text mb-3">University of Calicut, Kerala</h4>
                <p className="text-sm text-secondary-text leading-relaxed max-w-2xl">
                  Bachelor of Science degree. Developed strong analytical skills, attention to detail, and a structured approach to problem-solving which later aided my transition into software engineering.
                </p>
              </div>

            </div>
          </motion.div>
          
        </div>
      </motion.div>
    </section>
  );
}
