export interface TechStackEntry {
  name: string
  category: string
  proficiency: 'Expert' | 'Proficient' | 'Familiar'
}

// TODO: replace placeholder values with real content.
export const techStack: TechStackEntry[] = [
  { name: 'TypeScript', category: 'Language', proficiency: 'Expert' },
  { name: 'React', category: 'Framework', proficiency: 'Expert' },
  { name: 'Vite', category: 'Tooling', proficiency: 'Proficient' },
  { name: 'Tailwind CSS', category: 'Styling', proficiency: 'Proficient' },
  { name: 'Node.js', category: 'Runtime', proficiency: 'Proficient' },
]

export interface SpecializationEntry {
  name: string
  description: string
}

// TODO: replace placeholder values with real content.
export const specializations: SpecializationEntry[] = [
  { name: 'TODO: Specialization One', description: 'TODO: What this specialization covers.' },
  { name: 'TODO: Specialization Two', description: 'TODO: What this specialization covers.' },
  { name: 'TODO: Specialization Three', description: 'TODO: What this specialization covers.' },
]

export const aboutSummary: string =
  'TODO: A short summary describing who you are, what you build, and what you care about.'
