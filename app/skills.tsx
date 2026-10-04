"use client"
import FadeDown from "@/components/animations/FadeDown"
import FadeUp from "@/components/animations/FadeUp"

const skillCategories = [
  {
    title: "Creative & Design",
    description: "Bringing ideas to life visually with design tools and creative thinking.",
    skills: [
      { name: "Figma", icon: "🎨" },
      { name: "UI/UX Design", icon: "✏️" },
      { name: "Graphic Design", icon: "🖼️" },
      { name: "Branding", icon: "💡" },
      { name: "Prototyping", icon: "📐" },
    ],
  },
  {
    title: "Web Development",
    description: "Building responsive and performant web applications from design to deployment.",
    skills: [
      { name: "Vue.js", icon: "⚡" },
      { name: "HTML & CSS", icon: "🌐" },
      { name: "JavaScript", icon: "🟨" },
      { name: "Tailwind CSS", icon: "💨" },
      { name: "Git", icon: "🔀" },
    ],
  },
  {
    title: "Multimedia",
    description: "Capturing and editing visual content for digital storytelling.",
    skills: [
      { name: "Photography", icon: "📷" },
      { name: "Photo Editing", icon: "🖌️" },
      { name: "Videography", icon: "🎬" },
      { name: "Video Editing", icon: "🎞️" },
      { name: "Cinematography", icon: "🎥" },
    ],
  },
  {
    title: "Technical & Tools",
    description: "Leveraging technical skills and tools to solve complex problems.",
    skills: [
      { name: "Unity", icon: "🎮" },
      { name: "C#", icon: "🔷" },
      { name: "AI Prompting", icon: "🤖" },
      { name: "Networking", icon: "🌐" },
      { name: "Project Management", icon: "📋" },
    ],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="w-full max-w-7xl mx-auto py-24 md:py-32 cursor-default bg-background relative border-t border-text-secondary/10 overflow-hidden">
      <FadeDown>
        <div className="max-w-7xl mx-auto px-6 md:px-12 mb-16 md:mb-24 w-full text-left">
          <h2 className="text-sm font-bold tracking-[0.2em] text-text-secondary uppercase mb-4">Capabilities</h2>
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-black text-text-primary tracking-tighter">My Skills</h3>
        </div>
      </FadeDown>

      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col gap-16">
        {skillCategories.map((category, idx) => (
          <div key={idx} className="flex flex-col md:flex-row gap-8 md:gap-16 items-start">
            <div className="md:w-1/3">
              <FadeDown delay={idx * 0.1}>
                <h4 className="text-2xl font-black text-text-primary tracking-tight mb-2">{category.title}</h4>
                <p className="text-text-secondary font-medium text-sm">{category.description}</p>
              </FadeDown>
            </div>
            <div className="md:w-2/3 flex flex-wrap gap-3 w-full">
              {category.skills.map((skill, skillIdx) => (
                <FadeUp key={skillIdx} delay={idx * 0.1 + skillIdx * 0.05}>
                  <div className="group flex items-center gap-3 px-5 py-3 bg-thirdary/20 hover:bg-thirdary/50 border border-text-secondary/10 hover:border-text-primary/40 rounded-2xl transition-all duration-300 hover:-translate-y-1">
                    <span className="text-xl">{skill.icon}</span>
                    <span className="text-text-primary font-semibold text-sm">{skill.name}</span>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="absolute top-1/2 right-0 w-64 h-64 bg-text-primary/3 rounded-full blur-[100px] pointer-events-none" />
    </section>
  )
}
