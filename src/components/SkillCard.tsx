import { motion } from 'framer-motion';

interface SkillCardProps {
  category: string;
  items: string[];
  index: number;
}

export const SkillCard = ({ category, items, index }: SkillCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1 }}
    className="bg-bg-card p-6 rounded-xl border border-slate-700/50 hover:border-accent/50 transition-colors"
  >
    <h3 className="text-xl font-semibold text-text-main mb-4">{category}</h3>
    <ul className="flex flex-wrap gap-2">
      {items.map((item) => (
        <li key={item} className="bg-bg-dark px-3 py-1 rounded-md text-sm text-accent font-medium">
          {item}
        </li>
      ))}
    </ul>
  </motion.div>
);