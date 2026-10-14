import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, ShieldCheck, Cpu, Code, Copy, Check } from 'lucide-react';

export default function DeveloperTerminal() {
  const [activeTab, setActiveTab] = useState<'system' | 'architecture' | 'status'>('system');
  const [copied, setCopied] = useState(false);

  // Auto-switch tabs every 8 seconds if user hasn't clicked
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTab((current) => {
        if (current === 'system') return 'architecture';
        if (current === 'architecture') return 'status';
        return 'system';
      });
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const systemCode = `// developer-profile.ts
import { FullStackDeveloper } from '@engineering/core';

export const engineer: FullStackDeveloper = {
  name: "Hasna Hasan",
  title: "Full-Stack Software Engineer",
  focus: ["Clean Architecture", "Scalable APIs", "Intuitive UX"],
  coreStack: {
    frontend: ["React.js", "TypeScript", "Tailwind CSS", "Redux Toolkit"],
    backend:  ["Node.js", "Express.js", "NestJS", "REST", "Socket.IO"],
    database: ["MongoDB", "PostgreSQL", "Redis"],
    devops:   ["Docker", "AWS EC2", "Nginx", "CI/CD"]
  },
  status: "Open to opportunities & collaborations"
};`;

  const architectureCode = `// system-architecture.json
{
  "pattern": "Clean Architecture & SOLID",
  "modules": {
    "auth": "JWT + Google OAuth + OTP with Redis caching",
    "realtime": "WebSockets (Socket.IO) bidirectional events",
    "payment": "Stripe & Razorpay webhook reconciliation",
    "deployment": "Docker containerized services on AWS EC2"
  },
  "uptime": "99.98%",
  "testCoverage": "Unit & Integration validated"
}`;

  const statusCode = `$ ./deploy-check.sh --profile hasna-hasan
[✓] Core API Gateway: ONLINE (HTTP 200 OK)
[✓] PostgreSQL & MongoDB Clusters: CONNECTED
[✓] Redis Session Store: 0.8ms latency
[✓] WebSocket Server: READY FOR REAL-TIME EVENTS
[✓] Clean Architecture Layers: DECOUPLED & VERIFIED
==================================================
Ready for full-stack impact. Let's build together!`;

  const getCurrentText = () => {
    if (activeTab === 'system') return systemCode;
    if (activeTab === 'architecture') return architectureCode;
    return statusCode;
  };

  return (
    <div className="w-full glass-card rounded-2xl overflow-hidden border border-subtle-borders/90 shadow-2xl relative group">
      {/* Top Ambient glow */}
      <div className="absolute top-0 right-1/4 w-40 h-40 bg-fluorescent-lime/10 rounded-full blur-[70px] pointer-events-none" />

      {/* Terminal Title Bar */}
      <div className="bg-secondary-background/90 px-4 py-3 border-b border-subtle-borders flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5 mr-2">
            <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
          </div>
          
          <div className="flex items-center gap-1">
            <button
              onClick={() => setActiveTab('system')}
              className={`flex items-center gap-1.5 text-xs font-mono px-2.5 py-1 rounded-md transition-colors ${
                activeTab === 'system'
                  ? 'bg-card-background text-fluorescent-lime border border-fluorescent-lime/30'
                  : 'text-secondary-text hover:text-soft-white'
              }`}
            >
              <Code size={13} />
              <span>profile.ts</span>
            </button>
            <button
              onClick={() => setActiveTab('architecture')}
              className={`flex items-center gap-1.5 text-xs font-mono px-2.5 py-1 rounded-md transition-colors ${
                activeTab === 'architecture'
                  ? 'bg-card-background text-fluorescent-lime border border-fluorescent-lime/30'
                  : 'text-secondary-text hover:text-soft-white'
              }`}
            >
              <Cpu size={13} />
              <span>architecture.json</span>
            </button>
            <button
              onClick={() => setActiveTab('status')}
              className={`flex items-center gap-1.5 text-xs font-mono px-2.5 py-1 rounded-md transition-colors ${
                activeTab === 'status'
                  ? 'bg-card-background text-fluorescent-lime border border-fluorescent-lime/30'
                  : 'text-secondary-text hover:text-soft-white'
              }`}
            >
              <Terminal size={13} />
              <span>status.sh</span>
            </button>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <span className="hidden sm:flex items-center gap-1.5 text-[11px] font-mono text-emerald-400 bg-emerald-950/40 px-2 py-0.5 rounded border border-emerald-500/20">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            LIVE
          </span>
          <button
            onClick={() => handleCopy(getCurrentText())}
            className="text-secondary-text hover:text-fluorescent-lime transition-colors p-1"
            title="Copy code"
          >
            {copied ? <Check size={14} className="text-fluorescent-lime" /> : <Copy size={14} />}
          </button>
        </div>
      </div>

      {/* Code Editor Content */}
      <div className="p-4 md:p-5 font-mono text-xs md:text-sm bg-background/90 overflow-x-auto min-h-[220px] max-h-[300px]">
        <AnimatePresence mode="wait">
          {activeTab === 'system' && (
            <motion.div
              key="system"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.2 }}
              className="leading-relaxed whitespace-pre font-mono text-secondary-text selection:bg-fluorescent-lime selection:text-background"
            >
              <div><span className="text-secondary-text/60">// developer-profile.ts</span></div>
              <div><span className="text-purple-400">import</span> &#123; <span className="text-electric-green">FullStackDeveloper</span> &#125; <span className="text-purple-400">from</span> <span className="text-amber-300">'@engineering/core'</span>;</div>
              <div className="mt-2"><span className="text-purple-400">export const</span> <span className="text-blue-400">engineer</span>: <span className="text-electric-green">FullStackDeveloper</span> = &#123;</div>
              <div className="pl-4">name: <span className="text-fluorescent-lime font-semibold">"Hasna Hasan"</span>,</div>
              <div className="pl-4">title: <span className="text-amber-300">"Full-Stack Software Engineer"</span>,</div>
              <div className="pl-4">focus: [<span className="text-amber-300">"Clean Architecture"</span>, <span className="text-amber-300">"Scalable APIs"</span>, <span className="text-amber-300">"Intuitive UX"</span>],</div>
              <div className="pl-4">coreStack: &#123;</div>
              <div className="pl-8">frontend: [<span className="text-cyan-400">"React.js"</span>, <span className="text-cyan-400">"TypeScript"</span>, <span className="text-cyan-400">"Tailwind"</span>],</div>
              <div className="pl-8">backend:  [<span className="text-emerald-400">"Node.js"</span>, <span className="text-emerald-400">"Express"</span>, <span className="text-emerald-400">"NestJS"</span>, <span className="text-emerald-400">"Socket.IO"</span>],</div>
              <div className="pl-8">database: [<span className="text-amber-400">"MongoDB"</span>, <span className="text-amber-400">"PostgreSQL"</span>, <span className="text-amber-400">"Redis"</span>],</div>
              <div className="pl-8">devops:   [<span className="text-blue-400">"Docker"</span>, <span className="text-blue-400">"AWS EC2"</span>, <span className="text-blue-400">"Nginx"</span>]</div>
              <div className="pl-4">&#125;,</div>
              <div className="pl-4">status: <span className="text-fluorescent-lime">"Ready to create impactful solutions"</span></div>
              <div>&#125;;</div>
            </motion.div>
          )}

          {activeTab === 'architecture' && (
            <motion.div
              key="architecture"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.2 }}
              className="leading-relaxed whitespace-pre font-mono text-secondary-text"
            >
              <div><span className="text-secondary-text/60">// system-architecture.json</span></div>
              <div>&#123;</div>
              <div className="pl-4"><span className="text-cyan-400">"paradigm"</span>: <span className="text-fluorescent-lime">"Clean Architecture & SOLID"</span>,</div>
              <div className="pl-4"><span className="text-cyan-400">"modules"</span>: &#123;</div>
              <div className="pl-8"><span className="text-purple-300">"auth"</span>: <span className="text-amber-300">"JWT, Google OAuth, OTP with Redis"</span>,</div>
              <div className="pl-8"><span className="text-purple-300">"realtime"</span>: <span className="text-amber-300">"Socket.IO bidirectional event sync"</span>,</div>
              <div className="pl-8"><span className="text-purple-300">"payment"</span>: <span className="text-amber-300">"Stripe & Razorpay integrated workflows"</span>,</div>
              <div className="pl-8"><span className="text-purple-300">"devops"</span>: <span className="text-amber-300">"Docker containerized services on AWS EC2"</span></div>
              <div className="pl-4">&#125;,</div>
              <div className="pl-4"><span className="text-cyan-400">"reliability"</span>: <span className="text-emerald-400">"99.9% fault-tolerant API design"</span></div>
              <div>&#125;</div>
            </motion.div>
          )}

          {activeTab === 'status' && (
            <motion.div
              key="status"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.2 }}
              className="leading-relaxed whitespace-pre font-mono text-emerald-400/90"
            >
              <div className="text-secondary-text">$ ./healthcheck.sh --service all</div>
              <div className="mt-1 flex items-center gap-2"><span className="text-fluorescent-lime">✓</span> [API Gateway] Express & NestJS active (200 OK)</div>
              <div className="flex items-center gap-2"><span className="text-fluorescent-lime">✓</span> [Databases] MongoDB & PostgreSQL connected</div>
              <div className="flex items-center gap-2"><span className="text-fluorescent-lime">✓</span> [Caching] Redis memory store operational</div>
              <div className="flex items-center gap-2"><span className="text-fluorescent-lime">✓</span> [Real-time] WebSockets channel listening</div>
              <div className="flex items-center gap-2"><span className="text-fluorescent-lime">✓</span> [Container] Docker deployment running on AWS EC2</div>
              <div className="text-secondary-text/60 mt-2">--------------------------------------------------</div>
              <div className="text-fluorescent-lime font-semibold">Ready for full-stack impact. Let's build together!</div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Blinking cursor */}
        <div className="mt-3 flex items-center gap-1 text-fluorescent-lime text-xs">
          <span>&gt;</span>
          <motion.span
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 0.9, repeat: Infinity, ease: "linear" }}
            className="w-2 h-4 bg-fluorescent-lime inline-block"
          />
        </div>
      </div>

      {/* Terminal Footer Indicator */}
      <div className="bg-secondary-background/60 px-4 py-2 border-t border-subtle-borders/60 flex items-center justify-between text-[11px] text-secondary-text font-mono">
        <div className="flex items-center gap-2">
          <ShieldCheck size={13} className="text-fluorescent-lime" />
          <span>TypeScript & Clean Architecture</span>
        </div>
        <span className="text-secondary-text/70">MERN • NestJS • AWS • Docker</span>
      </div>
    </div>
  );
}
