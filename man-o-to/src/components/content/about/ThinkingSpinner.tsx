import { useEffect, useState } from 'react'

const FRAMES = ['✻', '✽', '✶', '✳']
const FRAME_DURATION_MS = 300

export function ThinkingSpinner() {
  const [frame, setFrame] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setFrame((current) => (current + 1) % FRAMES.length)
    }, FRAME_DURATION_MS)
    return () => clearInterval(id)
  }, [])

  return (
    <span aria-hidden="true" className="text-[#d97757]">
      {FRAMES[frame]}
    </span>
  )
}
