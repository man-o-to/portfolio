import React, { useState } from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { HiDocumentText } from 'react-icons/hi';

const Footer: React.FC = () => {
  const [isHovered, setIsHovered] = useState<string | null>(null);

  const links = [
    {
      name: 'linkedin',
      url: 'https://linkedin.com/in/luccawork',
      icon: <FaLinkedin className="w-6 h-6" />,
      command: 'open linkedin.com/in/luccawork'
    },
    {
      name: 'github',
      url: 'https://github.com/man-o-to',
      icon: <FaGithub className="w-6 h-6" />,
      command: 'open github.com/man-o-to'
    },
    {
      name: 'resume',
      url: 'https://luccacv.tiiny.site',
      icon: <HiDocumentText className="w-6 h-6" />,
      command: 'open luccacv.tiiny.site'
    }
  ];

  return (
    <footer className="py-8 bg-[#051533] text-[#779bce] font-mono">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col items-center space-y-4">
          {/* Links with terminal-style hover effect */}
          <div className="flex items-center space-x-8">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target={link.name === 'resume' ? undefined : '_blank'}
                rel={link.name === 'resume' ? undefined : 'noopener noreferrer'}
                download={link.name === 'resume' ? 'resume.pdf' : undefined}
                type={link.name === 'resume' ? 'application/pdf' : undefined}
                className="group relative hover:text-white transition-colors duration-300"
                onMouseEnter={() => setIsHovered(link.name)}
                onMouseLeave={() => setIsHovered(null)}
              >
                {link.icon}
                {isHovered === link.name && (
                  <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 
                    bg-[#051533] px-3 py-1 rounded border border-[#779bce] border-opacity-20
                    text-sm whitespace-nowrap">
                    <span className="text-white">$</span>
                    <span className="text-[#779bce]"> {link.command}</span>
                  </div>
                )}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-sm opacity-70">
            <span className="text-white">$</span>
            <span className="text-[#779bce]">echo </span>
            <span className="text-white">"© 2025 Lucca"</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 