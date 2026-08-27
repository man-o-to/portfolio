import { Button } from '@/components/ui/button'
import { profile } from '@/data/profile'

const links = [
  { label: '[GitHub — Personal]', href: profile.socials.githubPersonal, external: true },
  { label: '[GitHub — Work]', href: profile.socials.githubWork, external: true },
  { label: '[LinkedIn]', href: profile.socials.linkedin, external: true },
  { label: '[Email]', href: `mailto:${profile.email}`, external: false },
]

export function SocialLinks() {
  return (
    <div className="flex flex-col items-start gap-1 text-xs tracking-widest uppercase">
      {links.map(({ label, href, external }) => (
        <Button
          key={label}
          variant="link"
          className="h-auto w-auto rounded-none p-0 text-foreground"
          render={
            <a
              href={href}
              target={external ? '_blank' : undefined}
              rel={external ? 'noreferrer' : undefined}
            />
          }
        >
          {label}
        </Button>
      ))}
    </div>
  )
}
