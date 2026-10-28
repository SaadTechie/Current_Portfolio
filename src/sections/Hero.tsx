// src/sections/Hero.tsx
import { motion } from 'framer-motion';
import { Github, Linkedin, ArrowRight, Download } from 'lucide-react';
import profilImg from '../assets/images/Saad_profile.png';

export const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
  };

  return (
    <section 
      id="hero" 
      className="min-h-screen flex items-center pt-20 pb-10"
    >
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-3xl lg:max-w-none order-2 lg:order-1 text-center lg:text-left"
        >
          <motion.p variants={itemVariants} className="text-accent font-mono mb-4 text-sm md:text-base">
            Bonjour, je suis
          </motion.p>
          
          <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-bold mb-4 text-text-main tracking-tight leading-tight">
            Benaboudi Saad.
          </motion.h1>
          
          <motion.h2 variants={itemVariants} className="text-3xl md:text-5xl font-bold mb-6 text-text-muted tracking-tight leading-tight">
            Data Science & AI Engineer • Generative AI
          </motion.h2>
          
          <motion.p variants={itemVariants} className="text-base md:text-lg text-text-muted mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
            Final-year Computer Engineering student (graduating 2027) with hands-on experience in data preparation, machine learning, deep learning, and generative AI. I work on RAG systems, REST APIs, and Dockerized AI applications with a strong interest in Data Science and intelligent software solutions.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-wrap gap-4 justify-center lg:justify-start">
            <a 
              href="#projects" 
              className="flex items-center gap-2 bg-accent hover:bg-accent-hover text-bg-dark font-semibold py-3 px-6 rounded-lg transition-colors group"
            >
              Voir mes projets <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
            
            <a 
              href="/Cv_BENABOUDI_SAAD_AI.pdf"
              download="Saad Benaboudi"
              className="flex items-center gap-2 bg-bg-card hover:bg-slate-700 text-text-main font-medium py-3 px-6 rounded-lg border border-slate-700 transition-colors"
            >
              <Download size={20} /> Télécharger mon CV
            </a>

            <div className="flex items-center gap-4 ml-0 md:ml-4 mt-4 md:mt-0">
              <a 
                href="https://github.com/SaadTechie" 
                target="_blank" 
                rel="noreferrer"
                className="text-text-muted hover:text-accent transition-colors"
                aria-label="GitHub"
              >
                <Github size={24} />
              </a>
              
              <a 
                href="https://www.linkedin.com/in/saad-benaboudi-5b96252b9/" 
                target="_blank" 
                rel="noreferrer"
                className="text-text-muted hover:text-accent transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
            </div>
          </motion.div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="order-1 lg:order-2 flex justify-center lg:justify-end"
        >
          <div className="relative group">
            <div className="absolute -inset-4 rounded-full bg-accent/10 blur-2xl group-hover:bg-accent/20 transition-colors duration-500"></div>
            
            <img 
              src={profilImg} 
              alt="Photo de profil" 
              className="relative z-10 w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 object-cover object-top rounded-full border-4 border-accent shadow-2xl shadow-accent/20 group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
};