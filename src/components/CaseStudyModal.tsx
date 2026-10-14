import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, ArrowRight, Layers, Workflow, CheckCircle, Maximize2, Minimize2 } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import type { Project } from '../data/projects';
import { ArchitectureDiagram, WorkflowDiagram } from './Diagrams';

interface CaseStudyModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function CaseStudyModal({ project, isOpen, onClose }: CaseStudyModalProps) {
  const [activeTab, setActiveTab] = useState<'overview' | 'architecture' | 'workflow' | 'decisions'>('overview');
  const [isImageFullscreen, setIsImageFullscreen] = useState(false);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (isImageFullscreen) {
          setIsImageFullscreen(false);
        } else {
          onClose();
        }
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, isImageFullscreen, onClose]);

  // Reset tab when project changes
  useEffect(() => {
    setActiveTab('overview');
    setIsImageFullscreen(false);
  }, [project?.id]);

  if (!isOpen || !project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-8">
        {/* Darkened backdrop blur */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-background/85 backdrop-blur-xl"
        />

        {/* Modal Window Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 20 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-5xl max-h-[92vh] bg-secondary-background border border-subtle-borders rounded-3xl overflow-hidden shadow-[0_0_80px_rgba(0,0,0,0.95)] z-10 flex flex-col"
        >
          {/* Top Bar with Case Study HUD & Close Button */}
          <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 sm:py-4 border-b border-subtle-borders bg-background/95">
            <div className="flex items-center gap-2 sm:gap-3 min-w-0">
              <span className="w-2.5 h-2.5 rounded-full bg-fluorescent-lime animate-ping shrink-0" />
              <span className="font-mono text-[10px] sm:text-xs uppercase tracking-widest text-electric-green truncate">
                Case Study Spec // {project.category}
              </span>
            </div>

            <div className="flex items-center gap-2 sm:gap-3 shrink-0">
              <Link
                to={`/projects/${project.id}`}
                onClick={onClose}
                className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-card-background border border-subtle-borders text-xs font-mono text-soft-white hover:text-fluorescent-lime hover:border-fluorescent-lime transition-all"
              >
                <span>Open Dedicated URL</span>
                <ArrowRight size={13} />
              </Link>

              <button
                onClick={onClose}
                className="w-8 h-8 rounded-full bg-card-background border border-subtle-borders flex items-center justify-center text-secondary-text hover:text-fluorescent-lime hover:border-fluorescent-lime transition-colors cursor-pointer"
                title="Close modal (Esc)"
              >
                <X size={16} />
              </button>
            </div>
          </div>

          {/* Modal Scrollable Body */}
          <div className="overflow-y-auto flex-1 p-6 md:p-8 space-y-8">
            
            {/* CINEMATIC APERTURE OPENING ANIMATION WITH IMAGE */}
            <div className="relative w-full aspect-[16/9] md:aspect-[21/9] rounded-2xl overflow-hidden glass-card border border-subtle-borders/80 group">
              
              {/* Corner crosshair telemetry brackets */}
              <span className="absolute top-3 left-3 font-mono text-xs text-fluorescent-lime z-40 pointer-events-none">+</span>
              <span className="absolute top-3 right-3 font-mono text-xs text-fluorescent-lime z-40 pointer-events-none">+</span>
              <span className="absolute bottom-3 left-3 font-mono text-xs text-fluorescent-lime z-40 pointer-events-none">+</span>
              <span className="absolute bottom-3 right-3 font-mono text-xs text-fluorescent-lime z-40 pointer-events-none">+</span>

              {/* Shutter Left Curtain (Sliding outward to left) */}
              <motion.div
                initial={{ x: '0%' }}
                animate={{ x: '-102%' }}
                transition={{ duration: 0.85, delay: 0.1, ease: [0.76, 0, 0.24, 1] }}
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
                transition={{ duration: 0.85, delay: 0.1, ease: [0.76, 0, 0.24, 1] }}
                className="absolute inset-y-0 right-0 w-1/2 bg-background border-l border-fluorescent-lime/30 z-30 pointer-events-none"
              >
                <div className="absolute left-4 top-1/2 -translate-y-1/2 font-mono text-[10px] text-fluorescent-lime/60 -rotate-90 uppercase tracking-widest">
                  SHUTTER_R
                </div>
              </motion.div>

              {/* Specular Diagonal Light Sweep */}
              <motion.div
                initial={{ x: '-150%' }}
                animate={{ x: '250%' }}
                transition={{ duration: 1.3, delay: 0.4, ease: "easeInOut" }}
                className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-fluorescent-lime/25 to-transparent skew-x-12 pointer-events-none z-20"
              />

              {/* Scanning Laser Beam */}
              <div className="absolute inset-x-0 bottom-0 h-[2px] bg-subtle-borders/60 overflow-hidden pointer-events-none z-20">
                <motion.div
                  animate={{ x: ['-100%', '100%'] }}
                  transition={{ duration: 2.6, repeat: Infinity, ease: "linear" }}
                  className="w-1/3 h-full bg-gradient-to-r from-transparent via-fluorescent-lime to-transparent"
                />
              </div>

              {/* The Case Study Image with Cinematic Scale & Blur De-focus */}
              <motion.img
                src={project.image}
                alt={project.name}
                initial={{ scale: 1.25, filter: 'blur(14px)' }}
                animate={{ scale: 1, filter: 'blur(0px)' }}
                transition={{ duration: 0.95, ease: [0.16, 1, 0.3, 1] }}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = `https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1200&sig=${project.id}`;
                }}
              />

              {/* Gradient Bottom Shadow */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80 pointer-events-none" />

              {/* Live HUD Badge on Top Left */}
              <div className="absolute top-4 left-4 z-20 flex items-center gap-2 px-3 py-1 rounded-full bg-background/85 backdrop-blur-md border border-subtle-borders text-[11px] font-mono text-soft-white">
                <span className="w-1.5 h-1.5 rounded-full bg-fluorescent-lime animate-ping" />
                <span className="text-fluorescent-lime font-bold">SPEC VERIFIED</span>
                <span className="text-secondary-text">// ID: {project.id}</span>
              </div>

              {/* Fullscreen Zoom Toggle Button on Top Right */}
              <button
                onClick={() => setIsImageFullscreen(true)}
                className="absolute top-4 right-4 z-20 flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-background/85 backdrop-blur-md border border-subtle-borders text-xs font-mono text-soft-white hover:text-fluorescent-lime hover:border-fluorescent-lime transition-colors cursor-pointer"
                title="Expand image fullscreen"
              >
                <Maximize2 size={13} />
                <span className="hidden sm:inline">Expand</span>
              </button>
            </div>

            {/* Title & Short Summary */}
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 pb-6 border-b border-subtle-borders">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold font-heading text-soft-white mb-2">
                  {project.name}<span className="text-fluorescent-lime">.</span>
                </h2>
                <p className="text-secondary-text max-w-2xl text-base leading-relaxed">
                  {project.shortDescription}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 shrink-0">
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-fluorescent-lime text-background font-bold text-xs uppercase tracking-wider hover:bg-electric-green transition-all shadow-[0_0_15px_rgba(198,255,61,0.3)]"
                >
                  <ExternalLink size={14} />
                  <span>Live Demo</span>
                </a>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-card-background border border-subtle-borders text-soft-white text-xs font-mono hover:border-fluorescent-lime hover:text-fluorescent-lime transition-all"
                >
                  <FaGithub size={14} />
                  <span>GitHub</span>
                </a>
              </div>
            </div>

            {/* Case Study Section Tabs */}
            <div className="flex items-center gap-2 border-b border-subtle-borders/60 pb-3 overflow-x-auto scrollbar-none whitespace-nowrap">
              {[
                { id: 'overview', label: 'Overview & Problem' },
                { id: 'architecture', label: 'System Architecture' },
                { id: 'workflow', label: 'Core Workflow' },
                { id: 'decisions', label: 'Engineering Decisions' },
              ].map((tab) => {
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as any)}
                    className={`relative px-4 py-2 rounded-xl text-xs md:text-sm font-mono transition-all cursor-pointer shrink-0 ${
                      isActive
                        ? 'text-background font-bold'
                        : 'text-secondary-text hover:text-soft-white hover:bg-card-background'
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeModalTabPill"
                        className="absolute inset-0 bg-fluorescent-lime rounded-xl"
                        transition={{ type: "spring", stiffness: 350, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10">{tab.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Tab 1: Overview & Problem */}
            {activeTab === 'overview' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="glass-card p-6 rounded-2xl border border-subtle-borders">
                    <h3 className="text-xs font-mono uppercase tracking-widest text-secondary-text mb-3">
                      Problem Statement
                    </h3>
                    <p className="text-soft-white text-sm leading-relaxed">
                      {project.problemStatement}
                    </p>
                  </div>

                  <div className="glass-card p-6 rounded-2xl border border-subtle-borders border-l-4 border-l-fluorescent-lime">
                    <h3 className="text-xs font-mono uppercase tracking-widest text-secondary-text mb-3">
                      My Engineering Role
                    </h3>
                    <p className="text-soft-white text-sm leading-relaxed">
                      {project.myRole}
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-heading font-semibold text-soft-white mb-4">
                    Key Solution Features
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {project.keyFeatures.map((feat, idx) => (
                      <div key={idx} className="p-4 rounded-xl bg-card-background border border-subtle-borders">
                        <div className="flex items-center gap-2 text-fluorescent-lime text-sm font-medium mb-1">
                          <CheckCircle size={14} />
                          <span>{feat.title}</span>
                        </div>
                        <p className="text-xs text-secondary-text leading-relaxed">
                          {feat.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Pills */}
                <div>
                  <h3 className="text-xs font-mono uppercase tracking-widest text-secondary-text mb-3">
                    Technology Stack
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 rounded-full bg-card-background border border-subtle-borders text-xs font-mono text-soft-white"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {/* Tab 2: System Architecture */}
            {activeTab === 'architecture' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="space-y-4"
              >
                <div className="flex items-center gap-2 text-xs font-mono text-electric-green mb-2">
                  <Layers size={14} className="text-fluorescent-lime" />
                  <span>Decoupled Microservice / Clean Architecture Diagram</span>
                </div>
                <ArchitectureDiagram projectId={project.id} />
              </motion.div>
            )}

            {/* Tab 3: Workflow */}
            {activeTab === 'workflow' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="space-y-4"
              >
                <div className="flex items-center gap-2 text-xs font-mono text-electric-green mb-2">
                  <Workflow size={14} className="text-fluorescent-lime" />
                  <span>End-To-End Core Execution Pipeline</span>
                </div>
                <WorkflowDiagram steps={project.workflowSteps} />
              </motion.div>
            )}

            {/* Tab 4: Engineering Decisions */}
            {activeTab === 'decisions' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
              >
                <div className="p-6 rounded-2xl bg-card-background border border-subtle-borders">
                  <h3 className="text-sm font-heading font-semibold text-soft-white mb-3">
                    Architectural Decisions
                  </h3>
                  <p className="text-xs md:text-sm text-secondary-text leading-relaxed">
                    {project.engineeringDecisions}
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-card-background border border-subtle-borders">
                  <h3 className="text-sm font-heading font-semibold text-soft-white mb-3">
                    Challenges & Solutions
                  </h3>
                  <p className="text-xs md:text-sm text-secondary-text leading-relaxed">
                    {project.technicalChallenges}
                  </p>
                </div>
              </motion.div>
            )}
          </div>

          {/* Modal Footer */}
          <div className="p-4 px-6 bg-background/95 border-t border-subtle-borders flex items-center justify-between text-xs font-mono text-secondary-text">
            <span>PRESS ESC OR CLICK OUTSIDE TO CLOSE</span>
            <Link
              to={`/projects/${project.id}`}
              onClick={onClose}
              className="text-fluorescent-lime hover:underline flex items-center gap-1.5"
            >
              <span>View Full Case Study Page</span>
              <ArrowRight size={13} />
            </Link>
          </div>
        </motion.div>

        {/* Fullscreen Image Lightbox */}
        <AnimatePresence>
          {isImageFullscreen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-60 bg-background/95 backdrop-blur-2xl flex flex-col p-4 md:p-8"
            >
              <div className="flex items-center justify-between pb-4 border-b border-subtle-borders mb-4 text-xs font-mono text-soft-white">
                <span className="text-fluorescent-lime font-bold">FULLSCREEN VIEW // {project.name}</span>
                <button
                  onClick={() => setIsImageFullscreen(false)}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-card-background border border-subtle-borders hover:border-fluorescent-lime transition-colors cursor-pointer"
                >
                  <Minimize2 size={14} />
                  <span>Exit Fullscreen</span>
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
      </div>
    </AnimatePresence>
  );
}
