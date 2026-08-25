import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { AboutTab } from './about/AboutTab'
import { ContactTab } from './contact/ContactTab'
import { ProjectsTab } from './projects/ProjectsTab'
import { ResumeTab } from './resume/ResumeTab'

const tabs = [
  { value: 'about', label: 'About' },
  { value: 'resume', label: 'Resume' },
  { value: 'projects', label: 'Projects' },
  { value: 'contact', label: 'Contact' },
] as const

export function ContentTabs() {
  return (
    <Tabs defaultValue="about">
      <TabsList variant="line" className="w-full justify-start gap-6">
        {tabs.map((tab) => (
          <TabsTrigger
            key={tab.value}
            value={tab.value}
            className="flex-none px-1 text-xs tracking-widest text-muted-foreground uppercase data-active:!bg-foreground data-active:!text-background group-data-[variant=line]/tabs-list:data-active:after:opacity-0"
          >
            {tab.label}
          </TabsTrigger>
        ))}
      </TabsList>
      <TabsContent value="about">
        <AboutTab />
      </TabsContent>
      <TabsContent value="resume">
        <ResumeTab />
      </TabsContent>
      <TabsContent value="projects">
        <ProjectsTab />
      </TabsContent>
      <TabsContent value="contact">
        <ContactTab />
      </TabsContent>
    </Tabs>
  )
}
