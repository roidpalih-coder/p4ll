"use client"
import { useState } from "react"

interface GlareHoverProps {
  children: React.ReactNode
  className?: string
}

export default function GlareHover({ children, className = "" }: GlareHoverProps) {
  const [glare, setGlare] = useState({ x: 0, y: 0, opacity: 0 })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width) * 100
    const y = ((e.clientY - rect.top) / rect.height) * 100
    setGlare({ x, y, opacity: 0.07 })
  }

  const handleMouseLeave = () => {
    setGlare((g) => ({ ...g, opacity: 0 }))
  }

  return (
    <div
      className={`relative overflow-hidden ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-300 z-10"
        style={{
          opacity: glare.opacity,
          background: `radial-gradient(circle at ${glare.x}% ${glare.y}%, rgba(255,255,255,0.6) 0%, transparent 60%)`,
        }}
      />
      {children}
    </div>
  )
}
