"use client"
import { useRef, useState, useEffect } from "react"
import { motion, useScroll, useSpring, AnimatePresence } from "motion/react"
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
  github?: string
  link?: string
  certificate?: string
}

const experiences: ExperienceItem[] = [
  {
    id: 1,
    company: "Samsung Innovation Campus Batch 7 (Stage 1)",
    role: "Participant",
    type: "Bootcamp & Certification",
    date: "2024",
    description: "Participated in Samsung Innovation Campus Batch 7 Stage 1, focusing on foundational programming, coding, and logical thinking. Completed the training and earned the official certificate of participation.",
    skills: ["Programming", "Coding", "Logical Thinking", "Problem Solving"],
    certificate: "/certificates/Samsung_Innovation_Campus_Batch7.pdf",
  },
  {
    id: 2,
    company: "ResQMeal",
    role: "Developer",
    type: "Open Source Project",
    date: "2025",
    description: "Built a web-based surplus food redistribution platform connecting food donors with verified recipient organizations. Implemented intelligent matching algorithms, real-time notifications, and admin verification layer.",
    skills: ["Web Development", "Smart Matching", "Food Tech", "Social Impact"],
    github: "https://github.com/roidpalih-coder/ResQMeal",
  },
  {
    id: 2,
    company: "Graduation Website SMKTH",
    role: "Frontend Developer",
    type: "Development Team Member",
    date: "2024",
    description: "Developed a responsive and user-friendly graduation website. Implemented UI/UX design using Vue.js framework, and ensured display compatibility across various browsers.",
    skills: ["Vue.js", "UI/UX Design", "Responsive Design"],
  },
  {
    id: 3,
    company: "e-Solat THP",
    role: "Web Developer",
    type: "Team Lead Developer",
    date: "2024 - 2025",
    description: "Led development team in planning, development, and testing of the website. Coordinated team members for task distribution and optimized performance, responsiveness, and compatibility across devices.",
    skills: ["Team Leadership", "Web Development", "Performance Optimization"],
  },
  {
    id: 4,
    company: "EduRide",
    role: "Game Developer",
    type: "Team Leader",
    date: "2024 - 2025",
    description: "Led team in planning, developing, and testing the Unity-based EduRide educational game. Designed gameplay concepts, game mechanics, and educational yet interactive game flow.",
    skills: ["Unity", "Game Design", "Team Leadership", "C#"],
  },
]

export default function Experience() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] })
  const scaleY = useSpring(scrollYProgress, { stiffness: 100, damping: 30 })

  const [activeCert, setActiveCert] = useState<string | null>(null)

  useEffect(() => {
    if (activeCert) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => { document.body.style.overflow = "unset" }
  }, [activeCert])

  return (
    <>
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

                    <div className="flex flex-wrap items-center gap-2">
                      {exp.skills.map((skill) => (
                        <span key={skill} className="text-xs font-semibold px-3 py-1 rounded-full bg-background border border-text-secondary/15 text-text-secondary">
                          {skill}
                        </span>
                      ))}
                      {exp.github && (
                        <a
                          href={exp.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="ml-auto flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full border border-text-secondary/30 text-text-secondary hover:text-text-primary hover:border-text-primary/50 hover:bg-background transition-all duration-200"
                        >
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                          </svg>
                          View on GitHub
                        </a>
                      )}
                      {exp.certificate && (
                        <button
                          onClick={() => setActiveCert(exp.certificate!)}
                          className={`${!exp.github ? "ml-auto" : ""} flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full border border-text-secondary/30 text-text-primary hover:border-text-primary/60 hover:bg-thirdary transition-all duration-200`}
                        >
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.5v-9l6 4.5-6 4.5z"/>
                          </svg>
                          View Certificate
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </div>
    </section>

      <AnimatePresence>
        {activeCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-background/80 backdrop-blur-md flex items-center justify-center p-4 md:p-8"
            onClick={() => setActiveCert(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", stiffness: 200, damping: 25 }}
              className="bg-background border border-text-secondary/20 rounded-3xl max-w-4xl w-full h-[85vh] md:h-[90vh] flex flex-col overflow-hidden shadow-2xl relative"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between px-6 py-4 border-b border-text-secondary/10 bg-thirdary/20">
                <h3 className="text-text-primary font-bold">Certificate Overview</h3>
                <button
                  onClick={() => setActiveCert(null)}
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-background border border-text-secondary/20 text-text-secondary hover:text-text-primary hover:bg-thirdary transition-all"
                >
                  ✕
                </button>
              </div>
              <div className="flex-1 w-full bg-thirdary/10 relative p-4">
                <iframe
                  src={`${activeCert}#toolbar=0&navpanes=0&scrollbar=0`}
                  className="w-full h-full rounded-xl border border-text-secondary/20 bg-background"
                  title="Certificate Document"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
