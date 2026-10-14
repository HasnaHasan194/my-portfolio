import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Copy, Check, Send } from 'lucide-react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

interface ContactProps {
  isSection?: boolean;
}

export default function Contact({ isSection = false }: ContactProps) {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const email = "hasnahasnahasan194@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/^\S+@\S+\.\S+$/.test(formData.email)) newErrors.email = "Invalid email format";
    if (!formData.message.trim()) newErrors.message = "Message is required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Since there's no backend, fallback to mailto
    const subject = encodeURIComponent(formData.subject || `New message from ${formData.name}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section 
      id="contact"
      className={isSection ? "py-20 md:py-28 px-6 md:px-12 max-w-7xl mx-auto scroll-mt-12 border-t border-subtle-borders/40 relative" : "pt-28 pb-16 md:pt-40 md:pb-24 px-6 md:px-12 max-w-7xl mx-auto min-h-screen"}
    >
      <div className="flex items-center gap-3 mb-6">
        <div className="w-2 h-2 rounded-full bg-fluorescent-lime animate-pulse" />
        <span className="text-xs font-semibold text-electric-green uppercase tracking-widest">Get In Touch & Collaborate</span>
      </div>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-16"
      >
        {/* Left Side: Contact Info */}
        <motion.div variants={itemVariants} className="flex flex-col gap-10">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold font-heading mb-6 leading-tight">
              Have a Project or <span className="text-fluorescent-lime glow-text block">Opportunity in Mind?</span>
            </h1>
            <p className="text-lg text-secondary-text leading-relaxed">
              I'm open to discussing full-stack development opportunities, interesting projects, and collaborations. Let's connect.
            </p>
          </div>

          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-4 p-6 glass-card rounded-2xl group">
              <div className="p-4 bg-secondary-background rounded-full text-fluorescent-lime border border-subtle-borders group-hover:border-fluorescent-lime transition-colors">
                <Mail size={24} />
              </div>
              <div className="flex-grow">
                <span className="text-sm uppercase tracking-widest text-secondary-text block mb-1">Email</span>
                <a href={`mailto:${email}`} className="text-soft-white font-medium text-lg hover:text-fluorescent-lime transition-colors">
                  {email}
                </a>
              </div>
              <button 
                onClick={handleCopyEmail}
                className="p-2 text-secondary-text hover:text-soft-white transition-colors ml-auto"
                title="Copy Email"
              >
                {copied ? <Check size={20} className="text-fluorescent-lime" /> : <Copy size={20} />}
              </button>
            </div>

            <div className="flex items-center gap-4 p-6 glass-card rounded-2xl group">
              <div className="p-4 bg-secondary-background rounded-full text-fluorescent-lime border border-subtle-borders group-hover:border-fluorescent-lime transition-colors">
                <Phone size={24} />
              </div>
              <div>
                <span className="text-sm uppercase tracking-widest text-secondary-text block mb-1">Phone</span>
                <a href="tel:+919207478990" className="text-soft-white font-medium text-lg hover:text-fluorescent-lime transition-colors">
                  +91 92074 78990
                </a>
              </div>
            </div>
          </div>

          <div>
            <span className="text-sm uppercase tracking-widest text-secondary-text block mb-4">Social Profiles</span>
            <div className="flex gap-4">
              <a href="https://www.linkedin.com/in/hasna-hasan-6b3951330/" target="_blank" rel="noopener noreferrer" className="p-4 glass-card rounded-xl text-secondary-text hover:text-fluorescent-lime hover:border-fluorescent-lime transition-all">
                <FaLinkedin size={24} />
              </a>
              <a href="https://github.com/HasnaHasan194" target="_blank" rel="noopener noreferrer" className="p-4 glass-card rounded-xl text-secondary-text hover:text-fluorescent-lime hover:border-fluorescent-lime transition-all">
                <FaGithub size={24} />
              </a>
              <a href="https://www.instagram.com/hasna._hasan/" target="_blank" rel="noopener noreferrer" className="p-4 glass-card rounded-xl text-secondary-text hover:text-fluorescent-lime hover:border-fluorescent-lime transition-all">
                <FaInstagram size={24} />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Right Side: Contact Form */}
        <motion.div variants={itemVariants}>
          <form onSubmit={handleSubmit} className="glass-card p-8 md:p-10 rounded-3xl flex flex-col gap-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-fluorescent-lime/5 rounded-full blur-[80px] pointer-events-none" />
            
            <h3 className="text-2xl font-heading font-semibold text-soft-white mb-2">Send a Message</h3>
            
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-sm font-medium text-secondary-text">Your Name</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                value={formData.name} 
                onChange={handleInputChange} 
                className={`bg-background border ${errors.name ? 'border-red-500' : 'border-subtle-borders'} rounded-xl p-4 text-soft-white focus:outline-none focus:border-fluorescent-lime transition-colors`}
                placeholder="John Doe"
              />
              {errors.name && <span className="text-xs text-red-500">{errors.name}</span>}
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-sm font-medium text-secondary-text">Email Address</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                value={formData.email} 
                onChange={handleInputChange} 
                className={`bg-background border ${errors.email ? 'border-red-500' : 'border-subtle-borders'} rounded-xl p-4 text-soft-white focus:outline-none focus:border-fluorescent-lime transition-colors`}
                placeholder="john@example.com"
              />
              {errors.email && <span className="text-xs text-red-500">{errors.email}</span>}
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="subject" className="text-sm font-medium text-secondary-text">Subject (Optional)</label>
              <input 
                type="text" 
                id="subject" 
                name="subject" 
                value={formData.subject} 
                onChange={handleInputChange} 
                className="bg-background border border-subtle-borders rounded-xl p-4 text-soft-white focus:outline-none focus:border-fluorescent-lime transition-colors"
                placeholder="Job Opportunity"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-sm font-medium text-secondary-text">Message</label>
              <textarea 
                id="message" 
                name="message" 
                value={formData.message} 
                onChange={handleInputChange} 
                rows={5}
                className={`bg-background border ${errors.message ? 'border-red-500' : 'border-subtle-borders'} rounded-xl p-4 text-soft-white focus:outline-none focus:border-fluorescent-lime transition-colors resize-none`}
                placeholder="Hello Hasna, I'd like to discuss..."
              />
              {errors.message && <span className="text-xs text-red-500">{errors.message}</span>}
            </div>

            <button 
              type="submit" 
              className="mt-4 flex items-center justify-center gap-2 w-full py-4 bg-fluorescent-lime text-background font-bold rounded-xl hover:bg-electric-green transition-all shadow-[0_0_15px_rgba(198,255,61,0.2)] hover:shadow-[0_0_25px_rgba(124,255,107,0.4)]"
            >
              Let's Connect <Send size={18} />
            </button>
            
            <p className="text-xs text-center text-secondary-text mt-2">
              Since this portfolio has no active backend, submitting will open your default email client.
            </p>
          </form>
        </motion.div>
      </motion.div>
    </section>
  );
}
