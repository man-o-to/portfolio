import { Button } from '@/components/ui/button'
import type { Project } from '@/data/projects'

export function ProjectCard({ project }: { project: Project }) {
  const hasLinks = project.repoUrl || project.demoUrl

  return (
    <article className="flex flex-col gap-2 py-6">
      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
        <h3 className="font-heading text-lg font-bold tracking-tight uppercase">
          {project.title}
        </h3>
        <span className="text-xs text-muted-foreground uppercase">
          {project.tags.join(' / ')}
        </span>
      </div>
      <p className="max-w-prose text-sm text-muted-foreground">{project.description}</p>
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
