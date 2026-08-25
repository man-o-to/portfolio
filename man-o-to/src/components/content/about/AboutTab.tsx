import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { aboutSummary, specializations, techStack } from '@/data/techStack'
import { SectionHeading } from '../SectionHeading'

const proficiencyCode: Record<(typeof techStack)[number]['proficiency'], string> = {
  Expert: 'EXP',
  Proficient: 'PRO',
  Familiar: 'FAM',
}

export function AboutTab() {
  return (
    <div className="flex flex-col gap-8 py-6">
      <p className="max-w-prose leading-relaxed">{aboutSummary}</p>

      <section className="flex flex-col gap-2">
        <SectionHeading>Tech Stack</SectionHeading>
        <Table>
          <TableHeader className="[&_tr]:!border-b-0">
            <TableRow className="hover:bg-transparent">
              <TableHead className="text-muted-foreground">Name</TableHead>
              <TableHead className="text-muted-foreground">Category</TableHead>
              <TableHead className="text-right text-muted-foreground">Proficiency</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {techStack.map((tech, index) => (
              <TableRow key={tech.name} className="border-b-0 hover:bg-transparent">
                <TableCell className="font-medium">
                  <span className="mr-2 text-muted-foreground">■</span>
                  <span className="mr-2 text-muted-foreground">
                    {String(index + 1).padStart(3, '0')}
                  </span>
                  {tech.name}
                </TableCell>
                <TableCell className="text-muted-foreground">{tech.category}</TableCell>
                <TableCell className="text-right text-muted-foreground">
                  {proficiencyCode[tech.proficiency]}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </section>

      <section className="flex flex-col gap-2">
        <SectionHeading>Specializations</SectionHeading>
        <Table>
          <TableHeader className="[&_tr]:!border-b-0">
            <TableRow className="hover:bg-transparent">
              <TableHead className="text-muted-foreground">Name</TableHead>
              <TableHead className="text-muted-foreground">Description</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {specializations.map((spec, index) => (
              <TableRow key={spec.name} className="border-b-0 hover:bg-transparent">
                <TableCell className="font-medium">
                  <span className="mr-2 text-muted-foreground">■</span>
                  <span className="mr-2 text-muted-foreground">
                    {String(index + 1).padStart(3, '0')}
                  </span>
                  {spec.name}
                </TableCell>
                <TableCell className="text-muted-foreground">{spec.description}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </section>
    </div>
  )
}
