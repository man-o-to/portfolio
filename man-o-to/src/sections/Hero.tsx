import React, { useEffect, useState } from 'react';
import HeroButtons from '../components/HeroButtons';
import AsciiBackground from '../components/AsciiBackground';
import { FaChevronDown } from 'react-icons/fa';

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

  const scrollToAbout = () => {
    if (aboutRef.current) {
      aboutRef.current.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <AsciiBackground />
      <div className="text-center relative z-10">
        <div className={`mt-40 transition-all duration-500 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <HeroButtons 
            aboutRef={aboutRef}
            projectsRef={projectsRef}
            techStackRef={techStackRef}
          />
        </div>
      </div>
      {/* Gradient transition overlay with scroll button */}
      <div className="absolute bottom-0 left-0 right-0 h-32 z-10">
        <div 
          className="absolute inset-0 bg-gradient-to-t from-[#051533] via-[#051533]/80 to-transparent"
          style={{
            backgroundImage: 'linear-gradient(to top, #051533 0%, #051533 40%, rgba(5, 21, 51, 0.8) 60%, transparent 100%)'
          }}
        />
        <button 
          onClick={scrollToAbout}
          className={`absolute left-1/2 -translate-x-1/2 bottom-8 w-10 h-10 rounded-full border border-[#779bce] 
            flex items-center justify-center text-[#779bce] hover:bg-[#779bce] hover:text-[#051533] 
            transition-all duration-300 group ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
        >
          <FaChevronDown className="w-4 h-4 transform group-hover:translate-y-0.5 transition-transform duration-300" />
        </button>
      </div>
    </section>
  );
};

export default Hero; 