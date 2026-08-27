import { profile } from '@/data/profile'
import { AsciiPlayer } from './AsciiPlayer'
import { SocialLinks } from './SocialLinks'
import { StatTable } from './StatTable'

export function IdCard() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-start justify-between gap-4">
        <h1 className="font-heading text-3xl leading-none font-bold tracking-tight">
          {profile.name}
        </h1>
        <div className="mt-2 flex w-16 shrink-0 flex-col gap-1">
          <div className="h-px bg-foreground/40" />
          <div className="h-px bg-foreground/40" />
        </div>
      </div>
      <p className="-mt-4 text-xs tracking-widest text-muted-foreground uppercase">
        {profile.jobTitle}
      </p>

      <AsciiPlayer />

      <StatTable />

      <SocialLinks />
    </div>
  )
}
