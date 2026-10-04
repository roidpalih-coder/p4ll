"use client"
import Image from "next/image"
import { useEffect, useState, useMemo } from "react"
import FadeLeft from "@/components/animations/FadeLeft"
import FadeRight from "@/components/animations/FadeRight"

export default function Hero() {
  const [index, setIndex] = useState(0)
  const [subIndex, setSubIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)
  const texts = useMemo(() => ["Frontend Developer", "UI/UX Designer", "Game Developer", "Web Developer"], [])

  const handleScroll = (id: string) => {
    const section = document.getElementById(id)
    if (section) section.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  useEffect(() => {
    const currentIndex = index % texts.length
    const timeout = setTimeout(
      () => {
        const currentText = texts[currentIndex]
        if (!deleting && subIndex < currentText.length) {
          setSubIndex(subIndex + 1)
        } else if (deleting && subIndex > 0) {
          setSubIndex(subIndex - 1)
        } else if (!deleting && subIndex === currentText.length) {
          setDeleting(true)
        } else if (deleting && subIndex === 0) {
          setDeleting(false)
          setIndex((currentIndex + 1) % texts.length)
        }
      },
      deleting ? 75 : 150,
    )
    return () => clearTimeout(timeout)
  }, [subIndex, deleting, index, texts])

  return (
    <section id="home" className="w-full max-w-7xl mx-auto cursor-default grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center px-6 md:px-12 py-24 md:py-32 overflow-hidden">
      <FadeLeft>
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <p className="text-text-secondary text-sm font-semibold tracking-[0.2em] uppercase">Welcome to my portfolio</p>
            <h1 className="text-text-primary text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter leading-tight">
              Hi, I&apos;m{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-text-primary to-text-secondary">
                Roid Falih
              </span>
            </h1>
            <div className="flex items-center gap-2 h-10">
              <span className="text-text-secondary text-xl md:text-2xl font-bold">
                {texts[index % texts.length].slice(0, subIndex)}
              </span>
              <span className="w-0.5 h-6 bg-text-primary animate-pulse rounded-full" />
            </div>
          </div>

          <p className="text-text-secondary text-base md:text-lg leading-relaxed max-w-lg">
            Graduate of SMK Tunas Harapan Pati, focused on digital development with experience in graphic design, UI/UX, and web development. Led and developed website and game-based projects.
          </p>

          <div className="flex flex-wrap gap-3 mt-2">
            <button
              onClick={() => handleScroll("projects")}
              className="px-6 py-3 bg-button-hero text-background font-semibold rounded-xl hover:bg-button-hero-hover transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg text-sm"
            >
              View My Work
            </button>
            <button
              onClick={() => handleScroll("contact")}
              className="px-6 py-3 border border-text-secondary/30 text-text-primary font-semibold rounded-xl hover:border-text-primary/60 hover:bg-thirdary transition-all duration-300 hover:-translate-y-0.5 text-sm"
            >
              Get In Touch
            </button>
          </div>

          <div className="flex items-center gap-3 mt-1">
            <a
              href="https://github.com/roidpalih-coder"
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub"
              className="w-10 h-10 flex items-center justify-center rounded-xl border border-text-secondary/20 text-text-secondary hover:text-text-primary hover:border-text-primary/50 hover:bg-thirdary transition-all duration-300 hover:-translate-y-0.5"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/p4llllll___"
              target="_blank"
              rel="noopener noreferrer"
              title="Instagram @p4llllll___"
              className="w-10 h-10 flex items-center justify-center rounded-xl border border-text-secondary/20 text-text-secondary hover:text-text-primary hover:border-text-primary/50 hover:bg-thirdary transition-all duration-300 hover:-translate-y-0.5"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
              </svg>
            </a>
            <a
              href="https://www.tiktok.com/@user1672828833892"
              target="_blank"
              rel="noopener noreferrer"
              title="TikTok @user1672828833892"
              className="w-10 h-10 flex items-center justify-center rounded-xl border border-text-secondary/20 text-text-secondary hover:text-text-primary hover:border-text-primary/50 hover:bg-thirdary transition-all duration-300 hover:-translate-y-0.5"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z" />
              </svg>
            </a>
          </div>

          <div className="flex gap-8 mt-4 pt-4 border-t border-text-secondary/10">
            <div>
              <p className="text-2xl font-black text-text-primary">3+</p>
              <p className="text-text-secondary text-xs font-medium">Projects</p>
            </div>
            <div>
              <p className="text-2xl font-black text-text-primary">SMK</p>
              <p className="text-text-secondary text-xs font-medium">Tunas Harapan</p>
            </div>
            <div>
              <p className="text-2xl font-black text-text-primary">86.17</p>
              <p className="text-text-secondary text-xs font-medium">Avg Score</p>
            </div>
          </div>
        </div>
      </FadeLeft>

      <FadeRight>
        <div className="flex justify-center lg:justify-end">
          <div className="w-full max-w-[340px] md:max-w-[400px] relative">
            <div className="relative z-10 p-2 bg-background border border-text-secondary/10 rounded-3xl shadow-2xl overflow-hidden aspect-[4/5] w-full group transition-all duration-500 hover:shadow-[0_20px_40px_-5px_rgba(255,255,255,0.05)] hover:-translate-y-1">
              <Image
                src="/images/hero.jpg"
                alt="Muhammad Roid Falih"
                fill
                className="object-cover transition-all duration-700 scale-100 group-hover:scale-105 rounded-2xl"
                sizes="(max-width: 768px) 100vw, 400px"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent opacity-50 rounded-2xl" />
              <div className="absolute bottom-4 left-4 right-4 z-10">
                <div className="bg-background/80 backdrop-blur-sm rounded-2xl p-3 border border-text-secondary/10">
                  <p className="text-text-primary font-bold text-sm">Muhammad Roid Falih</p>
                  <p className="text-text-secondary text-xs">SMK Tunas Harapan Pati</p>
                </div>
              </div>
            </div>
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-text-primary/5 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-text-primary/5 rounded-full blur-2xl" />
          </div>
        </div>
      </FadeRight>
    </section>
  )
}
