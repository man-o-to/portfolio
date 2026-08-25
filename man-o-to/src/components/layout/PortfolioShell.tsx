import type { ReactNode } from 'react'

interface PortfolioShellProps {
  idCard: ReactNode
  content: ReactNode
}

export function PortfolioShell({ idCard, content }: PortfolioShellProps) {
  return (
    <div className="mx-auto flex min-h-screen w-full max-w-6xl flex-col gap-6 p-4 md:p-8 lg:flex-row lg:items-start">
      <aside className="w-full lg:sticky lg:top-8 lg:w-[320px] lg:shrink-0">
        {idCard}
      </aside>
      <main className="w-full min-w-0 flex-1">{content}</main>
    </div>
  )
}
