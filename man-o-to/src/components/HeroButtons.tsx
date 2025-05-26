import React from 'react';

interface HeroButtonsProps {
  aboutRef: React.RefObject<HTMLElement | null>;
  projectsRef: React.RefObject<HTMLElement | null>;
  techStackRef: React.RefObject<HTMLElement | null>;
}

const HeroButtons: React.FC<HeroButtonsProps> = ({ aboutRef, projectsRef, techStackRef }) => {
  const buttonClass = "group relative px-2 md:px-4 py-1.5 md:py-2 text-sm md:text-base font-mono bg-[#051533] text-[#779bce] border border-[#779bce] hover:bg-[#779bce] hover:text-[#051533] transition-all duration-300 ease-in-out before:content-['$'] before:mr-1 before:text-[#779bce] before:transition-colors before:duration-300 before:ease-in-out group-hover:before:text-[#051533] hover:before:text-[#051533] whitespace-nowrap";

  const scrollToSection = (ref: React.RefObject<HTMLElement | null>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <div className="flex w-full cursor-pointer">
      <button 
        className={`${buttonClass} flex-1 border-r-0 rounded-l-md cursor-pointer`}
        onClick={() => scrollToSection(aboutRef)}
      >
        experience
      </button>
      
      <button 
        className={`${buttonClass} flex-1 border-x-0 cursor-pointer`}
        onClick={() => scrollToSection(projectsRef)}
      >
        projects
      </button>
      
      <button 
        className={`${buttonClass} flex-1 border-l-0 rounded-r-md cursor-pointer`}
        onClick={() => scrollToSection(techStackRef)}
      >
        tech-stack
      </button>
    </div>
  );
};

export default HeroButtons; 