import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { resume, type ResumeEntry } from '@/data/resume'
import { SectionHeading } from '../SectionHeading'

function ResumeSection({
  title,
  entries,
}: {
  title: string
  entries: ResumeEntry[]
}) {
  return (
    <section className="flex flex-col gap-4">
      <SectionHeading>{title}</SectionHeading>
      <div className="flex flex-col gap-4">
        {entries.map((entry) => (
          <div key={`${entry.title}-${entry.org}`} className="flex flex-col gap-1">
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-0.5">
              <span className="font-medium">
                {entry.title} — {entry.org}
              </span>
              <span className="text-xs text-muted-foreground uppercase">
                {entry.period} · {entry.location}
              </span>
            </div>
            <ul className="flex flex-col gap-1">
              {entry.description.map((line) => (
                <li
                  key={line}
                  className="text-justify text-sm text-muted-foreground [text-justify:inter-word]"
                >
                  <span className="mr-2 text-muted-foreground">■</span>
                  {line}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

export function ResumeTab() {
  return (
    <div className="flex flex-col gap-6 py-6">
      <div className="flex items-center justify-between gap-4">
        <p className="max-w-prose leading-relaxed">{resume.summary}</p>
        <Button
          variant="link"
          className="h-auto w-auto shrink-0 rounded-none p-0 text-xs tracking-widest text-foreground uppercase"
          render={<a href="/resume.pdf" download />}
        >
          [Download]
        </Button>
      </div>

      <div className="flex flex-col gap-6">
        <ResumeSection title="Experience" entries={resume.experience} />
        <Separator />
        <ResumeSection title="Education" entries={resume.education} />
        <Separator />
        <section className="flex flex-col gap-2">
          <SectionHeading>Skills</SectionHeading>
          <div className="flex flex-col gap-1">
            {resume.skills.map((group) => (
              <p key={group.category} className="text-sm">
                <span className="text-muted-foreground uppercase">{group.category}: </span>
                {group.items.join(' / ')}
              </p>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
