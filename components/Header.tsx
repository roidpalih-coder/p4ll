"use client"
import { useState, useEffect } from "react"
import FadeDown from "./animations/FadeDown"

const navLinks = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Experience", id: "experience" },
  { label: "Skills", id: "skills" },
  { label: "Projects", id: "projects" },
  { label: "Contact", id: "contact" },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const [scrolled, setScrolled] = useState(false)

  const handleScroll = (id: string) => {
    const section = document.getElementById(id)
    if (section) section.scrollIntoView({ behavior: "smooth", block: "start" })
    setIsOpen(false)
  }

  useEffect(() => {
    const sections = document.querySelectorAll("section")
    const onScroll = () => {
      setScrolled(window.scrollY > 20)
      let current = "home"
      sections.forEach((section) => {
        if (window.scrollY >= section.offsetTop - section.clientHeight / 3) {
          current = section.getAttribute("id") || "home"
        }
      })
      setActiveSection(current)
    }
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <FadeDown>
      <nav
        className={`w-full transition-all duration-300 ${
          scrolled ? "bg-background/80 backdrop-blur-md border-b border-text-secondary/10 shadow-lg" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
          <button
            onClick={() => handleScroll("home")}
            className="text-xl font-black text-text-primary tracking-tighter hover:opacity-70 transition-opacity"
          >
            p4ll<span className="text-text-secondary">.</span>
          </button>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleScroll(link.id)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  activeSection === link.id
                    ? "text-text-primary bg-thirdary"
                    : "text-text-secondary hover:text-text-primary hover:bg-thirdary/50"
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2 rounded-lg text-text-primary hover:bg-thirdary transition-colors"
            aria-label="Toggle menu"
          >
            <span className={`block w-5 h-0.5 bg-text-primary transition-all duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-5 h-0.5 bg-text-primary transition-all duration-300 ${isOpen ? "opacity-0" : ""}`} />
            <span className={`block w-5 h-0.5 bg-text-primary transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden bg-background/95 backdrop-blur-md border-b border-text-secondary/10">
            <div className="flex flex-col px-6 py-4 gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleScroll(link.id)}
                  className={`text-left px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                    activeSection === link.id
                      ? "text-text-primary bg-thirdary"
                      : "text-text-secondary hover:text-text-primary hover:bg-thirdary/50"
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>
    </FadeDown>
  )
}
