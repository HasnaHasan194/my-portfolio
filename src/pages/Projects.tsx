import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ExternalLink, ArrowRight, ArrowUpRight } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { projectsData, type Project } from '../data/projects';
import CaseStudyModal from '../components/CaseStudyModal';

interface ProjectsProps {
  isSection?: boolean;
  activeModalProjectId?: string | null;
  onClearActiveModalProject?: () => void;
}

export default function Projects({ 
  isSection = false, 
  activeModalProjectId = null,
  onClearActiveModalProject 
}: ProjectsProps) {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [modalProject, setModalProject] = useState<Project | null>(null);

  // Sync external modal requests (e.g. from EngineeringReel)
  useEffect(() => {
    if (activeModalProjectId) {
      const found = projectsData.find(p => p.id === activeModalProjectId);
      if (found) {
        setModalProject(found);
      }
    }
  }, [activeModalProjectId]);

  const handleCloseModal = () => {
    setModalProject(null);
    if (onClearActiveModalProject) {
      onClearActiveModalProject();
    }
  };

  const filterTabs = [
    { id: 'all', label: 'All Projects', count: projectsData.length },
    { id: 'mern', label: 'MERN & Real-Time', count: 2 },
    { id: 'ecommerce', label: 'E-Commerce & Stripe', count: 2 },
    { id: 'api', label: 'NestJS & PostgreSQL', count: 2 },
  ];

  const filteredProjects = projectsData.filter((project) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'mern') {
      return project.technologies.includes('Socket.IO') || project.technologies.includes('MERN') || project.id === 'carevoyage';
    }
    if (activeFilter === 'ecommerce') {
      return project.technologies.includes('Stripe') || project.technologies.includes('Razorpay') || project.id === 'readhaven';
    }
    if (activeFilter === 'api') {
      return project.technologies.includes('NestJS') || project.technologies.includes('PostgreSQL');
    }
    return true;
  });

  return (
    <section 
      id="projects"
      className={isSection ? "py-20 md:py-28 px-6 md:px-12 max-w-7xl mx-auto scroll-mt-12 border-t border-subtle-borders/40 relative overflow-hidden" : "pt-28 pb-16 md:pt-40 md:pb-24 px-6 md:px-12 max-w-7xl mx-auto min-h-screen relative overflow-hidden"}
    >
      {/* Background ambient decorative light */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-fluorescent-lime/5 rounded-full blur-[140px] pointer-events-none -z-10" />

      {/* Header Badge */}
      <div className="flex items-center gap-3 mb-6">
        <div className="w-2 h-2 rounded-full bg-fluorescent-lime animate-pulse" />
        <span className="text-xs font-mono font-semibold text-electric-green uppercase tracking-widest">
          04 // Featured Portfolio Works
        </span>
      </div>

      {/* Header Title with Pheeqoh Mask Reveal */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 md:mb-16">
        <div>
          <div className="overflow-hidden mb-4">
            <motion.h1 
              initial={{ y: '100%' }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading"
            >
              Selected <span className="text-fluorescent-lime glow-text">Works.</span>
            </motion.h1>
          </div>
          <p className="text-base md:text-lg text-secondary-text max-w-2xl leading-relaxed">
            A showcase of full-stack applications, scalable systems, and interactive experiences engineered with Clean Architecture and modern technologies.
          </p>
        </div>

        {/* Live Metrics Pill */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 bg-secondary-background/80 border border-subtle-borders rounded-2xl px-5 py-3 backdrop-blur-sm self-start md:self-auto"
        >
          <div className="flex flex-col">
            <span className="text-xs font-mono text-secondary-text uppercase">Production Apps</span>
            <span className="text-lg font-bold font-heading text-fluorescent-lime">4 Architectures</span>
          </div>
          <div className="w-[1px] h-8 bg-subtle-borders" />
          <div className="flex flex-col">
            <span className="text-xs font-mono text-secondary-text uppercase">Deployments</span>
            <span className="text-lg font-bold font-heading text-electric-green">AWS EC2 & Vercel</span>
          </div>
        </motion.div>
      </div>

      {/* Interactive Category Filter Tabs with Animated Sliding Pill */}
      <div className="flex flex-wrap items-center gap-2 mb-14 border-b border-subtle-borders/60 pb-6">
        {filterTabs.map((tab) => {
          const isActive = activeFilter === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id)}
              className={`relative px-4 py-2 rounded-xl text-xs md:text-sm font-mono transition-all duration-300 flex items-center gap-2 cursor-pointer ${
                isActive
                  ? 'text-background font-bold'
                  : 'text-secondary-text hover:text-soft-white hover:bg-secondary-background/60'
              }`}
            >
              {isActive && (
                <motion.div
                  layoutId="activeProjectFilterPill"
                  className="absolute inset-0 bg-fluorescent-lime rounded-xl shadow-[0_0_15px_rgba(198,255,61,0.4)]"
                  transition={{ type: "spring", stiffness: 350, damping: 30 }}
                />
              )}
              <span className="relative z-10">{tab.label}</span>
              <span className={`relative z-10 text-[10px] px-1.5 py-0.5 rounded-full ${
                isActive ? 'bg-background/20 text-background' : 'bg-secondary-background text-secondary-text'
              }`}>
                {tab.count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Projects Grid with Staggered Interactive Cards */}
      <motion.div
        layout
        className="grid grid-cols-1 gap-14 md:gap-24"
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, index) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              index={index} 
              onOpenModal={(p) => setModalProject(p)}
            />
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Cinematic Case Study Modal with Aperture Image Opening Animation */}
      <CaseStudyModal
        project={modalProject}
        isOpen={!!modalProject}
        onClose={handleCloseModal}
      />
    </section>
  );
}

// Interactive Project Card with Mouse Spotlight, 3D Tilt & Micro-animations
function ProjectCard({ 
  project, 
  index, 
  onOpenModal 
}: { 
  project: Project; 
  index: number;
  onOpenModal: (project: Project) => void;
}) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const isReversed = index % 2 !== 0;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative flex flex-col ${isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 lg:gap-14 items-center group glass-card p-6 md:p-8 rounded-3xl border border-subtle-borders/80 hover:border-fluorescent-lime/40 transition-colors duration-500 overflow-hidden`}
    >
      {/* Luxury Interactive Mouse Spotlight Glow */}
      <div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-0"
        style={{
          background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(198, 255, 61, 0.08), transparent 70%)`,
        }}
      />

      {/* Giant Luxury Watermark Number in Background */}
      <div className="absolute right-6 bottom-4 md:right-10 md:bottom-6 text-7xl md:text-9xl font-mono font-black text-white/[0.03] select-none pointer-events-none group-hover:text-fluorescent-lime/[0.06] group-hover:translate-x-2 transition-all duration-700">
        0{index + 1}
      </div>

      {/* Left/Right: Interactive Project Image Showcase (Clicking opens Cinematic Case Study) */}
      <div className="w-full lg:w-1/2 relative z-10">
        <div 
          onClick={() => onOpenModal(project)}
          className="relative aspect-[16/10] rounded-2xl overflow-hidden glass-card group-hover:shadow-[0_0_35px_rgba(198,255,61,0.25)] transition-all duration-700 block cursor-pointer"
        >
          {/* Architectural Framing Crosshairs */}
          <span className="absolute top-2.5 left-2.5 font-mono text-xs text-fluorescent-lime/70 z-30 pointer-events-none">+</span>
          <span className="absolute top-2.5 right-2.5 font-mono text-xs text-fluorescent-lime/70 z-30 pointer-events-none">+</span>
          <span className="absolute bottom-2.5 left-2.5 font-mono text-xs text-fluorescent-lime/70 z-30 pointer-events-none">+</span>
          <span className="absolute bottom-2.5 right-2.5 font-mono text-xs text-fluorescent-lime/70 z-30 pointer-events-none">+</span>

          {/* Live Status Badge */}
          <div className="absolute top-4 left-4 z-20 flex items-center gap-2 px-3 py-1 rounded-full bg-background/85 backdrop-blur-md border border-subtle-borders text-[11px] font-mono text-soft-white group-hover:border-fluorescent-lime/40 transition-colors">
            <span className="w-1.5 h-1.5 rounded-full bg-fluorescent-lime animate-ping" />
            <span className="text-fluorescent-lime font-bold">LIVE PROJECT</span>
          </div>

          {/* Image with smooth zoom and subtle brightness transition */}
          <img 
            src={project.image} 
            alt={project.name} 
            className="w-full h-full object-cover group-hover:scale-105 group-hover:brightness-105 transition-all duration-700"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = `https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800&sig=${project.id}`;
            }}
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-70 group-hover:opacity-40 transition-opacity duration-500 z-10" />

          {/* Animated Hover Floating Action Pill in Center of Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: isHovered ? 1 : 0, scale: isHovered ? 1 : 0.85 }}
            transition={{ duration: 0.25 }}
            className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none"
          >
            <div className="px-5 py-2.5 rounded-full bg-fluorescent-lime text-background font-bold text-xs uppercase tracking-wider flex items-center gap-2 shadow-[0_0_25px_rgba(198,255,61,0.6)]">
              <span>Inspect Case Study</span>
              <ArrowUpRight size={15} />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Right/Left: Project Information & Animated Action Group */}
      <div className="w-full lg:w-1/2 flex flex-col items-start z-10">
        
        {/* Category & Index Header */}
        <div className="flex items-center gap-3 mb-3 font-mono text-xs">
          <span className="px-2 py-0.5 rounded bg-fluorescent-lime/10 text-fluorescent-lime border border-fluorescent-lime/30 font-bold">
            0{index + 1}
          </span>
          <span className="text-subtle-borders">/</span>
          <span className="text-electric-green uppercase tracking-wider font-medium">
            {project.category}
          </span>
        </div>

        {/* Project Title with Interactive Hover Glow */}
        <h2 
          onClick={() => onOpenModal(project)}
          className="text-3xl md:text-4xl font-bold font-heading mb-4 text-soft-white group-hover:text-fluorescent-lime transition-colors duration-300 cursor-pointer"
        >
          <span className="hover:underline decoration-fluorescent-lime/40 underline-offset-8">
            {project.name}
          </span>
        </h2>

        {/* Short Description */}
        <p className="text-secondary-text mb-6 leading-relaxed text-base md:text-lg">
          {project.shortDescription}
        </p>

        {/* Technology Pills with Micro-Animations */}
        <div className="flex flex-wrap gap-2 mb-8">
          {project.technologies.slice(0, 6).map((tech, i) => (
            <motion.span 
              key={i}
              whileHover={{ y: -2, scale: 1.05 }}
              transition={{ duration: 0.15 }}
              className="px-3 py-1 bg-secondary-background border border-subtle-borders rounded-full text-xs font-mono font-medium text-soft-white/90 hover:border-fluorescent-lime hover:text-fluorescent-lime transition-colors cursor-default"
            >
              {tech}
            </motion.span>
          ))}
          {project.technologies.length > 6 && (
            <span className="px-3 py-1 bg-secondary-background/60 border border-subtle-borders/60 rounded-full text-xs font-mono text-secondary-text">
              +{project.technologies.length - 6} more
            </span>
          )}
        </div>

        {/* Action Buttons with Dynamic Hover Effects */}
        <div className="flex flex-wrap items-center gap-3 sm:gap-4 mt-auto w-full pt-4 border-t border-subtle-borders/40">
          <button 
            onClick={() => onOpenModal(project)}
            className="group/btn flex items-center gap-2 px-5 sm:px-6 py-3 bg-fluorescent-lime text-background font-bold text-sm rounded-xl hover:bg-electric-green transition-all shadow-[0_0_15px_rgba(198,255,61,0.25)] hover:shadow-[0_0_25px_rgba(124,255,107,0.5)] cursor-pointer"
          >
            <span>View Details</span>
            <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform duration-200" />
          </button>

          <Link
            to={`/projects/${project.id}`}
            className="flex items-center gap-1.5 px-3 py-3 bg-secondary-background/80 border border-subtle-borders text-secondary-text hover:text-fluorescent-lime hover:border-fluorescent-lime rounded-xl text-xs font-mono transition-all"
            title="Open dedicated case study page"
          >
            <span>Full Page</span>
            <ArrowUpRight size={14} />
          </Link>

          <a 
            href={project.liveDemo} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-3 bg-secondary-background border border-subtle-borders text-soft-white font-medium text-sm rounded-xl hover:border-fluorescent-lime hover:text-fluorescent-lime transition-all"
          >
            <ExternalLink size={16} />
            <span>Demo</span>
          </a>

          <a 
            href={project.github} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-3 bg-secondary-background border border-subtle-borders text-soft-white font-medium text-sm rounded-xl hover:border-fluorescent-lime hover:text-fluorescent-lime transition-all"
          >
            <FaGithub size={16} />
            <span>Code</span>
          </a>
        </div>
      </div>
    </motion.div>
  );
}
