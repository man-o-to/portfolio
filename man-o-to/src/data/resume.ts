export interface ResumeEntry {
  title: string
  org: string
  period: string
  description: string
}

export interface Resume {
  summary: string
  experience: ResumeEntry[]
  education: ResumeEntry[]
  skills: string[]
}

// TODO: replace placeholder values with real content.
export const resume: Resume = {
  summary:
    'TODO: A short professional summary for the top of your resume.',
  experience: [
    {
      title: 'TODO: Job Title',
      org: 'TODO: Company',
      period: 'TODO: 2023 — Present',
      description: 'TODO: What you did in this role.',
    },
  ],
  education: [
    {
      title: 'TODO: Degree',
      org: 'TODO: School',
      period: 'TODO: 2019 — 2023',
      description: 'TODO: Relevant coursework or honors.',
    },
  ],
  skills: ['TypeScript', 'React', 'Node.js'],
}
