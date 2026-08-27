export interface ProjectStack {
  frontend?: string[]
  backend?: string[]
  infra?: string[]
}

export interface Project {
  id: string
  title: string
  description: string
  stack: ProjectStack
  date: string // ISO date, used for sorting
  repoUrl?: string
  demoUrl?: string
}

export function flattenStack(stack: ProjectStack): string[] {
  return [...(stack.frontend ?? []), ...(stack.backend ?? []), ...(stack.infra ?? [])]
}

export const projects: Project[] = [
  {
    id: 'truffle',
    title: 'Truffle',
    description:
      'Personal finance dashboard with a customizable drag-and-drop widget grid, live bank-account sync (Plaid), and Claude-powered insights.',
    stack: {
      frontend: ['React', 'Next.js'],
      backend: ['Prisma', 'NextAuth', 'Anthropic SDK'],
      infra: ['PostgreSQL'],
    },
    date: '2026-05-01',
  },
  {
    id: 'pitchpal',
    title: 'PitchPAL',
    description:
      'Web app for voice-to-voice AI interactions to improve cold calling and objection handling skills.',
    stack: {
      frontend: ['React', 'Next.js'],
      backend: ['OpenAI', 'RickyVAD'],
      infra: ['Convex'],
    },
    date: '2025-11-01',
    repoUrl: 'https://github.com/man-o-to/PitchPAL',
  },
  {
    id: 'gpt-dev',
    title: 'GPT-DEV',
    description:
      'Reconstructed a character-level language model inspired by "Attention Is All You Need" and OpenAI\'s GPT-2/GPT-3.',
    stack: {
      backend: ['Python', 'PyTorch', 'LLMs', 'GPTs', 'N-gram models'],
    },
    date: '2024-03-01',
    repoUrl: 'https://github.com/man-o-to/GPT-DEV',
  },
]
