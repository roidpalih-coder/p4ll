"use client"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "motion/react"
import FadeDown from "@/components/animations/FadeDown"
import FadeUp from "@/components/animations/FadeUp"
import GlareHover from "@/components/GlareHover"

const projectList = [
  {
    index: 0,
    title: "ResQMeal",
    description: "Web-based surplus food redistribution platform that connects food donors with verified recipient organizations using intelligent matching.",
    longDescription: "ResQMeal is a web-based platform designed to tackle food waste by intelligently connecting food donors with verified recipient organizations. The system features smart matching algorithms, donor and recipient dashboards, real-time notifications, and an admin verification layer to ensure food safety and accountability.",
    emoji: "🍱",
    tags: ["Web Development", "Food Tech", "Smart Matching", "Social Impact"],
    role: "Developer",
    year: "2026",
    link: null,
    github: "https://github.com/roidpalih-coder/ResQMeal",
  },
  {
    index: 1,
    title: "Graduation Website SMKTH",
    description: "A responsive and user-friendly graduation website for SMK Tunas Harapan Pati. Implemented UI/UX design using Vue.js framework with cross-browser compatibility.",
    longDescription: "This project was a collaborative effort as part of the graduation committee development team. My role was as a Frontend Developer where I implemented the designed UI into a fully functional responsive website. The site features smooth animations, mobile-first design, and dynamic content sections for the graduation ceremony.",
    emoji: "🌐",
    tags: ["Vue.js", "UI/UX", "Frontend", "Responsive"],
    role: "Frontend Developer",
    year: "2026",
    link: null,
    github: "https://github.com/roidpalih-coder/frontend-web-kelulusan",
  },
  {
    index: 2,
    title: "e-Solat THP",
    description: "A comprehensive prayer schedule and management website. Led the development team as Team Lead, ensuring performance, responsiveness, and compatibility.",
    longDescription: "As Team Lead Developer for e-Solat THP, I coordinated a development team through the full project lifecycle - from planning and feature design to testing and deployment. The website provides prayer time schedules, mosque information, and interactive features for the community. I implemented performance optimization techniques and ensured the site works seamlessly across all devices and browsers.",
    emoji: "📿",
    tags: ["Web Development", "Team Lead", "Project Management", "Performance"],
    role: "Team Lead Developer",
    year: "2026",
    link: null,
    github: "https://github.com/roidpalih-coder/e-Solat-THP",
  },
  {
    index: 3,
    title: "EduRide",
    description: "An educational game built with Unity. Led the team in designing gameplay concepts and mechanics, creating an interactive and educational experience.",
    longDescription: "EduRide is a Unity-based educational game where I served as Team Leader and Game Developer. I led the team through conceptualization, development, and testing phases. The game focuses on creating an engaging learning experience through interactive gameplay mechanics. I designed the core game loop, educational content integration, and ensured smooth game performance.",
    emoji: "🎮",
    tags: ["Unity", "C#", "Game Design", "Team Leadership", "Education"],
    role: "Team Leader & Game Developer",
    year: "2026",
    link: null,
    github: "https://github.com/Sype212/Edu-Ride",
  },
  {
    index: 4,
    title: "Find&Found",
    description: "Mobile-first lost and found platform featuring smart matching, admin verification, and real-time notifications.",
    longDescription: "Find&Found is an information system designed to reunite people with their lost items. It features user authentication, a smart matching algorithm based on category, textual similarity, time, and GPS proximity. It also includes admin verification, digital handover confirmations, and real-time alerts. I meticulously drafted the System Architecture using UML (Use Case, Activity, Sequence, Class, ERD).",
    emoji: "🔍",
    tags: ["UML", "System Design", "Smart Matching", "Mobile-first"],
    role: "Developer & System Designer",
    year: "2026",
    link: null,
    github: "https://github.com/roidpalih-coder/Find-and-Found",
  },
]

