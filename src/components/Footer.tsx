import { Mail } from 'lucide-react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="border-t border-subtle-borders bg-secondary-background py-10 sm:py-12 mt-16 sm:mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <Link to="/" className="text-xl font-heading font-bold mb-2">
            Hasna Hasan<span className="text-fluorescent-lime">.</span>
          </Link>
          <p className="text-secondary-text text-sm max-w-sm">
            Building digital experiences that solve real problems.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
          <a href="https://github.com/HasnaHasan194" target="_blank" rel="noopener noreferrer" className="p-2 sm:p-2.5 bg-background border border-subtle-borders rounded-full text-secondary-text hover:text-fluorescent-lime hover:border-fluorescent-lime transition-all">
            <FaGithub size={18} />
          </a>
          <a href="https://www.linkedin.com/in/hasna-hasan-6b3951330/" target="_blank" rel="noopener noreferrer" className="p-2 sm:p-2.5 bg-background border border-subtle-borders rounded-full text-secondary-text hover:text-fluorescent-lime hover:border-fluorescent-lime transition-all">
            <FaLinkedin size={18} />
          </a>
          <a href="https://www.instagram.com/hasna._hasan/" target="_blank" rel="noopener noreferrer" className="p-2 sm:p-2.5 bg-background border border-subtle-borders rounded-full text-secondary-text hover:text-fluorescent-lime hover:border-fluorescent-lime transition-all">
            <FaInstagram size={18} />
          </a>
          <a href="mailto:hasnahasnahasan194@gmail.com" className="p-2 sm:p-2.5 bg-background border border-subtle-borders rounded-full text-secondary-text hover:text-fluorescent-lime hover:border-fluorescent-lime transition-all">
            <Mail size={18} />
          </a>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 mt-8 pt-8 border-t border-subtle-borders flex flex-col sm:flex-row justify-between items-center text-xs text-secondary-text gap-4 sm:gap-0 text-center sm:text-left">
        <p>&copy; {currentYear} Hasna Hasan. All rights reserved.</p>
        <div className="flex flex-wrap justify-center gap-4">
          <a href="#about" className="hover:text-fluorescent-lime transition-colors">About</a>
          <a href="#skills" className="hover:text-fluorescent-lime transition-colors">Skills</a>
          <a href="#projects" className="hover:text-fluorescent-lime transition-colors">Projects</a>
          <a href="#contact" className="hover:text-fluorescent-lime transition-colors">Contact</a>
        </div>
      </div>
    </footer>
  );
}
