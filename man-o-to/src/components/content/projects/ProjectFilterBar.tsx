import { cn } from '@/lib/utils'
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'

export type SortKey = 'newest' | 'oldest' | 'name'

interface ProjectFilterBarProps {
  tags: string[]
  activeTags: string[]
  onTagsChange: (tags: string[]) => void
  sortKey: SortKey
  onSortChange: (key: SortKey) => void
}

const sortOptions: { value: SortKey; label: string }[] = [
  { value: 'newest', label: 'Newest' },
  { value: 'oldest', label: 'Oldest' },
  { value: 'name', label: 'Name A–Z' },
]

export function ProjectFilterBar({
  tags,
  activeTags,
  onTagsChange,
  sortKey,
  onSortChange,
}: ProjectFilterBarProps) {
  return (
    <div className="flex flex-col gap-4 text-xs tracking-widest uppercase">
      <div className="flex flex-wrap items-center gap-4">
        <span className="text-muted-foreground">Filter:</span>
        <ToggleGroup
          variant="default"
          value={activeTags}
          onValueChange={onTagsChange}
          className="w-fit flex-wrap gap-x-4 gap-y-1"
        >
          {tags.map((tag) => (
            <ToggleGroupItem
              key={tag}
              value={tag}
              className="h-auto min-w-0 rounded-none bg-transparent px-1 text-muted-foreground hover:bg-transparent hover:text-foreground data-[state=on]:bg-foreground data-[state=on]:text-background"
            >
              [{tag}]
            </ToggleGroupItem>
          ))}
        </ToggleGroup>
      </div>

      <div className="flex flex-wrap items-center gap-4">
        <span className="text-muted-foreground">Sort:</span>
        {sortOptions.map((option) => (
          <button
            key={option.value}
            type="button"
            onClick={() => onSortChange(option.value)}
            className={cn(
              'px-1 text-muted-foreground hover:text-foreground',
              sortKey === option.value && 'bg-foreground text-background hover:text-background',
            )}
          >
            [{option.label}]
          </button>
        ))}
      </div>
    </div>
  )
}
