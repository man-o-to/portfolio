import { Button } from '@/components/ui/button'
import type { Project } from '@/data/projects'

const stackLabels: { key: keyof Project['stack']; label: string }[] = [
  { key: 'frontend', label: 'Frontend' },
  { key: 'backend', label: 'Backend' },
  { key: 'infra', label: 'Infra' },
]

export function ProjectCard({ project }: { project: Project }) {
  const hasLinks = project.repoUrl || project.demoUrl

  return (
    <article className="flex flex-col gap-2 py-6">
      <h3 className="font-heading text-lg font-bold tracking-tight uppercase">
        {project.title}
      </h3>
      <p className="max-w-prose text-sm text-muted-foreground">{project.description}</p>
      <div className="flex flex-col gap-0.5 text-xs text-muted-foreground uppercase">
        {stackLabels.map(({ key, label }) => {
          const items = project.stack[key]
          if (!items || items.length === 0) return null
          return (
            <span key={key}>
              {label}: {items.join(' / ')}
            </span>
          )
        })}
      </div>
      {hasLinks && (
        <div className="mt-1 flex gap-4 text-xs tracking-widest uppercase">
          {project.repoUrl && (
            <Button
              variant="link"
              className="h-auto w-auto rounded-none p-0 text-foreground"
              render={<a href={project.repoUrl} target="_blank" rel="noreferrer" />}
            >
              [Repo]
            </Button>
          )}
          {project.demoUrl && (
            <Button
              variant="link"
              className="h-auto w-auto rounded-none p-0 text-foreground"
              render={<a href={project.demoUrl} target="_blank" rel="noreferrer" />}
            >
              [Demo]
            </Button>
          )}
        </div>
      )}
    </article>
  )
}
