import ShimmerText from '@/components/kokonutui/shimmer-text'
import { aboutSummary, aboutTagline, specializations } from '@/data/techStack'
import { SectionHeading } from '../SectionHeading'
import { TechStackTable } from './TechStackTable'
import { ThinkingSpinner } from './ThinkingSpinner'

export function AboutTab() {
  return (
    <div className="flex flex-col gap-8 py-6">
      <div className="flex flex-col gap-2">
        <p className="text-justify leading-relaxed [text-justify:inter-word]">{aboutSummary}</p>
        <p>
          <ThinkingSpinner /> <ShimmerText text={aboutTagline} />
        </p>
      </div>

      <section className="flex flex-col gap-2">
        <SectionHeading>Tech Stack</SectionHeading>
        <TechStackTable />
      </section>

      <section className="flex flex-col gap-2">
        <SectionHeading>Specializations</SectionHeading>
        <div className="flex flex-col gap-4">
          {specializations.map((spec, index) => (
            <div key={spec.name} className="flex flex-col gap-1">
              <p className="font-medium">
                <span className="mr-2 text-muted-foreground">■</span>
                <span className="mr-2 text-muted-foreground">
                  {String(index + 1).padStart(3, '0')}
                </span>
                {spec.name}
              </p>
              <p className="text-justify text-sm text-muted-foreground [text-justify:inter-word]">
                {spec.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
