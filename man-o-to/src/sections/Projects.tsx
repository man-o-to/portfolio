import { useState, useEffect, forwardRef } from 'react';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
  github?: string;
}

const projects: Project[] = [
  {
    title: "Swipebox.ai",
    description: "Swipebox is a Pinterest-style web platform built for marketers to discover and save high-performing ads from platforms like Meta and TikTok. It features an infinite scrolling ad gallery, advanced filtering by niche, platform, and creative type, and tools for organizing ads into private or public boards. The platform helps marketers analyze trends and draw inspiration from top campaigns.",
    technologies: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "ShadCN UI",
      "TypeScript",
      "Prisma",
      "PostgreSQL",
      "NextAuth",
      "Stripe",
      "Cloudflare R2",
      "Vercel"
    ],
    link: "https://swipebox.ai",
    github: "https://github.com/man-o-to/swipebox"
  },
  {
    title: "Swipebox Chrome Extension",
    description: "A custom Chrome extension built to extract and save ad metadata directly from Facebook, TikTok, Google Ads, and LinkedIn libraries. It parses JSON objects and dynamically injected VAST ad content to capture ad media, text, and engagement data. Features a save-to-Swipebox button that injects into ad containers for easy one-click curation.",
    technologies: [
      "JavaScript",
      "Chrome Extension API",
      "Vite",
      "Web Scraping",
      "GraphQL",
      "Content Scripts",
      "background.js",
      "Cloudflare R2"
    ],
    "link": "https://swipebox.ai",
    "github": "https://github.com/man-o-to/swipebox-extension"
  },
  {
    title: "PitchPAL",
    description: "PitchPAL is a voice-to-voice AI assistant designed to help sales professionals and entrepreneurs practice cold calling and objection handling. Users can simulate realistic sales conversations using AI-generated personas that respond dynamically to voice input. Built with OpenAI, real-time voice recognition, and speech synthesis, the tool improves sales confidence and readiness.",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "OpenAI API",
      "RickyVAD",
      "Convex",
      "Tailwind CSS",
      "Web Audio API"
    ],
    link: "https://github.com/man-o-to/PitchPAL", 
    github: "https://github.com/man-o-to/PitchPAL"
  }
  
];

const Projects = forwardRef<HTMLElement, {}>((_, ref) => {
  const [visibleProjects, setVisibleProjects] = useState<number[]>([]);
  const [headerCommand, setHeaderCommand] = useState('');
  const [listCommand, setListCommand] = useState('');
  const [showProjects, setShowProjects] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          typeHeaderCommands();
        }
      },
      { threshold: 0.1 }
    );

    if (ref && 'current' in ref && ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [ref]);

  const typeHeaderCommands = async () => {
    // Type cd command
    const cdCommand = 'cd /projects';
    for (let i = 0; i < cdCommand.length; i++) {
      await new Promise(resolve => setTimeout(resolve, 50));
      setHeaderCommand(cdCommand.slice(0, i + 1));
    }
    
    // Wait before typing ls command
    await new Promise(resolve => setTimeout(resolve, 300));
    
    // Type ls command
    const lsCommand = 'ls -la';
    for (let i = 0; i < lsCommand.length; i++) {
      await new Promise(resolve => setTimeout(resolve, 50));
      setListCommand(lsCommand.slice(0, i + 1));
    }

    // Wait a bit after commands are done before showing projects
    await new Promise(resolve => setTimeout(resolve, 500));
    setShowProjects(true);

    // Start showing projects one by one
    for (let i = 0; i < projects.length; i++) {
      await new Promise(resolve => setTimeout(resolve, 500));
      setVisibleProjects(prev => [...prev, i]);
    }
  };

  return (
    <section ref={ref} className="py-20 bg-[#051533] text-[#779bce] font-mono overflow-hidden">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="mb-12">
          <div className="flex items-center space-x-2">
            <span className="text-white">$</span>
            <span className="text-[#779bce]">{headerCommand}</span>
            {!headerCommand && <span className="animate-pulse">_</span>}
          </div>
          <div className="mt-2 text-sm text-[#779bce] opacity-70">
            <span className="text-white">$</span> {listCommand}
            {!listCommand && <span className="animate-pulse">_</span>}
          </div>
        </div>
        
        <div className={`space-y-8 transition-opacity duration-500 ${
          showProjects ? 'opacity-100' : 'opacity-0'
        }`}>
          {projects.map((project, index) => (
            <div 
              key={index}
              className={`bg-[#051533] border border-[#779bce] border-opacity-30 p-6 
                hover:border-opacity-60 transition-all duration-300 group
                ${visibleProjects.includes(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            >
              {/* Project Header */}
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold tracking-wider text-white">
                  <span className="text-[#779bce]">{'>'}</span> {project.title}
                </h3>
                <div className="flex gap-2">
                  {project.github && (
                    <a 
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-[#779bce] hover:text-white transition-colors duration-300"
                    >
                      [github]
                    </a>
                  )}
                  {project.link && (
                    <a 
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-[#779bce] hover:text-white transition-colors duration-300"
                    >
                      [live]
                    </a>
                  )}
                </div>
              </div>

              {/* Project Description */}
              <div className="mb-4">
                <div className="flex items-center space-x-2 mb-2">
                  <span className="text-white">$</span>
                  <span className="text-[#779bce]">cat</span>
                  <span className="text-[#779bce] opacity-70">description.txt</span>
                </div>
                <p className="text-sm tracking-wide pl-8">
                  {project.description}
                </p>
              </div>

              {/* Technologies */}
              <div>
                <div className="flex items-center space-x-2 mb-2">
                  <span className="text-white">$</span>
                  <span className="text-[#779bce]">ls</span>
                  <span className="text-[#779bce] opacity-70">tech/</span>
                </div>
                <div className="flex flex-wrap gap-2 pl-8">
                  {project.technologies.map((tech, i) => (
                    <span 
                      key={i}
                      className="px-3 py-1 text-xs text-[#779bce] bg-[#051533] 
                        border border-[#779bce] border-opacity-30 rounded-sm tracking-wide 
                        hover:bg-[#779bce] hover:bg-opacity-10 hover:text-white transition-all duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

Projects.displayName = 'Projects';

export default Projects; 