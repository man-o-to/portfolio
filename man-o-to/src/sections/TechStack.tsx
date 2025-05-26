import { useState, useEffect, forwardRef } from 'react';

interface TechCategory {
  title: string;
  items: string[];
}

const techCategories: TechCategory[] = [
  {
    title: "languages",
    items: [
      "Python", "JavaScript", "TypeScript", "SQL", "R", "C++", "Java", "C#",
      "HTML", "CSS", "Shell Scripting", "Solidity", "Assembly", "LATEX"
    ]
  },
  {
    title: "frameworks & libraries",
    items: [
      "React", "Vue", "Node.js", "Next.js", "Django", "Flask", ".NET", "jQuery",
      "Shopify Liquid", "OpenAI API", "RickyVAD", "Numpy", "Pandas", "Matplotlib",
      "Scikit-learn", "Seaborn", "TensorFlow", "PyTorch", "Convex", "Prisma"
    ]
  },
  {
    title: "cloud & infrastructure",
    items: [
      "AWS (S3, Redshift)", "Microsoft Azure", "Digital Ocean", "Vercel",
      "Supabase", "Docker", "Git", "Airflow", "Apache Spark", "Firebase"
    ]
  },
  {
    title: "databases & storage",
    items: [
      "MongoDB", "MySQL", "PostgreSQL", "Supabase", "Firebase"
    ]
  },
  {
    title: "apis & automation",
    items: [
      "REST APIs", "Stripe API", "OpenAI API", "Salesforce", "Zapier", "n8n"
    ]
  },
  {
    title: "analytics & visualization",
    items: [
      "Tableau", "Power BI", "Google Data Studio", "Excel (Pivot Tables, VBA)"
    ]
  },
  {
    title: "design & cms",
    items: [
      "Figma", "Webflow", "Framer", "WordPress"
    ]
  },
  {
    title: "project management",
    items: [
      "Jira"
    ]
  }
];

const TechStack = forwardRef<HTMLElement, {}>((_, ref) => {
  const [visibleCategories, setVisibleCategories] = useState<number[]>([]);
  const [expandedCategories, setExpandedCategories] = useState<number[]>([]);
  const [typingCategories, setTypingCategories] = useState<number[]>([]);
  const [displayedItems, setDisplayedItems] = useState<{[key: number]: string[]}>({});
  const [headerCommand, setHeaderCommand] = useState('');
  const [listCommand, setListCommand] = useState('');
  const [showTechStack, setShowTechStack] = useState(false);

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
    const cdCommand = 'cd /tech-stack';
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

    // Wait a bit after commands are done before showing tech stack
    await new Promise(resolve => setTimeout(resolve, 500));
    setShowTechStack(true);

    // Start showing categories one by one
    for (let i = 0; i < techCategories.length; i++) {
      await new Promise(resolve => setTimeout(resolve, 500));
      setVisibleCategories(prev => [...prev, i]);
    }
  };

  const toggleCategory = async (index: number) => {
    if (expandedCategories.includes(index)) {
      setExpandedCategories(prev => prev.filter(i => i !== index));
      setTypingCategories(prev => prev.filter(i => i !== index));
      setDisplayedItems(prev => {
        const newItems = { ...prev };
        delete newItems[index];
        return newItems;
      });
    } else {
      setExpandedCategories(prev => [...prev, index]);
      setTypingCategories(prev => [...prev, index]);
      
      // Start typing animation for items
      const items = techCategories[index].items;
      const newDisplayedItems = { ...displayedItems };
      newDisplayedItems[index] = [];
      setDisplayedItems(newDisplayedItems);

      for (let i = 0; i < items.length; i++) {
        await new Promise(resolve => setTimeout(resolve, 50));
        setDisplayedItems(prev => ({
          ...prev,
          [index]: [...(prev[index] || []), items[i]]
        }));
      }
      
      setTypingCategories(prev => prev.filter(i => i !== index));
    }
  };

  return (
    <section ref={ref} className="py-20 bg-[#051533] text-[#779bce] font-mono overflow-x-hidden">
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

        {/* Main Categories */}
        <div className={`space-y-4 transition-opacity duration-500 ${
          showTechStack ? 'opacity-100' : 'opacity-0'
        }`}>
          {techCategories.map((category, index) => (
            <div 
              key={index} 
              className={`transition-all duration-500 ${
                visibleCategories.includes(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <button
                onClick={() => toggleCategory(index)}
                className="w-full flex items-center space-x-2 p-4 hover:bg-[#779bce] hover:bg-opacity-5 
                  transition-all duration-300 group cursor-pointer hover:text-white"
              >
                <span className="text-white">$</span>
                <span className="text-[#779bce]">cd</span>
                <span className="text-white">/</span>
                <h3 className="text-base md:text-xl font-bold tracking-wider text-white group-hover:text-white truncate">
                  {category.title}
                </h3>
              </button>
              
              <div className={`overflow-hidden transition-all duration-300 ${
                expandedCategories.includes(index) ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <div className="pl-8 space-y-2">
                  <div className="flex items-center space-x-2 mb-4">
                    <span className="text-white">$</span>
                    <span className="text-[#779bce]">ls</span>
                    <span className="text-[#779bce] opacity-70">-la</span>
                    {typingCategories.includes(index) && (
                      <span className="animate-pulse">_</span>
                    )}
                  </div>
                  <div className="flex flex-wrap gap-2 pl-4">
                    {displayedItems[index]?.map((item, i) => (
                      <span 
                        key={i}
                        className="px-3 py-1 text-xs text-[#779bce] bg-[#051533] 
                          border border-[#779bce] border-opacity-30 rounded-sm tracking-wide 
                          hover:bg-[#779bce] hover:bg-opacity-10 hover:text-white transition-all duration-300
                          cursor-default"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

TechStack.displayName = 'TechStack';

export default TechStack; 