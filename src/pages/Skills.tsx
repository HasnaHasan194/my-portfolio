import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: "Frontend",
    skills: ["HTML", "CSS", "JavaScript", "TypeScript", "React.js", "Tailwind CSS", "Bootstrap"]
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express.js", "NestJS", "REST APIs", "Socket.IO", "Data Structures"]
  },
  {
    title: "Databases & Caching",
    skills: ["MongoDB", "Mongoose", "PostgreSQL", "MySQL", "Redis"]
  },
  {
    title: "Auth & Security",
    skills: ["JWT", "Google OAuth", "OTP Authentication", "Token-based Auth"]
  },
  {
    title: "State & Data Fetching",
    skills: ["Redux Toolkit", "React Query"]
  },
  {
    title: "DevOps & Infrastructure",
    skills: ["Docker", "AWS EC2", "Nginx", "Git", "GitHub", "GitHub Actions (CI/CD)", "Vercel", "Render"]
  },
  {
    title: "Payments & Integrations",
    skills: ["Stripe", "Razorpay", "Spoonacular API", "WebSockets"]
  },
  {
    title: "Concepts & Tools",
    skills: ["MVC Architecture", "Clean Architecture", "SOLID Principles", "Postman", "Figma"]
  }
];

interface SkillsProps {
  isSection?: boolean;
}

export default function Skills({ isSection = false }: SkillsProps) {
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
      id="skills"
      className={isSection ? "py-20 md:py-28 px-6 md:px-12 max-w-7xl mx-auto scroll-mt-12 border-t border-subtle-borders/40 relative" : "pt-28 pb-16 md:pt-40 md:pb-24 px-6 md:px-12 max-w-7xl mx-auto min-h-screen relative"}
    >
      <div className="flex items-center gap-3 mb-6">
        <div className="w-2 h-2 rounded-full bg-fluorescent-lime animate-pulse" />
        <span className="text-xs font-semibold text-electric-green uppercase tracking-widest">Capabilities & Technologies</span>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-16 md:mb-24 text-center md:text-left"
      >
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-6">
          Technical <span className="text-fluorescent-lime glow-text">Arsenal.</span>
        </h1>
        <p className="text-lg text-secondary-text max-w-2xl mx-auto md:mx-0">
          A comprehensive overview of the technologies, tools, and principles I use to build scalable full-stack applications.
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
      >
        {skillCategories.map((category, idx) => (
          <motion.div 
            key={idx} 
            variants={itemVariants}
            className="glass-card p-6 rounded-2xl border-t-2 border-t-transparent hover:border-t-fluorescent-lime transition-all duration-300 group"
          >
            <h3 className="text-lg font-heading font-semibold text-soft-white mb-6 flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-fluorescent-lime group-hover:animate-ping" />
              {category.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, i) => (
                <motion.span 
                  key={i}
                  whileHover={{ y: -2, scale: 1.06 }}
                  transition={{ duration: 0.15 }}
                  className="px-3 py-1.5 bg-background border border-subtle-borders rounded-lg text-xs font-mono font-medium text-secondary-text hover:text-fluorescent-lime hover:border-fluorescent-lime/50 transition-colors cursor-default"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
      
      {/* Decorative Grid Background */}
      <div className="absolute inset-0 z-[-2] opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(#C6FF3D 1px, transparent 1px), linear-gradient(90deg, #C6FF3D 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>
    </section>
  );
}
