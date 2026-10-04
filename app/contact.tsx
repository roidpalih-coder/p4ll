"use client"
import { useState, useEffect, useCallback, useRef } from "react"
import AlertMessage from "@/components/Alert"
import FadeDown from "@/components/animations/FadeDown"
import FadeLeft from "@/components/animations/FadeLeft"
import FadeRight from "@/components/animations/FadeRight"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"

type AlertType = "success" | "error" | "info" | "warning"

interface ChatMessage {
  id: string
  sender: "user" | "bot"
  text: string
  timestamp: Date
}

export default function Contact() {
  const [alert, setAlert] = useState<{ type: AlertType; message: string; show: boolean }>({
    type: "success",
    message: "",
    show: false,
  })
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({ name: "", email: "", message: "" })

  const [isOpenChat, setIsOpenChat] = useState(false)
  const [chatInput, setChatInput] = useState("")
  const [userName, setUserName] = useState("Guest")
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([])
  const [isChatLoading, setIsChatLoading] = useState(false)
  const chatEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    const savedName = localStorage.getItem("p4ll_chat_name")
    if (savedName) {
      setUserName(savedName)
    } else {
      const newName = `Guest-${Math.floor(Math.random() * 10000)}`
      setUserName(newName)
      localStorage.setItem("p4ll_chat_name", newName)
    }
    const savedMessages = localStorage.getItem("p4ll_chat_messages")
    if (savedMessages) {
      try {
        const parsed = JSON.parse(savedMessages)
        setChatMessages(parsed.map((msg: ChatMessage) => ({ ...msg, timestamp: new Date(msg.timestamp) })))
      } catch {}
    }
  }, [])

  useEffect(() => {
    if (chatMessages.length > 0) {
      localStorage.setItem("p4ll_chat_messages", JSON.stringify(chatMessages))
    }
    scrollToBottom()
  }, [chatMessages])

  const showAlert = (type: AlertType, message: string) => {
    setAlert({ type, message, show: true })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) {
      showAlert("warning", "Please fill in all fields.")
      return
    }
    setLoading(true)
    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        showAlert("success", "Message sent successfully! I'll get back to you soon.")
        setForm({ name: "", email: "", message: "" })
      } else {
        showAlert("error", "Failed to send message. Please try again.")
      }
    } catch {
      showAlert("error", "Something went wrong. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  const sendChat = useCallback(async () => {
    if (!chatInput.trim() || isChatLoading) return
    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      sender: "user",
      text: chatInput.trim(),
      timestamp: new Date(),
    }
    setChatMessages((prev) => [...prev, userMsg])
    setChatInput("")
    setIsChatLoading(true)
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: chatInput.trim(), userName }),
      })
      const data = await res.json()
      const botMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        sender: "bot",
        text: data.reply || "I'm not sure how to respond to that.",
        timestamp: new Date(),
      }
      setChatMessages((prev) => [...prev, botMsg])
    } catch {
      setChatMessages((prev) => [
        ...prev,
        { id: (Date.now() + 1).toString(), sender: "bot", text: "Sorry, I'm having trouble connecting. Please try again.", timestamp: new Date() },
      ])
    } finally {
      setIsChatLoading(false)
    }
  }, [chatInput, isChatLoading, userName])

  return (
    <>
      <AlertMessage
        type={alert.type}
        message={alert.message}
        show={alert.show}
        onClose={() => setAlert((a) => ({ ...a, show: false }))}
      />

      <section id="contact" className="w-full max-w-7xl mx-auto py-24 md:py-32 cursor-default bg-background border-t border-text-secondary/10">
        <FadeDown>
          <div className="max-w-7xl mx-auto px-6 md:px-12 mb-16 md:mb-24 w-full text-left">
            <h2 className="text-sm font-bold tracking-[0.2em] text-text-secondary uppercase mb-4">Connect</h2>
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-black text-text-primary tracking-tighter">Get In Touch</h3>
          </div>
        </FadeDown>

        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          <FadeLeft>
            <div className="flex flex-col gap-6">
              <p className="text-text-secondary text-base md:text-lg leading-relaxed">
                I&apos;m always open to new opportunities, collaborations, and interesting conversations. Feel free to reach out!
              </p>

              <div className="flex flex-col gap-4">
                {[
                  { label: "Email", value: "Roidpalih@gmail.com", href: "mailto:Roidpalih@gmail.com", icon: "✉️" },
                  { label: "GitHub", value: "github.com/roidpalih-coder", href: "https://github.com/roidpalih-coder", icon: "🐙" },
                  { label: "Location", value: "Pati, Jawa Tengah, Indonesia", href: null, icon: "📍" },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-4 p-4 bg-thirdary/20 border border-text-secondary/10 rounded-2xl hover:border-text-secondary/30 transition-all duration-300">
                    <span className="text-xl">{item.icon}</span>
                    <div>
                      <p className="text-text-secondary text-xs font-semibold uppercase tracking-wider">{item.label}</p>
                      {item.href ? (
                        <a href={item.href} target="_blank" rel="noopener noreferrer" className="text-text-primary font-medium text-sm hover:opacity-70 transition-opacity">
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-text-primary font-medium text-sm">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* <button
                onClick={() => setIsOpenChat(!isOpenChat)}
                className="flex items-center gap-3 px-6 py-4 bg-thirdary/30 border border-text-secondary/20 hover:border-text-primary/40 rounded-2xl transition-all duration-300 hover:bg-thirdary/50 group"
              >
                <span className="text-2xl">💬</span>
                <div className="text-left">
                  <p className="text-text-primary font-bold text-sm">Chat with AI Assistant</p>
                  <p className="text-text-secondary text-xs">Ask me anything about Roid Falih</p>
                </div>
                <span className="ml-auto text-text-secondary group-hover:text-text-primary transition-colors">→</span>
              </button> */}
            </div>
          </FadeLeft>

          <FadeRight>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div>
                <label className="text-text-secondary text-xs font-semibold uppercase tracking-wider mb-2 block">Name</label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Your name"
                  className="w-full px-4 py-3 bg-thirdary/20 border border-text-secondary/20 rounded-xl text-text-primary placeholder:text-text-secondary/50 focus:outline-none focus:border-text-primary/40 focus:bg-thirdary/30 transition-all duration-300 text-sm"
                />
              </div>
              <div>
                <label className="text-text-secondary text-xs font-semibold uppercase tracking-wider mb-2 block">Email</label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 bg-thirdary/20 border border-text-secondary/20 rounded-xl text-text-primary placeholder:text-text-secondary/50 focus:outline-none focus:border-text-primary/40 focus:bg-thirdary/30 transition-all duration-300 text-sm"
                />
              </div>
              <div>
                <label className="text-text-secondary text-xs font-semibold uppercase tracking-wider mb-2 block">Message</label>
                <textarea
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Tell me about your project or just say hi..."
                  rows={5}
                  className="w-full px-4 py-3 bg-thirdary/20 border border-text-secondary/20 rounded-xl text-text-primary placeholder:text-text-secondary/50 focus:outline-none focus:border-text-primary/40 focus:bg-thirdary/30 transition-all duration-300 text-sm resize-none"
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="w-full py-3.5 bg-button-hero text-background font-bold rounded-xl hover:bg-button-hero-hover transition-all duration-300 hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed text-sm"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </FadeRight>
        </div>
      </section>

      // {isOpenChat && (
      //   <div className="fixed bottom-6 right-6 z-[70] w-[340px] md:w-[400px] bg-background border border-text-secondary/20 rounded-3xl shadow-2xl flex flex-col overflow-hidden" style={{ height: "520px" }}>
      //     <div className="flex items-center justify-between px-5 py-4 border-b border-text-secondary/10 bg-thirdary/20">
      //       <div className="flex items-center gap-3">
      //         <div className="w-8 h-8 rounded-full bg-thirdary/60 flex items-center justify-center text-sm font-bold text-text-primary">AI</div>
      //         <div>
      //           <p className="text-text-primary font-bold text-sm">Roid&apos;s AI Assistant</p>
      //           <p className="text-text-secondary text-xs">Ask me anything</p>
      //         </div>
      //       </div>
      //       <div className="flex items-center gap-2">
      //         {chatMessages.length > 0 && (
      //           <button onClick={() => { setChatMessages([]); localStorage.removeItem("p4ll_chat_messages") }} className="text-text-secondary hover:text-text-primary text-xs transition-colors">Clear</button>
      //         )}
      //         <button onClick={() => setIsOpenChat(false)} className="text-text-secondary hover:text-text-primary transition-colors text-lg">✕</button>
      //       </div>
      //     </div>

      //     <div className="flex-1 overflow-y-auto px-4 py-4 flex flex-col gap-3">
      //       {chatMessages.length === 0 && (
      //         <div className="text-center text-text-secondary text-sm mt-8">
      //           <p className="text-2xl mb-2">👋</p>
      //           <p>Hi! I&apos;m Roid&apos;s AI assistant.</p>
      //           <p className="text-xs mt-1">Ask me about his skills, experience, or projects!</p>
      //         </div>
      //       )}
      //       {chatMessages.map((msg) => (
      //         <div key={msg.id} className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
      //           <div className={`max-w-[80%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed ${msg.sender === "user" ? "bg-button-hero text-background rounded-br-sm" : "bg-thirdary/40 border border-text-secondary/10 text-text-primary rounded-bl-sm"}`}>
      //             {msg.sender === "bot" ? (
      //               <div className="prose prose-sm prose-invert max-w-none"><ReactMarkdown remarkPlugins={[remarkGfm]}>{msg.text}</ReactMarkdown></div>
      //             ) : msg.text}
      //           </div>
      //         </div>
      //       ))}
      //       {isChatLoading && (
      //         <div className="flex justify-start">
      //           <div className="bg-thirdary/40 border border-text-secondary/10 rounded-2xl rounded-bl-sm px-4 py-3 flex gap-1.5">
      //             {[0, 1, 2].map((i) => (
      //               <div key={i} className="w-1.5 h-1.5 rounded-full bg-text-secondary animate-bounce" style={{ animationDelay: `${i * 0.15}s` }} />
      //             ))}
      //           </div>
      //         </div>
      //       )}
      //       <div ref={chatEndRef} />
      //     </div>

      //     <div className="px-4 py-3 border-t border-text-secondary/10">
      //       <div className="flex gap-2">
      //         <input
      //           type="text"
      //           value={chatInput}
      //           onChange={(e) => setChatInput(e.target.value)}
      //           onKeyDown={(e) => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); sendChat() } }}
      //           placeholder="Type a message..."
      //           className="flex-1 px-4 py-2.5 bg-thirdary/30 border border-text-secondary/15 rounded-xl text-text-primary placeholder:text-text-secondary/50 focus:outline-none focus:border-text-secondary/40 text-sm transition-all"
      //         />
      //         <button
      //           onClick={sendChat}
      //           disabled={isChatLoading || !chatInput.trim()}
      //           className="px-4 py-2.5 bg-button-hero text-background font-bold rounded-xl hover:bg-button-hero-hover disabled:opacity-40 disabled:cursor-not-allowed transition-all text-sm"
      //         >
      //           →
      //         </button>
      //       </div>
      //     </div>
      //   </div>
      // )}
    </>
  )
}
