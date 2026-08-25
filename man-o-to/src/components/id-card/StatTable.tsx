import { profile } from '@/data/profile'

const rows: { label: string; value: string }[] = [
  { label: '[Name]', value: profile.name },
  { label: '[Job Title]', value: profile.jobTitle },
  { label: '[Email]', value: profile.email },
  { label: '[Birthday]', value: profile.birthday },
  { label: '[Location]', value: profile.location },
]

export function StatTable() {
  return (
    <dl className="flex flex-col gap-2 text-sm">
      {rows.map((row) => (
        <div key={row.label} className="grid grid-cols-[7rem_1fr] gap-2">
          <dt className="text-xs tracking-widest text-muted-foreground uppercase">
            {row.label}
          </dt>
          <dd className="break-words">{row.value}</dd>
        </div>
      ))}
    </dl>
  )
}
