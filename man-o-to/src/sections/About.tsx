import { useEffect, useState, forwardRef } from 'react';

interface Experience {
  company: string;
  location: string;
  period: string;
  title: string;
  description: string[];
  technologies: string[];
}

const experiences: Experience[] = [
  {
    company: "Clickmint",
    location: "Orlando, FL",
    period: "Nov 2022 - Present",
    title: "Marketing Data Analyst",
    description: [
      "Developed and deployed marketing funnels using APIs like Zapier, Salesforce, OpenAI, Meta, and TikTok, resulting in a 930% increase in interaction rates.",
      "Engineered user tracking and behavior analysis systems across web pages and APIs, driving a 22% boost in conversion rates.",
      "Designed dynamic landing and quiz pages integrated with backend automation, reducing manual processing time by 30%.",
      "Built a Python scraper to gather data on 5,000+ small businesses, improving prospect targeting and segmentation.",
      "Implemented personalized cold email generation using NLTK and OpenAI embeddings, improving open rates by 40%."
    ],
    technologies: [
      "Zapier", "Salesforce", "OpenAI API", "Meta API", "TikTok API", 
      "Python", "NLTK", "JavaScript", "HTML/CSS", 
      "Google Analytics", "Hotjar", "Segment", "PostgreSQL", 
      "Pandas", "NumPy", "BeautifulSoup", "Selenium"
    ]
  },
  {
    company: "Freelance (Fiverr, Upwork)",
    location: "Remote",
    period: "May 2020 - Nov 2021",
    title: "UI/UX Specialist",
    description: [
      "Redesigned UIs for 15+ e-commerce sites (Shopify, Etsy), increasing conversion rates by 22% on average.",
      "Conducted usability testing and applied insights to reduce bounce rates by 30%.",
      "Developed front-end solutions using React, Vue, and Shopify Liquid, reducing load times by 4 seconds.",
      "Implemented a 'Bundle & Save' feature that doubled client revenue within 3 months.",
      "Produced behavioral analytics reports to guide business decisions and improve ROI for small businesses.",
      "Managed end-to-end projects with budgets up to $5,000, consistently delivering ahead of deadlines."
    ],
    technologies: [
      "React", "Vue", "Shopify Liquid", "JavaScript", "Figma", "Framer", "Webflow",
      "HTML5", "CSS3", "SASS/SCSS", "Tailwind CSS", "Bootstrap", "jQuery",
      "Git", "Webpack", "Vite", "Google Analytics", "Hotjar",
      "Adobe XD", "Sketch", "InVision", "Zeplin", "Jira"
    ]
  }
];

const About = forwardRef<HTMLElement, {}>((_, ref) => {
  const [progress, setProgress] = useState(0);
  const [visibleExperiences, setVisibleExperiences] = useState<number[]>([]);
  const [headerCommand, setHeaderCommand] = useState('');
  const [listCommand, setListCommand] = useState('');
  const [showTimeline, setShowTimeline] = useState(false);

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

  useEffect(() => {
    const handleScroll = () => {
      if (!ref || !('current' in ref) || !ref.current) return;
      
      const section = ref.current;
      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const sectionTop = rect.top;
      const sectionHeight = rect.height;
      
      const scrollProgress = Math.min(
        Math.max(
          (windowHeight - sectionTop) / (windowHeight + sectionHeight),
          0
        ),
        1
      );
      
      setProgress(scrollProgress);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [ref]);

  const typeHeaderCommands = async () => {
    // Type cd command
    const cdCommand = 'cd /experience';
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

    // Wait a bit after commands are done before showing timeline
    await new Promise(resolve => setTimeout(resolve, 500));
    setShowTimeline(true);
  };

  useEffect(() => {
    const typeWriter = async () => {
      for (let i = 0; i < experiences.length; i++) {
        await new Promise(resolve => setTimeout(resolve, 500));
        setVisibleExperiences(prev => [...prev, i]);
      }
    };

    typeWriter();
  }, []);

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
        
        <div className={`relative w-full mx-auto transition-opacity duration-500 ${
          showTimeline ? 'opacity-100' : 'opacity-0'
        }`}>
          {/* Vertical Progress Bar */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-[#779bce] bg-opacity-20 md:-translate-x-1/2">
            <div 
              className="absolute top-0 left-0 w-full bg-[#779bce] transition-all duration-300"
              style={{ 
                height: `${progress * 100}%`,
                boxShadow: '0 0 12px rgba(119, 155, 206, 0.8), 0 0 20px rgba(119, 155, 206, 0.4)',
                background: 'linear-gradient(to bottom, #779bce, #4a6fa5)'
              }}
            />
          </div>

          {/* Timeline Items */}
          <div className="space-y-16 pl-8 md:pl-0">
            {experiences.map((exp, index) => (
              <div 
                key={index} 
                className={`relative group transition-all duration-500 ${
                  visibleExperiences.includes(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute -left-8 md:left-1/2 w-2 h-2 bg-[#779bce] -translate-x-1/2 -translate-y-1/2 top-1/2 
                  transition-all duration-300 group-hover:scale-150 group-hover:bg-white group-hover:shadow-[0_0_12px_rgba(119,155,206,0.8)]" />
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
                  {/* Left Side - Company Info */}
                  <div className="text-left md:text-right md:pr-16">
                    <div className="flex items-center md:justify-end space-x-2 mb-2">
                      <span className="text-white">$</span>
                      <span className="text-[#779bce]">cd</span>
                      <span className="text-white">/</span>
                      <h3 className="text-xl font-bold tracking-wider leading-tight break-words whitespace-normal">{exp.company}</h3>
                    </div>
                    <p className="text-sm opacity-80 tracking-wide">{exp.location}</p>
                    <p className="text-sm opacity-80 tracking-wide">{exp.period}</p>
                  </div>
                  
                  {/* Right Side - Role Details */}
                  <div className="md:pl-16">
                    <div className="flex items-center space-x-2 mb-3">
                      <span className="text-white">$</span>
                      <span className="text-[#779bce]">cat</span>
                      <span className="text-[#779bce] opacity-70">role.txt</span>
                    </div>
                    <h4 className="text-lg font-semibold mb-3 tracking-wide pl-8">
                      <span className="text-white">{'>'}</span> {exp.title}
                    </h4>
                    <ul className="space-y-2 mb-4 pl-8">
                      {exp.description.map((item, i) => (
                        <li key={i} className="text-sm tracking-wide flex items-start">
                          <span className="text-white mr-2">&gt;</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                    <div className="pl-8">
                      <div className="flex items-center space-x-2 mb-2">
                        <span className="text-white">$</span>
                        <span className="text-[#779bce]">ls</span>
                        <span className="text-[#779bce] opacity-70">tech/</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, i) => (
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
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
});

About.displayName = 'About';

export default About; 