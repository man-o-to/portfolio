export interface ResumeEntry {
  title: string
  org: string
  period: string
  location: string
  description: string[]
}

export interface SkillGroup {
  category: string
  items: string[]
}

export interface Resume {
  summary: string
  experience: ResumeEntry[]
  education: ResumeEntry[]
  skills: SkillGroup[]
}

export const resume: Resume = {
  summary:
    'AI Software Engineer with 3+ years building production backend and voice AI systems, currently architecting multi-agent platforms at Event Tickets Center.',
  experience: [
    {
      title: 'AI Software Engineer, Innovation Team',
      org: 'Event Tickets Center',
      period: 'Jun 2025 — Present',
      location: 'Denver, CO',
      description: [
        'Leading design of a self-serve conversational-AI platform (LiveKit, GCP) with PCI DSS-compliant native payments.',
        'In Q2 2026, architected a three-agent real-time voice AI system (Google ADK) with a custom event bus and observability stack.',
        'Expanded the AI call center from sales-only to full booking-lifecycle support across three specialized agents.',
        'In Aug 2026, built a Postgres-to-BigQuery archival pipeline that cleared a 27,000-conversation backlog with zero data loss.',
        'Cut ongoing database costs by an estimated 8x by capping unbounded growth to a rolling 30-day retention window.',
        'Shipped a production LangGraph voice sales agent handling live hotel bookings and payments via Twilio and Stripe.',
        'Built latency-critical background worker services and APIs in Go (Gin, Fiber) supporting the AI agent infrastructure.',
      ],
    },
    {
      title: 'Technology Strategist',
      org: 'Clickmint',
      period: 'Nov 2022 — Jun 2025',
      location: 'Orlando, FL',
      description: [
        'Developed and deployed marketing funnels integrating Zapier, Salesforce, OpenAI, and TikTok APIs, driving a 930% rise in interaction rates.',
        'Built a Python scraper covering 5,000+ small businesses and an NLTK/OpenAI cold-email system, lifting open rates by 40%.',
        'In 2024, engineered custom behavioral tracking and analytics, driving a 22% lift in conversion and a 30% cut in manual processing.',
      ],
    },
    {
      title: 'UI/UX Specialist',
      org: 'Fiverr/Upwork (Freelance)',
      period: 'May 2020 — Nov 2022',
      location: 'Remote',
      description: [
        'Redesigned UIs for 15+ e-commerce stores (Shopify, Etsy), lifting conversion rates 22% and cutting bounce rates 30%.',
        'Built front-end solutions in React, Vue, and Shopify Liquid; shipped a "Bundle & Save" feature that doubled a client\'s revenue in 3 months.',
      ],
    },
  ],
  education: [
    {
      title: 'Bachelor of Science in Computer Science, Minor in Mathematics',
      org: 'Florida State University',
      period: 'Aug 2024',
      location: 'Tallahassee, FL',
      description: [
        'Cumulative GPA: 3.4/4.0',
        'Awards & Honors: Florida Medallion Scholarship Recipient valued at over $10,000',
      ],
    },
  ],
  skills: [
    {
      category: 'AI/Voice',
      items: [
        'LangGraph',
        'LangChain',
        'Google ADK',
        'LiveKit',
        'OpenAI API',
        'PyTorch',
        'NLTK',
        'Scikit-learn',
        'TensorFlow',
        'Twilio',
        'Stripe',
      ],
    },
    {
      category: 'Backend/Cloud',
      items: [
        'Python',
        'FastAPI',
        'Flask',
        'Django',
        'Gin',
        'Fiber',
        'PostgreSQL',
        'SQLAlchemy',
        'Alembic',
        'BigQuery',
        'Google Cloud Platform',
        'Terraform',
        'AWS',
        'Microsoft Azure',
        'REST APIs',
      ],
    },
    {
      category: 'Languages/Frontend',
      items: [
        'JavaScript/TypeScript',
        'Go',
        'C++',
        'C#',
        'C',
        'Java',
        'SQL',
        'React',
        'Next.js',
        'Vue',
        'HTML/CSS',
      ],
    },
    {
      category: 'Other',
      items: [
        'Git',
        'Figma',
        'Webflow',
        'Framer',
        'Portuguese (Fluent)',
        'Spanish/French/Italian (Conversational)',
      ],
    },
    {
      category: 'Engineering Practices',
      items: [
        'Full-Stack Development',
        'System Design',
        'System Architecture (C4)',
        'Testing',
        'Verification & Validation',
        'Data Validation',
        'Peer Review',
        'Release Management',
        'Storage',
        'Caching',
        'Data Processing',
        'AI-Assisted Development',
        'Process Automation',
        'User-Facing Features',
      ],
    },
    {
      category: 'Professional Skills',
      items: [
        'Ownership',
        'Critical Evaluation',
        'High Integrity',
        'Creative Problem-Solving',
        'Collaboration',
        'Communication',
      ],
    },
  ],
}
