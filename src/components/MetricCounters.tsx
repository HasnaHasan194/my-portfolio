import { useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { CheckCircle2, Zap, ShieldCheck, Cpu } from 'lucide-react';

interface MetricItem {
  icon: typeof Zap;
  target: number;
  suffix: string;
  prefix?: string;
  label: string;
  description: string;
}

const metrics: MetricItem[] = [
  {
    icon: ShieldCheck,
    target: 100,
    suffix: "%",
    label: "Type Safety & Clean Arch",
    description: "Strict TypeScript compilation and modular decoupled architecture",
  },
  {
    icon: Zap,
    target: 120,
    prefix: "< ",
    suffix: "ms",
    label: "API Execution Latency",
    description: "Optimized queries with MongoDB indexing, PostgreSQL & Redis caching",
  },
  {
    icon: Cpu,
    target: 4,
    suffix: "+",
    label: "Production Architectures",
    description: "Multi-role MERN platforms, NestJS microservices, and Dockerized setups",
  },
  {
    icon: CheckCircle2,
    target: 99.9,
    suffix: "%",
    label: "Reliability & Uptime",
    description: "Containerized deployments managed with Nginx reverse proxy on AWS EC2",
  },
];

function AnimatedNumber({ target, prefix = '', suffix = '' }: { target: number; prefix?: string; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    const duration = 1800; // ms

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // Ease out cubic
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      
      const currentVal = target % 1 === 0 
        ? Math.round(easeProgress * target) 
        : parseFloat((easeProgress * target).toFixed(1));

      setCount(currentVal);

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  }, [isInView, target]);

  return (
    <span ref={ref} className="font-heading font-bold text-4xl md:text-5xl text-fluorescent-lime">
      {prefix}{count}{suffix}
    </span>
  );
}

export default function MetricCounters() {
  return (
    <section className="py-16 md:py-24 px-6 md:px-12 max-w-7xl mx-auto relative overflow-hidden">
      {/* Background ambient decorative light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-64 bg-fluorescent-lime/5 rounded-full blur-[140px] pointer-events-none -z-10" />

      {/* Header telemetry badge */}
      <div className="flex items-center justify-between mb-10 pb-4 border-b border-subtle-borders/60">
        <div className="flex items-center gap-2 font-mono text-xs text-electric-green">
          <span className="w-2 h-2 rounded-full bg-fluorescent-lime animate-pulse" />
          <span className="uppercase tracking-widest">02 // Engineering Standards & Benchmarks</span>
        </div>
        <span className="hidden sm:inline font-mono text-xs text-secondary-text">Production Telemetry</span>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -4 }}
              className="glass-card p-6 md:p-8 rounded-2xl border border-subtle-borders/80 hover:border-fluorescent-lime/50 transition-all duration-300 relative group flex flex-col justify-between"
            >
              {/* Corner crosshairs */}
              <span className="absolute top-2 left-2 font-mono text-[10px] text-fluorescent-lime/40">+</span>
              <span className="absolute top-2 right-2 font-mono text-[10px] text-fluorescent-lime/40">+</span>

              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-10 h-10 rounded-xl bg-secondary-background flex items-center justify-center border border-subtle-borders group-hover:border-fluorescent-lime transition-colors">
                    <Icon size={20} className="text-fluorescent-lime" />
                  </div>
                  <span className="font-mono text-xs text-secondary-text/60">0{index + 1}</span>
                </div>

                <div className="mb-2">
                  <AnimatedNumber target={item.target} prefix={item.prefix} suffix={item.suffix} />
                </div>

                <h3 className="font-heading font-semibold text-lg text-soft-white mb-2 group-hover:text-fluorescent-lime transition-colors">
                  {item.label}
                </h3>
              </div>

              <p className="text-xs text-secondary-text leading-relaxed mt-3 pt-3 border-t border-subtle-borders/40">
                {item.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
