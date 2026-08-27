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
    id: 'truffle-mcp',
    title: 'Truffle MCP',
    description:
      "Model Context Protocol server exposing Truffle's finance data as agent tools across 13 domains — accounts, cash flow, direct trading via Alpaca, portfolio analytics, tax-lot computation, and report generation.",
    stack: {
      backend: ['Python', 'MCP', 'Alpaca API', 'pytest'],
    },
    date: '2026-08-02',
    repoUrl: 'https://github.com/man-o-to/truffle-mcp',
  },
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
    id: 'swipebox',
    title: 'Swipebox',
    description:
      'Pinterest-inspired content discovery app with board organization, saved-item collections, and a trending feed, backed by Firebase authentication.',
    stack: {
      frontend: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'shadcn/ui'],
      backend: ['Firebase Auth'],
    },
    date: '2025-03-01',
    repoUrl: 'https://github.com/man-o-to/Swipebox',
  },
  {
    id: 'morphe',
    title: 'Morphe',
    description:
      "React design system forked from Pinterest's Gestalt and customized for Swipebox — retooled design tokens, branding, and component APIs while tracking upstream Gestalt releases; published as morphe, morphe-charts, and morphe-datepicker on npm.",
    stack: {
      frontend: ['React', 'TypeScript', 'Gestalt (Pinterest)', 'CSS'],
      infra: ['npm'],
    },
    date: '2026-01-20',
    repoUrl: 'https://github.com/man-o-to/morphe',
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
