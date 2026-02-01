import { useEffect, useRef, useState, useCallback } from "react"
import { cn } from "@/lib/utils"

interface Pixel {
  id: number
  x: number
  y: number
  opacity: number
  age: number
}

const PIXEL_SIZE = 12
const TRAIL_LENGTH = 40
const FADE_SPEED = 0.04

interface PixelCursorTrailProps {
  /** When true, confines trail to parent container (absolute). When false, covers viewport (fixed). */
  confined?: boolean
  /** Show the "Move cursor" hint in the center */
  showHint?: boolean
  className?: string
}

export function PixelCursorTrail({ confined = false, showHint = false, className }: PixelCursorTrailProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [pixels, setPixels] = useState<Pixel[]>([])
  const pixelIdRef = useRef(0)
  const lastPositionRef = useRef({ x: 0, y: 0 })
  const animationRef = useRef<number>()

  const createPixel = useCallback((x: number, y: number) => {
    return {
      id: pixelIdRef.current++,
      x,
      y,
      opacity: 1,
      age: 0,
    }
  }, [])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return

      const rect = containerRef.current.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top

      if (confined && (x < 0 || x > rect.width || y < 0 || y > rect.height)) return

      const dx = x - lastPositionRef.current.x
      const dy = y - lastPositionRef.current.y
      const distance = Math.sqrt(dx * dx + dy * dy)

      if (distance > PIXEL_SIZE) {
        const newPixel = createPixel(x, y)
        setPixels((prev) => [...prev.slice(-TRAIL_LENGTH), newPixel])
        lastPositionRef.current = { x, y }
      }
    }

    document.addEventListener("mousemove", handleMouseMove)
    return () => document.removeEventListener("mousemove", handleMouseMove)
  }, [confined, createPixel])

  useEffect(() => {
    const animate = () => {
      setPixels((prev) =>
        prev
          .map((pixel) => ({
            ...pixel,
            opacity: pixel.opacity - FADE_SPEED,
            age: pixel.age + 1,
          }))
          .filter((pixel) => pixel.opacity > 0),
      )
      animationRef.current = requestAnimationFrame(animate)
    }

    animationRef.current = requestAnimationFrame(animate)

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className={cn(
        "w-full h-full overflow-hidden select-none",
        confined ? "absolute inset-0" : "fixed inset-0 w-screen h-screen cursor-none",
        "bg-transparent pointer-events-none",
        className,
      )}
    >
      {pixels.map((pixel) => {
        const sizeMultiplier = Math.max(0.3, 1 - pixel.age / 100)
        const currentSize = PIXEL_SIZE * sizeMultiplier

        return (
          <div
            key={pixel.id}
            className="absolute pointer-events-none bg-white/80 rounded-sm"
            style={{
              left: pixel.x - currentSize / 2,
              top: pixel.y - currentSize / 2,
              width: currentSize,
              height: currentSize,
              opacity: pixel.opacity,
              transition: "width 0.1s ease-out, height 0.1s ease-out",
            }}
          />
        )
      })}
      {showHint && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <span className="text-xs font-mono uppercase tracking-[0.3em] text-white/20">
            Move cursor
          </span>
        </div>
      )}
    </div>
  )
}
