import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Pause, ExternalLink, ArrowRight, Activity, Terminal } from 'lucide-react';
import { projectsData } from '../data/projects';

interface EngineeringReelProps {
  onOpenCaseStudy: (projectId: string) => void;
}

export default function EngineeringReel({ onOpenCaseStudy }: EngineeringReelProps) {
  const [isPlaying, setIsPlaying] = useState(true);
  const [activeChannelIndex, setActiveChannelIndex] = useState(0);
  const [scrubProgress, setScrubProgress] = useState(15);
  const [liveEvents, setLiveEvents] = useState<string[]>([]);

  const activeProject = projectsData[activeChannelIndex] || projectsData[0];

  const channels = [
    {
      id: 'carevoyage',
      label: 'CareVoyage',
      tag: 'Real-Time WebSockets & Healthcare',
      metric: '14ms PTT Latency',
      events: [
        '[SOCKET_IO] Client handshake established: usr_8921a',
        '[WEBSOCKET] Room #care_4091 subscribed (2 peers)',
        '[DISPATCH] Live caretaker telemetry broadcasted',
        '[REDIS] OTP cache validated in 4ms',
        '[PAYMENT] Stripe hold initiated for package_77'
      ]
    },
    {
      id: 'readhaven',
      label: 'ReadHaven',
      tag: 'Multi-Vendor E-Commerce & Stripe',
      metric: '99.98% Idempotency',
      events: [
        '[STRIPE_API] PaymentIntent confirmed: pi_3M190xK',
        '[WEBHOOK] charge.succeeded verified with HMAC-SHA256',
        '[INVENTORY] Locked 2 units for SKU_BK_9921',
        '[EMAIL] Invoice PDF generated via Nodemailer',
        '[ORDER] Transitioned status: PENDING -> DISPATCHED'
      ]
    },
    {
      id: 'taskpilot',
      label: 'TaskPilot',
      tag: 'NestJS RBAC & Event-Driven Tasks',
      metric: '100% Type-Safe',
      events: [
        '[AUTH_GUARD] Bearer JWT verified for admin_dev',
        '[RBAC_POLICY] Permission granted: TASKS_MUTATE_BULK',
        '[POSTGRES] Executed query in 8ms: SELECT * FROM tasks',
        '[AUDIT_LOG] Event logged with correlation_id #9924',
        '[EVENT_BUS] TaskAssignedEvent published to worker'
      ]
    },
    {
      id: 'snapgram',
      label: 'SnapGram',
      tag: 'Real-Time Social Media & Cloudinary',
      metric: 'Sub-second CDN',
      events: [
        '[CLOUDINARY] Image uploaded & optimized: 1.2MB -> 180KB',
        '[SOCKET_IO] PostLikeEvent emitted to followers (1.4k)',
        '[CACHE] Feed pagination cached with Redis TTL 60s',
        '[DB_SYNC] Incremented like_count with atomic operator',
        '[PUSH] Client notification sent via Web Push API'
      ]
    }
  ];

  const currentChannel = channels[activeChannelIndex];

  // Auto-advance scrubber when playing
  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setScrubProgress((prev) => {
        if (prev >= 98) {
          // Switch to next channel smoothly
          setActiveChannelIndex((c) => (c + 1) % channels.length);
          return 0;
        }
        return prev + 1.2;
      });
    }, 200);

    return () => clearInterval(interval);
  }, [isPlaying, channels.length]);

  // Feed simulated live events into telemetry box
  useEffect(() => {
    setLiveEvents(currentChannel.events.slice(0, 3));
    const eventInterval = setInterval(() => {
      const nextEvent = currentChannel.events[Math.floor(Math.random() * currentChannel.events.length)];
      setLiveEvents((prev) => [nextEvent, prev[0], prev[1]].filter(Boolean));
    }, 2400);

    return () => clearInterval(eventInterval);
  }, [activeChannelIndex]);

  return (
    <section className="py-20 md:py-28 px-6 md:px-12 max-w-7xl mx-auto relative overflow-hidden border-t border-subtle-borders/40">
      {/* Background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-fluorescent-lime/5 rounded-full blur-[160px] pointer-events-none -z-10" />

      {/* Adam Kiser Inspired Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <div className="flex items-center gap-3 mb-3">
            <span className="w-2 h-2 rounded-full bg-fluorescent-lime animate-pulse" />
            <span className="text-xs font-mono font-semibold text-electric-green uppercase tracking-widest">
              Interactive Systems Showcase
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-soft-white tracking-tight">
            Engineering <span className="text-fluorescent-lime">Showreel.</span>
          </h2>
        </div>

        <div className="flex items-center gap-3">
          <div className="px-3.5 py-1.5 rounded-full bg-secondary-background border border-subtle-borders text-xs font-mono text-secondary-text flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-fluorescent-lime animate-ping" />
            <span>LIVE SIMULATOR</span>
          </div>
          <span className="font-mono text-xs text-secondary-text hidden sm:inline">60 FPS • Interactive Engine</span>
        </div>
      </div>

      {/* Channel Switcher Tabs (Adam Kiser clean pill navigation) */}
      <div className="flex items-center gap-2 mb-8 border-b border-subtle-borders/60 pb-4 overflow-x-auto scrollbar-none whitespace-nowrap">
        {channels.map((chan, idx) => {
          const isActive = idx === activeChannelIndex;
          return (
            <button
              key={chan.id}
              onClick={() => {
                setActiveChannelIndex(idx);
                setScrubProgress(0);
              }}
              className={`relative px-4 py-2.5 rounded-xl text-xs md:text-sm font-mono transition-all flex items-center gap-2.5 cursor-pointer shrink-0 ${
                isActive
                  ? 'text-background font-bold'
                  : 'text-secondary-text hover:text-soft-white hover:bg-secondary-background/60'
              }`}
            >
              {isActive && (
                <motion.div
                  layoutId="activeReelChannelPill"
                  className="absolute inset-0 bg-fluorescent-lime rounded-xl shadow-[0_0_15px_rgba(198,255,61,0.4)]"
                  transition={{ type: "spring", stiffness: 350, damping: 30 }}
                />
              )}
              <span className="relative z-10 font-bold">0{idx + 1}</span>
              <span className="relative z-10">{chan.label}</span>
              <span className={`relative z-10 text-[10px] px-1.5 py-0.5 rounded ${
                isActive ? 'bg-background/20 text-background' : 'bg-secondary-background text-secondary-text'
              }`}>
                {chan.metric}
              </span>
            </button>
          );
        })}
      </div>

      {/* Interactive Media Viewport Frame with Adam Kiser Corner Brackets */}
      <div className="glass-card rounded-3xl border border-subtle-borders/90 overflow-hidden relative shadow-[0_0_60px_rgba(0,0,0,0.9)] group">
        {/* Architectural Framing Crosshairs */}
        <span className="absolute top-3 left-3 font-mono text-xs text-fluorescent-lime z-30 pointer-events-none">+</span>
        <span className="absolute top-3 right-3 font-mono text-xs text-fluorescent-lime z-30 pointer-events-none">+</span>
        <span className="absolute bottom-3 left-3 font-mono text-xs text-fluorescent-lime z-30 pointer-events-none">+</span>
        <span className="absolute bottom-3 right-3 font-mono text-xs text-fluorescent-lime z-30 pointer-events-none">+</span>

        {/* Top Telemetry Header Bar */}
        <div className="flex items-center justify-between px-6 py-3.5 bg-background/90 border-b border-subtle-borders text-xs font-mono text-secondary-text">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-fluorescent-lime/80 inline-block" />
            <span className="text-soft-white font-medium ml-2">channel://{currentChannel.id}.runtime</span>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-fluorescent-lime">{currentChannel.tag}</span>
            <span className="text-subtle-borders">|</span>
            <span className="text-soft-white">{Math.floor(scrubProgress)}% STREAM</span>
          </div>
        </div>

        {/* Viewport Core Showcase with Animated Shutter and Light Sweep */}
        <div className="relative aspect-[16/9] md:aspect-[21/9] w-full overflow-hidden bg-background">
          {/* Animated Background Preview Image */}
          <AnimatePresence mode="wait">
            <motion.img
              key={activeProject.id}
              src={activeProject.image}
              alt={activeProject.name}
              initial={{ opacity: 0, scale: 1.08 }}
              animate={{ opacity: 0.55, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="w-full h-full object-cover object-center absolute inset-0"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = `https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1200&sig=${activeProject.id}`;
              }}
            />
          </AnimatePresence>

          {/* Dark Overlay Gradient for Readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-transparent to-background/90" />

          {/* Center Play/Pause Magnetic Button (Adam Kiser Reel Signature) */}
          <div className="absolute inset-0 flex flex-col items-center justify-center z-20 pointer-events-none">
            <motion.button
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsPlaying(!isPlaying)}
              className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full bg-fluorescent-lime/90 backdrop-blur-md text-background flex items-center justify-center shadow-[0_0_35px_rgba(198,255,61,0.5)] pointer-events-auto transition-transform cursor-pointer relative group/play"
              title={isPlaying ? "Pause Simulator" : "Play Simulator"}
            >
              {/* Outer pulsing ripple ring */}
              <div className="absolute -inset-2 rounded-full border-2 border-fluorescent-lime/40 animate-ping pointer-events-none" />
              
              {isPlaying ? (
                <Pause className="w-6 h-6 sm:w-8 sm:h-8 text-background fill-background" />
              ) : (
                <Play className="w-6 h-6 sm:w-8 sm:h-8 text-background fill-background ml-1" />
              )}
            </motion.button>

            <span className="text-[10px] sm:text-xs font-mono text-soft-white uppercase tracking-widest mt-3 sm:mt-4 bg-background/80 px-2.5 sm:px-3 py-1 rounded-full border border-subtle-borders text-center max-w-[90%]">
              {isPlaying ? "SIMULATION RUNNING • CLICK TO PAUSE" : "PAUSED • CLICK TO PLAY"}
            </span>
          </div>

          {/* Floating Simulated Live Event Stream HUD in Bottom Left */}
          <div className="absolute bottom-6 left-6 z-20 max-w-md hidden sm:block">
            <div className="p-3.5 rounded-2xl bg-secondary-background/85 backdrop-blur-md border border-subtle-borders text-xs font-mono space-y-1.5 shadow-2xl">
              <div className="flex items-center justify-between text-[10px] text-secondary-text pb-1 border-b border-subtle-borders/60">
                <span className="flex items-center gap-1.5 text-fluorescent-lime">
                  <Terminal size={12} />
                  <span>RUNTIME EVENT BUS</span>
                </span>
                <span>STATUS: 200 OK</span>
              </div>
              <AnimatePresence mode="popLayout">
                {liveEvents.map((evt, i) => (
                  <motion.div
                    key={evt + i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0 }}
                    className="text-soft-white/90 text-[11px] truncate"
                  >
                    <span className="text-electric-green">{'>'}</span> {evt}
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>

          {/* Audio / Frequency Spectrum Visualizer Bars in Bottom Right */}
          <div className="absolute bottom-6 right-6 z-20 hidden md:flex items-end gap-1 p-3 rounded-2xl bg-secondary-background/85 backdrop-blur-md border border-subtle-borders">
            {[12, 28, 44, 18, 36, 52, 24, 40, 16, 48, 32, 20].map((h, i) => (
              <motion.div
                key={i}
                animate={{
                  height: isPlaying ? [10, h, 8, h * 0.7, 12] : 8,
                }}
                transition={{
                  duration: 0.8 + (i % 4) * 0.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="w-1.5 rounded-full bg-fluorescent-lime/80"
                style={{ height: h }}
              />
            ))}
            <span className="font-mono text-[10px] text-secondary-text ml-2">TELEMETRY</span>
          </div>
        </div>

        {/* Bottom Interactive Playback Scrubber & Action Controls */}
        <div className="p-5 md:p-6 bg-secondary-background/95 border-t border-subtle-borders flex flex-col md:flex-row md:items-center justify-between gap-6">
          {/* Scrubber Bar */}
          <div className="flex-1">
            <div className="flex items-center justify-between text-xs font-mono text-secondary-text mb-2">
              <span className="flex items-center gap-2">
                <Activity size={14} className="text-fluorescent-lime" />
                <span className="text-soft-white font-medium">{activeProject.name}</span>
                <span>// Architecture Breakdown</span>
              </span>
              <span>00:{Math.floor(scrubProgress).toString().padStart(2, '0')} / 01:20</span>
            </div>

            {/* Interactive Timeline Bar */}
            <div 
              onClick={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const clickX = e.clientX - rect.left;
                const percentage = Math.max(0, Math.min(100, (clickX / rect.width) * 100));
                setScrubProgress(percentage);
              }}
              className="w-full h-2 rounded-full bg-card-background border border-subtle-borders relative cursor-pointer overflow-hidden group/bar"
            >
              <motion.div
                className="h-full bg-gradient-to-r from-fluorescent-lime via-electric-green to-fluorescent-lime rounded-full"
                style={{ width: `${scrubProgress}%` }}
              />
            </div>
          </div>

          {/* Action Button: Trigger Cinematic Case Study Opening Animation */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0 w-full md:w-auto">
            <button
              onClick={() => onOpenCaseStudy(activeProject.id)}
              className="flex-1 md:flex-none flex items-center justify-center gap-2 px-4 sm:px-5 py-3 rounded-xl bg-fluorescent-lime text-background font-bold text-xs uppercase tracking-wider hover:bg-electric-green transition-all shadow-[0_0_20px_rgba(198,255,61,0.35)] cursor-pointer"
            >
              <span>Inspect Case Study</span>
              <ArrowRight size={15} />
            </button>

            <a
              href={activeProject.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-3.5 sm:px-4 py-3 rounded-xl bg-card-background border border-subtle-borders text-soft-white text-xs font-medium hover:border-fluorescent-lime hover:text-fluorescent-lime transition-all"
            >
              <ExternalLink size={15} />
              <span>Demo</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
