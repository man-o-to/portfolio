import { useMemo, useState } from 'react'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { techStack, type TechStackEntry } from '@/data/techStack'
import { cn } from '@/lib/utils'

const proficiencyCode: Record<TechStackEntry['proficiency'], string> = {
  Expert: 'EXP',
  Proficient: 'PRO',
  Familiar: 'FAM',
}

const proficiencyColor: Record<TechStackEntry['proficiency'], string> = {
  Expert: 'text-[#5ec26a]',
  Proficient: 'text-[#d97757]',
  Familiar: 'text-[#6b8fb0]',
}

const proficiencyRank: Record<TechStackEntry['proficiency'], number> = {
  Familiar: 1,
  Proficient: 2,
  Expert: 3,
}

type SortKey = 'name' | 'category' | 'proficiency'
type SortDirection = 'asc' | 'desc'

const columns: { key: SortKey; label: string; align?: 'right' }[] = [
  { key: 'name', label: 'Name' },
  { key: 'category', label: 'Category' },
  { key: 'proficiency', label: 'Proficiency', align: 'right' },
]

export function TechStackTable() {
  const [sortKey, setSortKey] = useState<SortKey | null>(null)
  const [sortDirection, setSortDirection] = useState<SortDirection>('asc')

  const sortedTechStack = useMemo(() => {
    if (!sortKey) return techStack

    return [...techStack].sort((a, b) => {
      const delta =
        sortKey === 'proficiency'
          ? proficiencyRank[a.proficiency] - proficiencyRank[b.proficiency]
          : a[sortKey].localeCompare(b[sortKey])
      return sortDirection === 'asc' ? delta : -delta
    })
  }, [sortKey, sortDirection])

  function handleSort(key: SortKey) {
    if (sortKey === key) {
      setSortDirection((current) => (current === 'asc' ? 'desc' : 'asc'))
    } else {
      setSortKey(key)
      setSortDirection('asc')
    }
  }

  return (
    <Table>
      <TableHeader className="[&_tr]:!border-b-0">
        <TableRow className="hover:bg-transparent">
          {columns.map((column) => (
            <TableHead
              key={column.key}
              className={cn('text-muted-foreground', column.align === 'right' && 'text-right')}
            >
              <button
                type="button"
                onClick={() => handleSort(column.key)}
                className={cn(
                  'inline-flex items-center gap-1 hover:text-foreground',
                  column.align === 'right' && 'flex-row-reverse',
                )}
              >
                {column.label}
                <span className="w-2 text-foreground">
                  {sortKey === column.key ? (sortDirection === 'asc' ? '▲' : '▼') : ''}
                </span>
              </button>
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {sortedTechStack.map((tech, index) => (
          <TableRow key={tech.name} className="border-b-0 hover:bg-transparent">
            <TableCell className="font-medium">
              <span className="mr-2 text-muted-foreground">■</span>
              <span className="mr-2 text-muted-foreground">
                {String(index + 1).padStart(3, '0')}
              </span>
              {tech.name}
            </TableCell>
            <TableCell className="text-muted-foreground">{tech.category}</TableCell>
            <TableCell className={cn('text-right', proficiencyColor[tech.proficiency])}>
              {proficiencyCode[tech.proficiency]}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
