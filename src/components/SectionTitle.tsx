import { motion } from 'framer-motion';

export const SectionTitle = ({ title, subtitle }: { title: string, subtitle?: string }) => (
  <div className="mb-12">
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      className="text-3xl md:text-4xl font-bold text-text-main flex items-center gap-4"
    >
      <span className="text-accent text-2xl font-mono">#</span> {title}
    </motion.h2>
    {subtitle && <p className="text-text-muted mt-2 mt-4">{subtitle}</p>}
  </div>
);