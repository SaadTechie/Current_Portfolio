import { motion } from 'framer-motion';
import { Github } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  image:string;
  tech: string[];
  github: string;
  index: number;
}

export const ProjectCard = ({ title, description,image, tech, github, index }: ProjectCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1 }}
    className="bg-bg-card rounded-xl overflow-hidden border border-slate-700/50 hover:border-accent/50 transition-all hover:-translate-y-1"
  >
    {/* Espace pour une image future */}
    <div className="h-48 bg-slate-800 flex items-center justify-center border-b border-slate-700/50">
      <img 
        src={image} 
        alt={`Capture d'écran du projet ${title}`} 
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
      />
    </div>
    
    <div className="p-6">
      <h3 className="text-2xl font-bold text-text-main mb-2">{title}</h3>
      <p className="text-text-muted mb-6 line-clamp-3">{description}</p>
      
      <div className="flex flex-wrap gap-2 mb-6">
        {tech.map((t) => (
          <span key={t} className="text-xs font-mono text-accent bg-accent/10 px-2 py-1 rounded">
            {t}
          </span>
        ))}
      </div>
      
      <div className="flex items-center gap-4">
        <a href={github} target="_blank" rel="noreferrer" className="text-text-muted hover:text-accent transition-colors flex items-center gap-2">
          <Github size={20} /> Code
        </a>
      </div>
    </div>
  </motion.div>
);