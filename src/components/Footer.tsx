// src/components/Footer.tsx
import { Github, Linkedin, Mail } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-bg-dark border-t border-slate-800 py-8">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-text-muted text-sm">
          © {new Date().getFullYear()} Benaboudi Saad. Tous droits réservés.
        </p>
        
        <div className="flex items-center gap-4 text-text-muted">
          <a href="https://github.com/SaadTechie" target="_blank" rel="noreferrer" className="hover:text-accent transition-colors">
            <Github size={20} />
          </a>
          <a href="https://www.linkedin.com/in/saad-benaboudi-5b96252b9/" target="_blank" rel="noreferrer" className="hover:text-accent transition-colors">
            <Linkedin size={20} />
          </a>
          <a href="mailto:benaboudisaad.pro@gmail.com" className="hover:text-accent transition-colors">
            <Mail size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};