import React, { useEffect, useState } from 'react';
import HeroButtons from '../components/HeroButtons';
import AsciiBackground from '../components/AsciiBackground';

interface HeroProps {
  aboutRef: React.RefObject<HTMLElement | null>;
  projectsRef: React.RefObject<HTMLElement | null>;
  techStackRef: React.RefObject<HTMLElement | null>;
}

const Hero: React.FC<HeroProps> = ({ aboutRef, projectsRef, techStackRef }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Small delay before showing the buttons
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative">
      <AsciiBackground />
      <div className="text-center relative z-10">
        <div className={`mt-32 transition-all duration-500 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <HeroButtons 
            aboutRef={aboutRef}
            projectsRef={projectsRef}
            techStackRef={techStackRef}
          />
        </div>
      </div>
      {/* Gradient transition overlay */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#051533] via-[#051533]/80 to-transparent z-10"
        style={{
          backgroundImage: 'linear-gradient(to top, #051533 0%, #051533 40%, rgba(5, 21, 51, 0.8) 60%, transparent 100%)'
        }}
      />
    </section>
  );
};

export default Hero; 