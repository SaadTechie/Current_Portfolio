import { motion } from 'framer-motion';
import { SectionTitle } from '../components/SectionTitle';
import { experiences } from '../data/portfolio';
import { Briefcase } from 'lucide-react';

export const Experience = () => {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-6 md:px-12">
        <SectionTitle title="Experience" />
        <div className="max-w-4xl">
          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative pl-8 border-l border-slate-700 pb-12 last:pb-0"
            >
              <div className="absolute -left-[21px] top-0 bg-bg-dark p-2 rounded-full border border-slate-700 text-accent">
                <Briefcase size={20} />
              </div>
              <h3 className="text-2xl font-bold text-text-main">{exp.role}</h3>
              <h4 className="text-lg font-medium text-accent mb-2">{exp.company}</h4>
              <p className="text-sm text-slate-500 font-mono mb-4">{exp.period}</p>
              <p className="text-text-muted mb-4">{exp.description}</p>
              <div className="flex flex-wrap gap-2">
                {exp.tech.map((t) => (
                  <span key={t} className="text-xs font-mono text-slate-400 bg-slate-800 px-2 py-1 rounded">
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};