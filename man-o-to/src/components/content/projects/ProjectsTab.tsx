import { useMemo, useState } from 'react'
import { flattenStack, projects } from '@/data/projects'
import { ProjectCard } from './ProjectCard'
import { ProjectFilterBar, type SortKey } from './ProjectFilterBar'

export function ProjectsTab() {
  const [activeTags, setActiveTags] = useState<string[]>([])
  const [sortKey, setSortKey] = useState<SortKey>('newest')

  const allTags = useMemo(
    () => Array.from(new Set(projects.flatMap((project) => flattenStack(project.stack)))),
    [],
  )

  const visibleProjects = useMemo(() => {
    const filtered =
      activeTags.length === 0
        ? projects
        : projects.filter((project) =>
            flattenStack(project.stack).some((tag) => activeTags.includes(tag)),
          )

    return [...filtered].sort((a, b) => {
      if (sortKey === 'name') return a.title.localeCompare(b.title)
      const delta = new Date(b.date).getTime() - new Date(a.date).getTime()
      return sortKey === 'newest' ? delta : -delta
    })
  }, [activeTags, sortKey])

  return (
    <div className="flex flex-col gap-6 py-6">
      <ProjectFilterBar
        tags={allTags}
        activeTags={activeTags}
        onTagsChange={setActiveTags}
        sortKey={sortKey}
        onSortChange={setSortKey}
      />
      {visibleProjects.length === 0 ? (
        <p className="text-sm text-muted-foreground">
          No projects match the selected filters.
        </p>
      ) : (
        <div className="flex flex-col divide-y divide-border">
          {visibleProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      )}
    </div>
  )
}
