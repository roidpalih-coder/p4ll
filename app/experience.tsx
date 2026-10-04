"use client"
import { useRef } from "react"
import { motion, useScroll, useSpring } from "motion/react"
import FadeDown from "@/components/animations/FadeDown"
import FadeUp from "@/components/animations/FadeUp"

interface ExperienceItem {
  id: number
  company: string
  role: string
  type: string
  date: string
  description: string
  skills: string[]
}

const experiences: ExperienceItem[] = [
  {
    id: 1,
    company: "Graduation Website SMKTH",
    role: "Frontend Developer",
    type: "Development Team Member",
    date: "2024",
    description: "Developed a responsive and user-friendly graduation website. Implemented UI/UX design using Vue.js framework, and ensured display compatibility across various browsers.",
    skills: ["Vue.js", "UI/UX Design", "Responsive Design"],
  },
  {
    id: 2,
    company: "e-Solat THP",
    role: "Web Developer",
    type: "Team Lead Developer",
    date: "2024 – 2025",
    description: "Led development team in planning, development, and testing of the website. Coordinated team members for task distribution and optimized performance, responsiveness, and compatibility across devices.",
    skills: ["Team Leadership", "Web Development", "Performance Optimization"],
  },
  {
    id: 3,
    company: "EduRide",
    role: "Game Developer",
    type: "Team Leader",
    date: "2024 – 2025",
    description: "Led team in planning, developing, and testing the Unity-based EduRide educational game. Designed gameplay concepts, game mechanics, and educational yet interactive game flow.",
    skills: ["Unity", "Game Design", "Team Leadership", "C#"],
  },
]

export default function Experience() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] })
  const scaleY = useSpring(scrollYProgress, { stiffness: 100, damping: 30 })

  return (
    <section id="experience" className="w-full max-w-7xl mx-auto py-24 md:py-32 cursor-default bg-background border-t border-text-secondary/10">
      <FadeDown>
        <div className="max-w-7xl mx-auto px-6 md:px-12 mb-16 md:mb-24 w-full text-left">
          <h2 className="text-sm font-bold tracking-[0.2em] text-text-secondary uppercase mb-4">Journey</h2>
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-black text-text-primary tracking-tighter">Experience</h3>
        </div>
      </FadeDown>

      <div className="max-w-7xl mx-auto px-6 md:px-12" ref={ref}>
        <div className="relative">
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-text-secondary/10" />
          <motion.div
            className="absolute left-0 md:left-8 top-0 w-px bg-text-primary/40 origin-top"
            style={{ scaleY, height: "100%" }}
          />

          <div className="flex flex-col gap-12 pl-8 md:pl-24">
            {experiences.map((exp, i) => (
              <FadeUp key={exp.id} delay={i * 0.1}>
                <div className="relative group">
                  <div className="absolute -left-8 md:-left-24 top-1.5 flex items-center justify-center">
                    <div className="w-3 h-3 rounded-full bg-text-secondary/40 border-2 border-background group-hover:bg-text-primary group-hover:scale-125 transition-all duration-300" />
                  </div>

                  <div className="bg-thirdary/20 hover:bg-thirdary/40 border border-text-secondary/10 hover:border-text-secondary/30 rounded-2xl p-6 md:p-8 transition-all duration-300 hover:-translate-y-0.5">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                      <div>
                        <h4 className="text-text-primary font-black text-lg md:text-xl tracking-tight">{exp.company}</h4>
                        <p className="text-text-secondary font-semibold text-sm mt-0.5">{exp.role}</p>
                        <span className="inline-block mt-1 text-xs font-medium px-2 py-0.5 rounded-full border border-text-secondary/20 text-text-secondary">
                          {exp.type}
                        </span>
                      </div>
                      <span className="text-text-secondary text-sm font-medium whitespace-nowrap">{exp.date}</span>
                    </div>

                    <p className="text-text-secondary text-sm md:text-base leading-relaxed mb-4">{exp.description}</p>

                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill) => (
                        <span key={skill} className="text-xs font-semibold px-3 py-1 rounded-full bg-background border border-text-secondary/15 text-text-secondary">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
