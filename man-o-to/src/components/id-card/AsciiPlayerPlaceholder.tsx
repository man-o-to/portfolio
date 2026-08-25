import { AspectRatio } from '@/components/ui/aspect-ratio'

export function AsciiPlayerPlaceholder() {
  return (
    <AspectRatio ratio={4 / 3} className="flex items-center justify-center bg-white/5">
      <span className="px-4 text-center text-xs tracking-widest text-muted-foreground uppercase">
        [ASCII Player] Awaiting Signal
      </span>
    </AspectRatio>
  )
}
