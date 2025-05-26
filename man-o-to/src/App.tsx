import { useRef } from 'react';
import Hero from './sections/Hero';
import About from './sections/About';
import Projects from './sections/Projects';
import TechStack from './sections/TechStack';
import Footer from './sections/Footer';
import './styles/fonts.css';

function App() {
  const aboutRef = useRef<HTMLElement>(null);
  const projectsRef = useRef<HTMLElement>(null);
  const techStackRef = useRef<HTMLElement>(null);

  return (
    <div className="relative overflow-x-hidden w-full">
      <main className="w-full">
        <Hero 
          aboutRef={aboutRef}
          projectsRef={projectsRef}
          techStackRef={techStackRef}
        />
        <About ref={aboutRef} />
        <Projects ref={projectsRef} />
        <TechStack ref={techStackRef} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
