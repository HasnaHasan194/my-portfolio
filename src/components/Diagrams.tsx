import { Database, Server, Layout, Globe, Lock, CreditCard, RefreshCw } from 'lucide-react';

interface DiagramProps {
  projectId: string;
}

export function ArchitectureDiagram({ projectId }: DiagramProps) {
  if (projectId === 'carevoyage') {
    return (
      <div className="w-full bg-secondary-background border border-subtle-borders rounded-2xl p-4 md:p-8 overflow-x-auto relative">
        <div className="text-[10px] font-mono text-secondary-text mb-2 sm:hidden flex items-center justify-end gap-1">
          <span>← Swipe to explore architecture →</span>
        </div>
        <div className="min-w-[700px] flex flex-col gap-10 py-6 items-center">
          {/* Frontend Layer */}
          <div className="flex gap-8 items-center z-10 w-full justify-center">
             <div className="glass-card p-4 rounded-xl border border-fluorescent-lime/30 flex flex-col items-center min-w-[140px]">
               <Globe className="text-fluorescent-lime mb-2" />
               <span className="text-sm font-semibold">User App</span>
               <span className="text-xs text-secondary-text">React</span>
             </div>
             <div className="glass-card p-4 rounded-xl border border-fluorescent-lime/30 flex flex-col items-center min-w-[140px]">
               <Layout className="text-fluorescent-lime mb-2" />
               <span className="text-sm font-semibold">Agency/Admin Panel</span>
               <span className="text-xs text-secondary-text">React</span>
             </div>
          </div>
          
          {/* Connecting lines */}
          <div className="h-10 border-l-2 border-dashed border-subtle-borders relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-secondary-background px-2 text-xs text-secondary-text">REST API / Socket.IO</div>
          </div>

          {/* Backend Layer */}
          <div className="flex gap-4 z-10 w-full justify-center">
            <div className="glass-card p-6 rounded-xl border border-blue-500/30 flex flex-col items-center w-[400px] relative">
              <div className="absolute -top-3 left-4 bg-background px-2 text-xs font-semibold text-blue-400">AWS EC2 + Nginx + Docker</div>
              <Server className="text-blue-400 mb-2" />
              <span className="text-md font-semibold mb-1">Express.js API Gateway</span>
              <div className="flex flex-wrap justify-center gap-2 mt-3">
                <span className="text-[10px] px-2 py-1 bg-background rounded">Auth Module (JWT/OAuth)</span>
                <span className="text-[10px] px-2 py-1 bg-background rounded">Booking Module</span>
                <span className="text-[10px] px-2 py-1 bg-background rounded">Caretaker Module</span>
                <span className="text-[10px] px-2 py-1 bg-background rounded">Admin Module</span>
              </div>
            </div>
            
            <div className="flex flex-col gap-4">
              <div className="glass-card p-3 rounded-xl border border-purple-500/30 flex items-center gap-3">
                <CreditCard className="text-purple-400" size={16} />
                <span className="text-xs">Stripe</span>
              </div>
              <div className="glass-card p-3 rounded-xl border border-yellow-500/30 flex items-center gap-3">
                <RefreshCw className="text-yellow-400" size={16} />
                <span className="text-xs">Socket.IO (Real-time)</span>
              </div>
            </div>
          </div>

          <div className="h-10 border-l-2 border-dashed border-subtle-borders relative">
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-secondary-background px-2 text-xs text-secondary-text">Mongoose ORM / Redis Cache</div>
          </div>

          {/* Database Layer */}
          <div className="flex gap-8 items-center z-10 w-full justify-center">
             <div className="glass-card p-4 rounded-xl border border-green-500/30 flex flex-col items-center min-w-[140px]">
               <Database className="text-green-500 mb-2" />
               <span className="text-sm font-semibold">MongoDB</span>
               <span className="text-xs text-secondary-text">Main DB</span>
             </div>
             <div className="glass-card p-4 rounded-xl border border-red-500/30 flex flex-col items-center min-w-[140px]">
               <Database className="text-red-500 mb-2" />
               <span className="text-sm font-semibold">Redis</span>
               <span className="text-xs text-secondary-text">OTP / Cache</span>
             </div>
          </div>
        </div>
      </div>
    );
  }

  if (projectId === 'readhaven') {
    return (
      <div className="w-full bg-secondary-background border border-subtle-borders rounded-2xl p-4 md:p-8 overflow-x-auto relative">
        <div className="text-[10px] font-mono text-secondary-text mb-2 sm:hidden flex items-center justify-end gap-1">
          <span>← Swipe to explore architecture →</span>
        </div>
        <div className="min-w-[600px] flex flex-col gap-10 py-6 items-center">
          <div className="flex gap-8 items-center z-10 w-full justify-center">
             <div className="glass-card p-4 rounded-xl border border-fluorescent-lime/30 flex flex-col items-center min-w-[140px] relative">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-background px-2 text-xs font-semibold text-fluorescent-lime">Vercel</div>
               <Layout className="text-fluorescent-lime mb-2" />
               <span className="text-sm font-semibold">Customer / Admin UI</span>
               <span className="text-xs text-secondary-text">React.js</span>
             </div>
          </div>
          
          <div className="h-10 border-l-2 border-dashed border-subtle-borders relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-secondary-background px-2 text-xs text-secondary-text">REST APIs</div>
          </div>

          <div className="flex gap-4 z-10 w-full justify-center items-center">
            <div className="glass-card p-4 rounded-xl border border-purple-500/30 flex items-center gap-3">
                <Lock className="text-purple-400" size={16} />
                <span className="text-xs">Google OAuth / JWT</span>
            </div>
            
            <div className="glass-card p-6 rounded-xl border border-blue-500/30 flex flex-col items-center w-[300px] relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-background px-2 text-xs font-semibold text-blue-400">AWS EC2 + Nginx</div>
              <Server className="text-blue-400 mb-2" />
              <span className="text-md font-semibold mb-1">Node/Express Backend</span>
              <span className="text-xs text-secondary-text text-center">MVC Architecture</span>
            </div>
            
            <div className="glass-card p-4 rounded-xl border border-blue-500/30 flex items-center gap-3">
                <CreditCard className="text-blue-400" size={16} />
                <span className="text-xs">Razorpay API</span>
            </div>
          </div>

          <div className="h-10 border-l-2 border-dashed border-subtle-borders relative" />

          <div className="flex gap-8 items-center z-10 w-full justify-center">
             <div className="glass-card p-4 rounded-xl border border-green-500/30 flex flex-col items-center min-w-[140px]">
               <Database className="text-green-500 mb-2" />
               <span className="text-sm font-semibold">MongoDB</span>
               <span className="text-xs text-secondary-text">Products, Orders, Users</span>
             </div>
          </div>
        </div>
      </div>
    );
  }

  // Simplified fallback for others
  return (
    <div className="w-full bg-secondary-background border border-subtle-borders rounded-2xl p-4 md:p-8 flex items-center justify-center min-h-[300px]">
      <div className="flex flex-col items-center gap-6">
        <div className="glass-card p-4 rounded-xl border border-fluorescent-lime/30 flex items-center gap-3">
          <Globe className="text-fluorescent-lime" />
          <span className="font-semibold">React Frontend</span>
        </div>
        <div className="h-8 border-l-2 border-dashed border-subtle-borders" />
        <div className="glass-card p-4 rounded-xl border border-blue-500/30 flex items-center gap-3">
          <Server className="text-blue-400" />
          <span className="font-semibold">Backend API</span>
        </div>
        <div className="h-8 border-l-2 border-dashed border-subtle-borders" />
        <div className="glass-card p-4 rounded-xl border border-green-500/30 flex items-center gap-3">
          <Database className="text-green-500" />
          <span className="font-semibold">Database</span>
        </div>
      </div>
    </div>
  );
}

export function WorkflowDiagram({ steps }: { steps: string[] }) {
  return (
    <div className="w-full bg-secondary-background border border-subtle-borders rounded-2xl p-4 sm:p-6 md:p-10 overflow-x-auto">
      <div className="text-[10px] font-mono text-secondary-text mb-2 sm:hidden flex items-center justify-end gap-1">
        <span>← Swipe to explore pipeline →</span>
      </div>
      <div className="min-w-[600px] flex items-center justify-between relative py-4">
        {/* Connecting line behind */}
        <div className="absolute top-1/2 left-0 right-0 h-1 bg-subtle-borders -translate-y-1/2 z-0" />
        
        {steps.map((step, index) => (
          <div key={index} className="flex flex-col items-center relative z-10 w-32">
            <div className="w-10 h-10 rounded-full bg-background border-2 border-fluorescent-lime flex items-center justify-center text-fluorescent-lime font-bold mb-3 shadow-[0_0_10px_rgba(198,255,61,0.2)]">
              {index + 1}
            </div>
            <span className="text-xs text-center text-soft-white font-medium">{step}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