export default function Project() {
  const [isOpen, setIsOpen] = useState<number | null>(null)
  const activeProject = projectList.find((p) => p.index === isOpen)

  useEffect(() => {
    if (isOpen !== null) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => { document.body.style.overflow = "unset" }
  }, [isOpen])

  return (
    <>
      <section id="projects" className="w-full max-w-7xl mx-auto py-24 md:py-32 cursor-default bg-background relative border-t border-text-secondary/10">
        <FadeDown>
          <div className="max-w-7xl mx-auto px-6 md:px-12 mb-16 md:mb-24 w-full text-left">
            <h2 className="text-sm font-bold tracking-[0.2em] text-text-secondary uppercase mb-4">Portfolio</h2>
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-black text-text-primary tracking-tighter">Selected Works</h3>
          </div>
        </FadeDown>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 px-6 md:px-12">
          {projectList.map((project, index) => (
            <FadeUp key={index} delay={index * 0.1}>
              <GlareHover className="group flex flex-col h-full bg-background border border-text-secondary/20 hover:border-text-primary/50 rounded-2xl overflow-hidden transition-all duration-500 shadow-sm hover:shadow-2xl hover:-translate-y-1 cursor-pointer">
                <div
                  className="relative overflow-hidden aspect-[16/10] bg-thirdary/40 border-b border-text-secondary/10 flex items-center justify-center"
                  onClick={() => setIsOpen(project.index)}
                >
                  <div className="text-center p-8">
                    <div className="text-5xl mb-3">{project.emoji}</div>
                    <p className="text-text-secondary text-xs font-medium">{project.role}</p>
                  </div>
                </div>
                <div className="flex flex-col flex-1 p-6 gap-4">
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <h4 className="text-text-primary font-black text-base tracking-tight">{project.title}</h4>
                      <span className="text-text-secondary text-xs font-medium whitespace-nowrap">{project.year}</span>
                    </div>
                    <p className="text-text-secondary text-sm leading-relaxed line-clamp-3">{project.description}</p>
                  </div>
                  <div className="flex flex-wrap gap-1.5 mt-auto">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span key={tag} className="text-xs font-medium px-2 py-1 rounded-full bg-thirdary/40 border border-text-secondary/10 text-text-secondary">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <button
                    onClick={() => setIsOpen(project.index)}
                    className="w-full py-2.5 text-sm font-semibold text-text-secondary border border-text-secondary/20 rounded-xl hover:border-text-primary/50 hover:text-text-primary hover:bg-thirdary/30 transition-all duration-300"
                  >
                    View Details
                  </button>
                </div>
              </GlareHover>
            </FadeUp>
          ))}
        </div>
      </section>

      <AnimatePresence>
        {isOpen !== null && activeProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-background/80 backdrop-blur-md flex items-center justify-center p-4 md:p-8"
            onClick={() => setIsOpen(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", stiffness: 200, damping: 25 }}
              className="bg-background border border-text-secondary/20 rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative aspect-[16/9] bg-thirdary/40 rounded-t-3xl flex items-center justify-center border-b border-text-secondary/10">
                <div className="text-center">
                  <div className="text-6xl mb-3">{activeProject.emoji}</div>
                  <span className="text-xs font-medium px-3 py-1 rounded-full bg-background/80 border border-text-secondary/20 text-text-secondary">
                    {activeProject.role}
                  </span>
                </div>
                <button
                  onClick={() => setIsOpen(null)}
                  className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-background/80 border border-text-secondary/20 text-text-secondary hover:text-text-primary hover:bg-thirdary transition-all"
                >
                  ✕
                </button>
              </div>

              <div className="p-6 md:p-8">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <h3 className="text-text-primary font-black text-xl md:text-2xl tracking-tight">{activeProject.title}</h3>
                  <span className="text-text-secondary text-sm font-medium whitespace-nowrap">{activeProject.year}</span>
                </div>

                <p className="text-text-secondary leading-relaxed mb-6 text-sm md:text-base">{activeProject.longDescription}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {activeProject.tags.map((tag) => (
                    <span key={tag} className="text-xs font-semibold px-3 py-1.5 rounded-full bg-thirdary/40 border border-text-secondary/15 text-text-secondary">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  {activeProject.link ? (
                    <a
                      href={activeProject.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-3 text-center text-sm font-semibold bg-button-hero text-background rounded-xl hover:bg-button-hero-hover transition-all duration-300"
                    >
                      Live Demo
                    </a>
                  ) : (
                    <a
                      href="https://github.com/roidpalih-coder"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-3 text-center text-sm font-semibold bg-button-hero text-background rounded-xl hover:bg-button-hero-hover transition-all duration-300 flex items-center justify-center gap-2"
                    >
                      View Projects
                    </a>
                  )}
                  {activeProject.github ? (
                    <a
                      href={activeProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-3 text-center text-sm font-semibold border border-text-secondary/30 text-text-primary rounded-xl hover:border-text-primary/60 hover:bg-thirdary transition-all duration-300 flex items-center justify-center gap-2"
                    >
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                      </svg>
                      View on GitHub
                    </a>
                  ) : (
                    <a
                      href="https://github.com/roidpalih-coder"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-3 text-center text-sm font-semibold border border-text-secondary/30 text-text-primary rounded-xl hover:border-text-primary/60 hover:bg-thirdary transition-all duration-300 flex items-center justify-center gap-2"
                    >
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                      </svg>
                      GitHub Profile
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
