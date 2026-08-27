export interface TechStackEntry {
  name: string
  category: string
  proficiency: 'Expert' | 'Proficient' | 'Familiar'
}

export const techStack: TechStackEntry[] = [
  // Languages
  { name: 'Python', category: 'Language', proficiency: 'Expert' },
  { name: 'Go', category: 'Language', proficiency: 'Proficient' },
  { name: 'TypeScript', category: 'Language', proficiency: 'Proficient' },
  { name: 'JavaScript', category: 'Language', proficiency: 'Proficient' },
  { name: 'SQL', category: 'Language', proficiency: 'Proficient' },
  { name: 'C++', category: 'Language', proficiency: 'Familiar' },
  { name: 'C#', category: 'Language', proficiency: 'Familiar' },
  { name: 'C', category: 'Language', proficiency: 'Familiar' },
  { name: 'Java', category: 'Language', proficiency: 'Familiar' },

  // AI / Voice
  { name: 'LangGraph', category: 'AI/Voice', proficiency: 'Expert' },
  { name: 'Google ADK', category: 'AI/Voice', proficiency: 'Expert' },
  { name: 'LiveKit', category: 'AI/Voice', proficiency: 'Expert' },
  { name: 'Model Context Protocol (MCP)', category: 'AI/Voice', proficiency: 'Proficient' },
  { name: 'OpenAI API', category: 'AI/Voice', proficiency: 'Proficient' },
  { name: 'Anthropic SDK', category: 'AI/Voice', proficiency: 'Proficient' },
  { name: 'LangChain', category: 'AI/Voice', proficiency: 'Proficient' },
  { name: 'PyTorch', category: 'AI/Voice', proficiency: 'Proficient' },
  { name: 'NLTK', category: 'AI/Voice', proficiency: 'Familiar' },
  { name: 'Scikit-learn', category: 'AI/Voice', proficiency: 'Familiar' },
  { name: 'TensorFlow', category: 'AI/Voice', proficiency: 'Familiar' },

  // Frameworks
  { name: 'FastAPI', category: 'Framework', proficiency: 'Expert' },
  { name: 'React', category: 'Framework', proficiency: 'Proficient' },
  { name: 'Next.js', category: 'Framework', proficiency: 'Proficient' },
  { name: 'Gin', category: 'Framework', proficiency: 'Proficient' },
  { name: 'Fiber', category: 'Framework', proficiency: 'Proficient' },
  { name: 'Flask', category: 'Framework', proficiency: 'Familiar' },
  { name: 'Django', category: 'Framework', proficiency: 'Familiar' },
  { name: 'Vue', category: 'Framework', proficiency: 'Familiar' },

  // Databases & Storage
  { name: 'PostgreSQL', category: 'Database', proficiency: 'Expert' },
  { name: 'BigQuery', category: 'Database', proficiency: 'Proficient' },
  { name: 'SQLAlchemy', category: 'Database', proficiency: 'Proficient' },
  { name: 'Alembic', category: 'Database', proficiency: 'Proficient' },
  { name: 'Prisma', category: 'Database', proficiency: 'Familiar' },
  { name: 'Firebase', category: 'Database', proficiency: 'Familiar' },

  // Cloud & Infra
  { name: 'Google Cloud Platform', category: 'Cloud', proficiency: 'Proficient' },
  { name: 'AWS', category: 'Cloud', proficiency: 'Proficient' },
  { name: 'Terraform', category: 'Cloud', proficiency: 'Proficient' },
  { name: 'Microsoft Azure', category: 'Cloud', proficiency: 'Familiar' },
  { name: 'REST APIs', category: 'Cloud', proficiency: 'Expert' },

  // Payments & Integrations
  { name: 'Twilio', category: 'Integrations', proficiency: 'Proficient' },
  { name: 'Stripe', category: 'Integrations', proficiency: 'Proficient' },
  { name: 'Plaid', category: 'Integrations', proficiency: 'Familiar' },
  { name: 'Alpaca API', category: 'Integrations', proficiency: 'Familiar' },
  { name: 'Convex', category: 'Integrations', proficiency: 'Familiar' },
  { name: 'NextAuth', category: 'Integrations', proficiency: 'Familiar' },

  // Frontend / Design Tooling
  { name: 'Tailwind CSS', category: 'Design', proficiency: 'Proficient' },
  { name: 'shadcn/ui', category: 'Design', proficiency: 'Proficient' },
  { name: 'HTML/CSS', category: 'Design', proficiency: 'Proficient' },
  { name: 'Gestalt (Pinterest)', category: 'Design', proficiency: 'Familiar' },
  { name: 'Figma', category: 'Design', proficiency: 'Proficient' },
  { name: 'Webflow', category: 'Design', proficiency: 'Familiar' },
  { name: 'Framer', category: 'Design', proficiency: 'Familiar' },

  // Testing & Tooling
  { name: 'pytest', category: 'Testing', proficiency: 'Proficient' },
  { name: 'Git', category: 'Tooling', proficiency: 'Expert' },
]

export interface SpecializationEntry {
  name: string
  description: string
}

export const specializations: SpecializationEntry[] = [
  {
    name: 'Voice & Conversational AI',
    description:
      'Multi-agent voice systems on LangGraph and Google ADK, real-time bidirectional streaming, and telephony integrations (Twilio, LiveKit).',
  },
  {
    name: 'Backend & Data Infrastructure',
    description:
      'Production Python/FastAPI and Go (Gin, Fiber) services — including latency-critical background workers and APIs — plus cost-driven data architecture: archival pipelines, retention policies, and analytics backends on PostgreSQL and BigQuery.',
  },
  {
    name: 'Full-Stack Product Engineering',
    description:
      'End-to-end ownership from prototype to production, across React/Next.js front-ends, APIs, and the infrastructure underneath them.',
  },
]

export const aboutSummary: string =
  'AI software engineer building production voice AI and backend systems — from real-time multi-agent platforms to the data infrastructure underneath them. Currently leading a self-serve conversational-AI platform at Event Tickets Center; previously built marketing automation and e-commerce front-ends.'

export const aboutTagline: string =
  'Claude Code subscription included!'
