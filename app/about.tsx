import Image from "next/image"
import FadeDown from "@/components/animations/FadeDown"
import FadeLeft from "@/components/animations/FadeLeft"
import Fade from "@/components/animations/Fade"
import ScrollVelocity from "@/components/ScrollVelocity"

const skills = [
  "Graphic Design", "UI/UX Design", "Prototyping", "Branding",
  "Photography", "Video Editing", "Web Development", "AI Prompting",
  "Project Management", "Teamwork", "Critical Thinking", "Digital Marketing",
]

export default function About() {
  return (
    <section id="about" className="w-full max-w-7xl mx-auto py-24 md:py-32 cursor-default bg-background overflow-hidden border-t border-text-secondary/10">
      <FadeDown>
        <div className="max-w-7xl mx-auto px-6 md:px-12 mb-16 md:mb-24 w-full text-left">
          <h2 className="text-sm font-bold tracking-[0.2em] text-text-secondary uppercase mb-4">Discover</h2>
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-black text-text-primary tracking-tighter">About Me</h3>
        </div>
      </FadeDown>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 px-6 md:px-12">
        <div className="lg:col-span-5 hidden lg:flex flex-col items-center justify-center relative">
          <div className="w-full max-w-[380px] relative">
            <Fade>
              <div className="relative z-10 p-2 bg-background border border-text-secondary/10 rounded-3xl shadow-2xl overflow-hidden aspect-[4/5] w-full group transition-all duration-500 hover:-translate-y-1">
                <Image
                  src="/images/hero.jpg"
                  alt="Muhammad Roid Falih"
                  fill
                  className="object-cover transition-all duration-700 scale-100 group-hover:scale-105 rounded-2xl"
                  sizes="380px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent opacity-50 rounded-2xl" />
              </div>
            </Fade>
          </div>
        </div>

        <div className="lg:col-span-7 flex flex-col justify-center gap-8">
          <FadeLeft>
            <p className="text-text-secondary text-base md:text-lg leading-relaxed">
              I&apos;m a student at <span className="text-text-primary font-semibold">SMK Tunas Harapan Pati</span>, majoring in Computer Network and Telecommunication Engineering. I&apos;m passionate about digital development — bridging creative design with technical implementation.
            </p>
          </FadeLeft>
          <FadeLeft delay={0.1}>
            <p className="text-text-secondary text-base md:text-lg leading-relaxed">
              With hands-on experience in <span className="text-text-primary font-semibold">graphic design</span>, <span className="text-text-primary font-semibold">UI/UX</span>, and <span className="text-text-primary font-semibold">web development</span>, I&apos;ve led teams to build websites and Unity games. I thrive in collaborative environments where I can manage projects from concept to delivery.
            </p>
          </FadeLeft>

          <FadeLeft delay={0.2}>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {[
                { label: "Average Score", value: "86.17" },
                { label: "Projects Led", value: "3+" },
                { label: "Role", value: "Team Lead" },
              ].map((stat) => (
                <div key={stat.label} className="bg-thirdary/30 border border-text-secondary/10 rounded-2xl p-4">
                  <p className="text-2xl font-black text-text-primary">{stat.value}</p>
                  <p className="text-text-secondary text-xs font-medium mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </FadeLeft>

          <FadeLeft delay={0.3}>
            <div>
              <p className="text-text-secondary text-sm font-semibold uppercase tracking-widest mb-3">Soft Skills</p>
              <div className="flex flex-wrap gap-2">
                {["Project Management", "Team Leadership", "Critical Thinking", "Digital Marketing", "Communication"].map((s) => (
                  <span key={s} className="text-xs font-medium px-3 py-1.5 rounded-full border border-text-secondary/20 text-text-secondary hover:border-text-primary/40 hover:text-text-primary transition-all duration-200">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </FadeLeft>
        </div>
      </div>

      <div className="mt-20 md:mt-28">
        <ScrollVelocity
          text="Graphic Design · UI/UX Design · Web Development · Photography · Video Editing · Branding · Game Development · AI Prompting ·"
          velocity={40}
          className="text-text-secondary/30 text-xl font-black tracking-tight"
        />
      </div>
    </section>
  )
}
