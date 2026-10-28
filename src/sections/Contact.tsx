import { useState } from 'react';
import { motion } from 'framer-motion';
import { SectionTitle } from '../components/SectionTitle';
import { Mail, MapPin, Send, Loader2 } from 'lucide-react'; // Ajout de Loader2

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // État pour gérer le chargement (pendant l'envoi)
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Préparation des données pour Web3Forms
    const object = {
      ...formData,
      access_key: "31764e73-1725-4364-b89c-ceef072601ad" 
    };
    const json = JSON.stringify(object);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      });
      const result = await response.json();

      if (result.success) {
        alert(`Merci ${formData.name}, j'ai bien reçu votre message !`);
        setFormData({ name: '', email: '', message: '' }); // Reset
      } else {
        alert("Une erreur est survenue, veuillez réessayer.");
      }
    } catch (error) {
      alert("Impossible de contacter le serveur d'envoi.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 mb-20">
      <div className="container mx-auto px-6 md:px-12">
        <SectionTitle title="Get In Touch" subtitle="Envoyez-moi un message et je vous répondrai dès que possible." />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="bg-bg-card p-8 rounded-xl border border-slate-700/50 shadow-xl">
              <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
                {/* Champ Nom */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-text-muted mb-2">Nom complet</label>
                  <input 
                    type="text" id="name" required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-bg-dark border border-slate-700 rounded-lg px-4 py-3 text-text-main focus:outline-none focus:border-accent transition-all" 
                    placeholder="Votre nom" 
                  />
                </div>

                {/* Champ Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-text-muted mb-2">Email</label>
                  <input 
                    type="email" id="email" required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-bg-dark border border-slate-700 rounded-lg px-4 py-3 text-text-main focus:outline-none focus:border-accent transition-all" 
                    placeholder="votre@email.com" 
                  />
                </div>

                {/* Champ Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-text-muted mb-2">Message</label>
                  <textarea 
                    id="message" rows={5} required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-bg-dark border border-slate-700 rounded-lg px-4 py-3 text-text-main focus:outline-none focus:border-accent transition-all resize-none" 
                    placeholder="Comment puis-je vous aider ?"
                  ></textarea>
                </div>

                {/* Bouton d'envoi dynamique */}
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className={`bg-accent hover:bg-accent-hover text-bg-dark font-bold py-3 px-6 rounded-lg transition-all flex items-center justify-center gap-2 group ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                >
                  {isSubmitting ? (
                    <>Envoi en cours... <Loader2 size={18} className="animate-spin" /></>
                  ) : (
                    <>Envoyer le message <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /></>
                  )}
                </button>
              </form>
            </div>
          </motion.div>

          {/* Infos de contact à droite */}
          <motion.div className="flex flex-col gap-8 justify-center">
             <div className="flex items-center gap-4 group">
              <div className="w-12 h-12 bg-bg-card border border-slate-700 rounded-full flex items-center justify-center text-accent group-hover:border-accent transition-colors">
                <Mail size={24} />
              </div>
              <div>
                <h4 className="text-lg font-bold text-text-main">Email</h4>
                <p className="text-text-muted">benaboudisaad.pro@gmail.com</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4 group">
              <div className="w-12 h-12 bg-bg-card border border-slate-700 rounded-full flex items-center justify-center text-accent group-hover:border-accent transition-colors">
                <MapPin size={24} />
              </div>
              <div>
                <h4 className="text-lg font-bold text-text-main">Localisation</h4>
                <p className="text-text-muted">Casablanca, Maroc</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};