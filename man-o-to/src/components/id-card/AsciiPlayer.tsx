import { useEffect, useRef, useState } from 'react'

type Cell = [x: number, y: number, char: string, brightness: number]

interface AsciiFrame {
  duration: number
  cells: Cell[]
}

interface AsciiSignalData {
  width: number
  height: number
  frameRate: number
  looping: boolean
  frames: AsciiFrame[]
}

// Precomputed once so the render loop never builds a template string per cell.
const GRAY_STYLES = Array.from({ length: 256 }, (_, b) => `rgb(${b} ${b} ${b})`)

export function AsciiPlayer() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [data, setData] = useState<AsciiSignalData | null>(null)

  // Fetched as a static asset rather than bundled: the source animation is a
  // couple MB of per-cell text data, too large to inline into the JS chunk.
  useEffect(() => {
    let cancelled = false
    fetch('/ascii-signal.json')
      .then((res) => res.json())
      .then((json: AsciiSignalData) => {
        if (!cancelled) setData(json)
      })
    return () => {
      cancelled = true
    }
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas?.getContext('2d')
    if (!canvas || !ctx || !data) return

    // Characters render at the same point size as the rest of the site's
    // body text, not scaled to fit the box — the box crops a window into
    // the (larger) full-size art instead of shrinking the art to fit it.
    const fontSize = parseFloat(getComputedStyle(document.body).fontSize) || 15
    const font = `${fontSize}px "IBM Plex Mono", ui-monospace, monospace`
    const probeCtx = document.createElement('canvas').getContext('2d')
    if (!probeCtx) return
    probeCtx.font = font
    const cellWidth = probeCtx.measureText('0').width
    const cellHeight = fontSize

    const artWidth = data.width * cellWidth
    const artHeight = data.height * cellHeight

    const dpr = window.devicePixelRatio || 1
    canvas.style.width = `${artWidth}px`
    canvas.style.height = `${artHeight}px`
    canvas.width = Math.round(artWidth * dpr)
    canvas.height = Math.round(artHeight * dpr)
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    ctx.font = font
    ctx.textBaseline = 'top'

    let frameIndex = 0
    let frameStart = 0
    let raf = 0

    const draw = (now: number) => {
      if (frameStart === 0) frameStart = now
      // Advance by each frame's exact duration (not the jittery rAF callback
      // time) so pacing doesn't drift; the while loop catches up in one go
      // if the tab was ever backgrounded and missed several frames.
      while (now - frameStart >= data.frames[frameIndex].duration) {
        frameStart += data.frames[frameIndex].duration
        frameIndex = (frameIndex + 1) % data.frames.length
      }

      const frame = data.frames[frameIndex]
      ctx.clearRect(0, 0, artWidth, artHeight)

      for (const [x, y, char, brightness] of frame.cells) {
        ctx.fillStyle = GRAY_STYLES[brightness]
        ctx.fillText(char, x * cellWidth, y * cellHeight)
      }

      raf = requestAnimationFrame(draw)
    }

    raf = requestAnimationFrame(draw)

    return () => cancelAnimationFrame(raf)
  }, [data])

  return (
    <div className="relative h-48 w-full shrink-0 overflow-hidden">
      <canvas
        ref={canvasRef}
        className="absolute top-1/2 left-1/2"
        style={{ transform: 'translate(-50%, -50%)' }}
      />
    </div>
  )
}
