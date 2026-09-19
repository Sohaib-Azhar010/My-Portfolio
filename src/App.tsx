import { Navbar } from './components/Navbar';
import { ParticlesBackground } from './components/ParticlesBackground';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="relative min-h-screen">
      {/* Noise texture */}
      <div className="noise-overlay" />
      
      {/* Animated particles */}
      <ParticlesBackground />

      {/* Fixed navbar */}
      <Navbar />

      {/* Main content */}
      <main className="relative z-[1]">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
