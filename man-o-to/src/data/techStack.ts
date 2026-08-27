export interface TechStackEntry {
  name: string
  category: string
  proficiency: 'Expert' | 'Proficient' | 'Familiar'
}

export const techStack: TechStackEntry[] = [
  { name: 'Python', category: 'Language', proficiency: 'Expert' },
  { name: 'PostgreSQL', category: 'Database', proficiency: 'Expert' },
  { name: 'LangGraph', category: 'AI/Voice', proficiency: 'Expert' },
  { name: 'Google ADK', category: 'AI/Voice', proficiency: 'Expert' },
  { name: 'LiveKit', category: 'AI/Voice', proficiency: 'Expert' },
  { name: 'FastAPI', category: 'Framework', proficiency: 'Expert' },
  { name: 'BigQuery', category: 'Database', proficiency: 'Proficient' },
  { name: 'Go', category: 'Language', proficiency: 'Proficient' },
  { name: 'TypeScript', category: 'Language', proficiency: 'Proficient' },
  { name: 'React', category: 'Framework', proficiency: 'Proficient' },
  { name: 'Google Cloud Platform', category: 'Cloud', proficiency: 'Proficient' },
  { name: 'AWS', category: 'Cloud', proficiency: 'Proficient' },
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
