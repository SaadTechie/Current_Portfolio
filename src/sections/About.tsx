import { motion } from 'framer-motion';
import { SectionTitle } from '../components/SectionTitle';
import { personalInfo } from '../data/portfolio';

export const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-6 md:px-12">
        <SectionTitle title="Profile" />
        <div className="max-w-3xl">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-lg text-text-muted leading-relaxed"
          >
            {personalInfo.about}
          </motion.p>
        </div>
      </div>
    </section>
  );
};