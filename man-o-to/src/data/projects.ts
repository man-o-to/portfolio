export interface Project {
  id: string
  title: string
  description: string
  tags: string[]
  date: string // ISO date, used for sorting
  repoUrl?: string
  demoUrl?: string
}

// TODO: replace placeholder values with real projects.
export const projects: Project[] = [
  {
    id: 'sample-project-one',
    title: 'TODO: Project One',
    description: 'TODO: A short description of what this project does.',
    tags: ['TypeScript', 'React'],
    date: '2026-01-01',
    repoUrl: 'https://github.com/TODO/project-one',
    demoUrl: 'https://example.com',
  },
  {
    id: 'sample-project-two',
    title: 'TODO: Project Two',
    description: 'TODO: A short description of what this project does.',
    tags: ['Python', 'Data'],
    date: '2025-06-01',
    repoUrl: 'https://github.com/TODO/project-two',
  },
]
