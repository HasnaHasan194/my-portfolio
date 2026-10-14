import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ExternalLink, ChevronLeft, ChevronRight, Layers, Workflow, Maximize2, Minimize2 } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { projectsData } from '../data/projects';
import { ArchitectureDiagram, WorkflowDiagram } from '../components/Diagrams';

export default function ProjectDetails() {
  const { id } = useParams<{ id: string }>();
  
  const currentIndex = projectsData.findIndex(p => p.id === id);
  const project = projectsData[currentIndex];
  
  const prevProject = currentIndex > 0 ? projectsData[currentIndex - 1] : null;
  const nextProject = currentIndex < projectsData.length - 1 ? projectsData[currentIndex + 1] : null;

  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isFullscreen) {
        setIsFullscreen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isFullscreen]);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center pt-20 px-6 text-center">
        <h1 className="text-4xl font-bold font-heading mb-4 text-soft-white">Project Not Found</h1>
        <p className="text-secondary-text mb-8">The project you are looking for doesn't exist or has been removed.</p>
        <Link to="/" className="flex items-center gap-2 px-6 py-3 bg-fluorescent-lime text-background font-medium rounded-lg">
          <ArrowLeft size={18} /> Back to Portfolio
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-8 pb-16 md:pt-12 md:pb-24 px-6 md:px-12 max-w-5xl mx-auto min-h-screen">
      {/* Top Navigation Bar */}
      <div className="flex items-center justify-between pb-8 mb-8 border-b border-subtle-borders">
        <Link to="/" className="text-2xl font-heading font-bold tracking-tighter group flex items-center">
          <span className="text-soft-white group-hover:text-fluorescent-lime transition-colors">H</span>
          <span className="text-fluorescent-lime group-hover:text-soft-white transition-colors">H</span>
          <span className="text-electric-green text-3xl leading-none">.</span>
        </Link>
        
        <Link 
          to="/#projects" 
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary-background border border-subtle-borders text-soft-white hover:text-fluorescent-lime hover:border-fluorescent-lime transition-all text-sm font-medium"
        >
          <ArrowLeft size={16} /> Back to Portfolio
        </Link>
      </div>
      
      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="mb-14"
      >
        <div className="flex items-center gap-2 font-mono text-xs text-electric-green mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-fluorescent-lime animate-pulse" />
          <span className="uppercase tracking-widest">Case Study // {project.category}</span>
        </div>

        {/* Masked Title Reveal */}
        <div className="overflow-hidden mb-6">
          <motion.h1 
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-soft-white"
          >
            {project.name}<span className="text-fluorescent-lime">.</span>
          </motion.h1>
        </div>

        <p className="text-lg md:text-xl text-secondary-text max-w-3xl mb-8 leading-relaxed">
          {project.shortDescription}
        </p>

        {/* Quick Spec Pills */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 max-w-2xl mb-8 font-mono text-xs">
          <div className="p-3 rounded-xl bg-secondary-background/80 border border-subtle-borders">
            <span className="text-secondary-text block text-[10px] uppercase">Pattern</span>
            <span className="text-fluorescent-lime font-medium">Clean & Decoupled</span>
          </div>
          <div className="p-3 rounded-xl bg-secondary-background/80 border border-subtle-borders">
            <span className="text-secondary-text block text-[10px] uppercase">Infrastructure</span>
            <span className="text-soft-white font-medium">Docker / AWS EC2</span>
          </div>
          <div className="p-3 rounded-xl bg-secondary-background/80 border border-subtle-borders col-span-2 sm:col-span-1">
            <span className="text-secondary-text block text-[10px] uppercase">Status</span>
            <span className="text-electric-green font-medium">Production Verified</span>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-2 mb-10">
          {project.technologies.map((tech, i) => (
            <motion.span 
              key={i} 
              whileHover={{ y: -2, scale: 1.05 }}
              className="px-3 py-1 bg-secondary-background border border-subtle-borders rounded-full text-xs font-mono font-medium text-soft-white hover:border-fluorescent-lime transition-colors"
            >
              {tech}
            </motion.span>
          ))}
        </div>
        
        <div className="flex flex-wrap items-center gap-4">
          <a 
            href={project.liveDemo} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-fluorescent-lime text-background font-bold rounded-xl hover:bg-electric-green transition-all shadow-[0_0_15px_rgba(198,255,61,0.25)] hover:shadow-[0_0_25px_rgba(124,255,107,0.5)]"
          >
            <ExternalLink size={18} /> Live Demo
          </a>
          <a 
            href={project.github} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-secondary-background border border-subtle-borders text-soft-white font-medium rounded-xl hover:border-fluorescent-lime hover:text-fluorescent-lime transition-all"
          >
            <FaGithub size={18} /> GitHub Repository
          </a>
        </div>
      </motion.div>
      
      {/* Cinematic Case Study Hero Visual with Opening Aperture Shutters & Light Sweep */}
      <div className="w-full aspect-[16/9] md:aspect-[21/9] rounded-3xl overflow-hidden glass-card mb-20 relative group shadow-[0_0_60px_rgba(0,0,0,0.85)] border border-subtle-borders/80 hover:border-fluorescent-lime/40 transition-colors">
        {/* Architectural Framing Crosshairs */}
        <span className="absolute top-3 left-3 font-mono text-xs text-fluorescent-lime z-40 pointer-events-none">+</span>
        <span className="absolute top-3 right-3 font-mono text-xs text-fluorescent-lime z-40 pointer-events-none">+</span>
        <span className="absolute bottom-3 left-3 font-mono text-xs text-fluorescent-lime z-40 pointer-events-none">+</span>
        <span className="absolute bottom-3 right-3 font-mono text-xs text-fluorescent-lime z-40 pointer-events-none">+</span>

        {/* Shutter Left Curtain (Sliding outward to left) */}
        <motion.div
          initial={{ x: '0%' }}
          animate={{ x: '-102%' }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.76, 0, 0.24, 1] }}
          className="absolute inset-y-0 left-0 w-1/2 bg-background border-r border-fluorescent-lime/30 z-30 pointer-events-none"
        >
          <div className="absolute right-4 top-1/2 -translate-y-1/2 font-mono text-[10px] text-fluorescent-lime/60 rotate-90 uppercase tracking-widest">
            SHUTTER_L
          </div>
        </motion.div>

        {/* Shutter Right Curtain (Sliding outward to right) */}
        <motion.div
          initial={{ x: '0%' }}
          animate={{ x: '102%' }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.76, 0, 0.24, 1] }}
          className="absolute inset-y-0 right-0 w-1/2 bg-background border-l border-fluorescent-lime/30 z-30 pointer-events-none"
        >
          <div className="absolute left-4 top-1/2 -translate-y-1/2 font-mono text-[10px] text-fluorescent-lime/60 -rotate-90 uppercase tracking-widest">
            SHUTTER_R
          </div>
        </motion.div>

        {/* Opening Diagonal Light Beam Sweep */}
        <motion.div
          initial={{ x: '-150%' }}
          animate={{ x: '250%' }}
          transition={{ duration: 1.4, delay: 0.35, ease: "easeInOut" }}
          className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-fluorescent-lime/25 to-transparent skew-x-12 pointer-events-none z-20"
        />

        {/* Live Case Study Telemetry HUD Badge */}
        <div className="absolute top-5 left-5 z-20 flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-background/85 backdrop-blur-md border border-subtle-borders text-xs font-mono text-soft-white">
          <span className="w-2 h-2 rounded-full bg-fluorescent-lime animate-ping" />
          <span className="text-fluorescent-lime font-bold tracking-wider">CASE STUDY // SPEC LIVE</span>
          <span className="text-secondary-text hidden sm:inline">// ID: {project.id}</span>
        </div>

        {/* Fullscreen Expand Button */}
        <button
          onClick={() => setIsFullscreen(true)}
          className="absolute top-5 right-5 z-20 flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-background/85 backdrop-blur-md border border-subtle-borders text-xs font-mono text-soft-white hover:text-fluorescent-lime hover:border-fluorescent-lime transition-all cursor-pointer"
          title="Click to view fullscreen"
        >
          <Maximize2 size={13} />
          <span className="hidden sm:inline">Fullscreen</span>
        </button>

        {/* Project Image with Aperture Zoom-in & De-focus */}
        <motion.img 
          initial={{ scale: 1.25, filter: 'blur(14px)' }}
          animate={{ scale: 1, filter: 'blur(0px)' }}
          transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
          src={project.image} 
          alt={`${project.name} preview`} 
          onClick={() => setIsFullscreen(true)}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 cursor-pointer"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = `https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1200&sig=${project.id}`;
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-70 pointer-events-none" />

        {/* Bottom Scanning Laser Line */}
        <div className="absolute inset-x-0 bottom-0 h-[2px] bg-subtle-borders/60 overflow-hidden pointer-events-none z-20">
          <motion.div
            animate={{ x: ['-100%', '100%'] }}
            transition={{ duration: 2.8, repeat: Infinity, ease: "linear" }}
            className="w-1/3 h-full bg-gradient-to-r from-transparent via-fluorescent-lime to-transparent"
          />
        </div>
      </div>

      {/* Fullscreen Lightbox Theater Modal */}
      <AnimatePresence>
        {isFullscreen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-background/95 backdrop-blur-2xl flex flex-col p-4 md:p-8"
          >
            <div className="flex items-center justify-between pb-4 border-b border-subtle-borders mb-4 text-xs font-mono text-soft-white">
              <span className="text-fluorescent-lime font-bold">THEATER LIGHTBOX // {project.name}</span>
              <button
                onClick={() => setIsFullscreen(false)}
                className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-secondary-background border border-subtle-borders hover:border-fluorescent-lime transition-colors cursor-pointer text-soft-white"
              >
                <Minimize2 size={14} />
                <span>Exit (Esc)</span>
              </button>
            </div>

            <div className="flex-1 flex items-center justify-center overflow-hidden relative rounded-2xl border border-subtle-borders">
              <img
                src={project.image}
                alt={project.name}
                className="max-h-full max-w-full object-contain rounded-xl"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = `https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1600&sig=${project.id}`;
                }}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Content Sections */}
      <div className="space-y-20">
        
        <section>
          <h2 className="text-2xl font-heading font-semibold text-soft-white mb-6 flex items-center gap-3 border-b border-subtle-borders pb-4">
            Project Overview
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-sm uppercase tracking-widest text-secondary-text mb-3">The Problem</h3>
              <p className="text-soft-white leading-relaxed bg-secondary-background p-6 rounded-xl border border-subtle-borders">
                {project.problemStatement}
              </p>
            </div>
            <div>
              <h3 className="text-sm uppercase tracking-widest text-secondary-text mb-3">My Role</h3>
              <p className="text-soft-white leading-relaxed bg-secondary-background p-6 rounded-xl border border-subtle-borders border-l-4 border-l-fluorescent-lime">
                {project.myRole}
              </p>
            </div>
          </div>
        </section>
        
        <section>
          <h2 className="text-2xl font-heading font-semibold text-soft-white mb-6 flex items-center gap-3 border-b border-subtle-borders pb-4">
            Key Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {project.keyFeatures.map((feature, idx) => (
              <div key={idx} className="glass-card p-6 rounded-xl">
                <h4 className="text-fluorescent-lime font-medium mb-2">{feature.title}</h4>
                <p className="text-sm text-secondary-text leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-heading font-semibold text-soft-white mb-6 flex items-center gap-3 border-b border-subtle-borders pb-4">
            <Layers className="text-fluorescent-lime" /> System Architecture
          </h2>
          <ArchitectureDiagram projectId={project.id} />
        </section>

        <section>
          <h2 className="text-2xl font-heading font-semibold text-soft-white mb-6 flex items-center gap-3 border-b border-subtle-borders pb-4">
            <Workflow className="text-fluorescent-lime" /> Core Workflow
          </h2>
          <WorkflowDiagram steps={project.workflowSteps} />
        </section>
        
        <section>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-heading font-semibold text-soft-white mb-6 border-b border-subtle-borders pb-4">
                Engineering Decisions
              </h2>
              <p className="text-secondary-text leading-relaxed">
                {project.engineeringDecisions}
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-heading font-semibold text-soft-white mb-6 border-b border-subtle-borders pb-4">
                Challenges & Solutions
              </h2>
              <p className="text-secondary-text leading-relaxed">
                {project.technicalChallenges}
              </p>
            </div>
          </div>
        </section>
        
        <section className="bg-secondary-background border border-subtle-borders p-8 rounded-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-fluorescent-lime/5 rounded-full blur-[50px] pointer-events-none" />
          <h2 className="text-2xl font-heading font-semibold text-soft-white mb-4">
            What I Learned
          </h2>
          <p className="text-secondary-text leading-relaxed text-lg max-w-3xl">
            {project.learnings}
          </p>
        </section>
        
      </div>
      
      {/* Navigation */}
      <div className="mt-24 pt-8 border-t border-subtle-borders flex flex-col sm:flex-row items-center justify-between gap-6">
        {prevProject ? (
          <Link 
            to={`/projects/${prevProject.id}`}
            className="flex items-center gap-3 group text-left w-full sm:w-auto"
          >
            <div className="p-3 bg-secondary-background rounded-full border border-subtle-borders group-hover:border-fluorescent-lime group-hover:text-fluorescent-lime transition-colors">
              <ChevronLeft size={20} />
            </div>
            <div>
              <span className="text-xs uppercase tracking-widest text-secondary-text block mb-1">Previous Project</span>
              <span className="text-soft-white font-medium group-hover:text-fluorescent-lime transition-colors">{prevProject.name}</span>
            </div>
          </Link>
        ) : <div />}
        
        {nextProject ? (
          <Link 
            to={`/projects/${nextProject.id}`}
            className="flex items-center gap-3 group text-right w-full sm:w-auto justify-end"
          >
            <div>
              <span className="text-xs uppercase tracking-widest text-secondary-text block mb-1">Next Project</span>
              <span className="text-soft-white font-medium group-hover:text-fluorescent-lime transition-colors">{nextProject.name}</span>
            </div>
            <div className="p-3 bg-secondary-background rounded-full border border-subtle-borders group-hover:border-fluorescent-lime group-hover:text-fluorescent-lime transition-colors">
              <ChevronRight size={20} />
            </div>
          </Link>
        ) : <div />}
      </div>
    </div>
  );
}
