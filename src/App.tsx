// src/App.tsx
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Skills } from './sections/Skills';
import { Projects } from './sections/Projects';
import { Experience } from './sections/Experience';
import { Contact } from './sections/Contact';
import './style.css'

function App() {
  return (
    <main className="bg-bg-dark min-h-screen text-text-main selection:bg-accent selection:text-bg-dark font-sans">
      <Navbar />
      
      {/* Conteneur principal pour les sections */}
      <div className="flex flex-col gap-9 md:gap-32">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </div>

      <Footer />
    </main>
  );
}

export default App;