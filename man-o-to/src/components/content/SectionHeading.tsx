import type { ReactNode } from 'react'

export function SectionHeading({ children }: { children: ReactNode }) {
  return (
    <h2 className="text-xs font-bold tracking-widest text-foreground uppercase">
      <span className="text-muted-foreground">//</span>
      {children}
    </h2>
  )
}
