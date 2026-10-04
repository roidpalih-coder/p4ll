"use client"
import { useEffect, useRef } from "react"
import { motion, useAnimationFrame, useMotionValue, useTransform, useScroll } from "motion/react"

interface ScrollVelocityProps {
  text: string
  velocity?: number
  className?: string
}

function VelocityText({ text, velocity = 50, className = "" }: ScrollVelocityProps) {
  const baseX = useMotionValue(0)
  const { scrollY } = useScroll()
  const scrollVelocity = useMotionValue(0)
  const smoothVelocity = useMotionValue(0)
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], { clamp: false })

  const x = useTransform(baseX, (v) => `${(v % 100) - 100}%`)

  const directionFactor = useRef<number>(1)
  const prevScrollY = useRef<number>(0)

  useAnimationFrame((_, delta) => {
    const current = scrollY.get()
    const diff = current - prevScrollY.current
    prevScrollY.current = current
    scrollVelocity.set(diff / (delta / 1000))

    const sv = scrollVelocity.get()
    smoothVelocity.set(sv * 0.5 + smoothVelocity.get() * 0.5)

    if (sv > 0) directionFactor.current = 1
    else if (sv < 0) directionFactor.current = -1

    baseX.set(baseX.get() + (-velocity / 10) * directionFactor.current * velocityFactor.get() * (delta / 1000) * 0.5 - velocity * (delta / 1000) * 0.05)
  })

  const repeated = Array(4).fill(text)

  return (
    <div className={`overflow-hidden whitespace-nowrap flex ${className}`}>
      <motion.div className="flex gap-8 whitespace-nowrap" style={{ x }}>
        {Array(8).fill(null).map((_, i) => (
          <span key={i} className="inline-block">
            {text}&nbsp;&nbsp;&nbsp;&nbsp;
          </span>
        ))}
      </motion.div>
    </div>
  )
}

export default function ScrollVelocity({ text, velocity = 50, className = "" }: ScrollVelocityProps) {
  return <VelocityText text={text} velocity={velocity} className={className} />
}
