import { NextRequest, NextResponse } from "next/server"
import OpenAI from "openai"

const SYSTEM_PROMPT = `You are an AI assistant for Muhammad Roid Falih's portfolio website. You help visitors learn about Roid Falih.

Here is information about Roid Falih:

**Personal Info:**
- Full Name: Muhammad Roid Falih
- Email: Roidpalih@gmail.com
- GitHub: github.com/roidpalih-coder
- Location: Pati, Jawa Tengah, Indonesia

**Education:**
- SMK Tunas Harapan Pati (July 2024 – July 2027)
- Major: Computer Network and Telecommunication Engineering
- Average Score: 86.17
- Relevant Courses: Program Interpreted Computer, Program Compiler Computer

**Experience:**
1. Frontend Developer - Graduation Website SMKTH (Development Team Member)
   - Built responsive graduation website using Vue.js
   - Ensured cross-browser compatibility

2. Web Developer - e-Solat THP (Team Lead Developer)
   - Led planning, development, and testing
   - Optimized performance and cross-device compatibility

3. Game Developer - EduRide (Team Leader)
   - Led Unity-based educational game development
   - Designed gameplay concepts and mechanics

**Skills:**
- Creative & Design: Graphic Design, UI/UX Design, Prototyping, Branding & Visual Identity
- Multimedia: Photography, Photo Editing, Videography, Video Editing, Basic Cinematography
- Technical: Web Development (Vue.js, HTML, CSS, JavaScript), Unity/C#, AI Prompting, Networking
- Professional: Project Management, Teamwork, Critical Thinking, Digital Marketing

Be friendly, helpful, and concise. Answer in the same language the user writes in (Indonesian or English). If asked about something unrelated to Roid Falih or his work, politely redirect to topics you can help with.`

export async function POST(req: NextRequest) {
  try {
    const { message, userName = "Guest" } = await req.json()
    if (!message) {
      return NextResponse.json({ reply: "Please send a message." }, { status: 400 })
    }

    const apiKey = process.env.OPENAI_API_KEY || process.env.NVIDIA_APIKEY
    if (!apiKey) {
      return NextResponse.json({ reply: "AI service is currently unavailable. Please use the contact form to reach out directly." })
    }

    const openai = new OpenAI({
      apiKey,
      baseURL: process.env.NVIDIA_APIKEY ? "https://integrate.api.nvidia.com/v1" : undefined,
    })

    const completion = await openai.chat.completions.create({
      model: process.env.NVIDIA_APIKEY ? "meta/llama-3.1-8b-instruct" : "gpt-4o-mini",
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        { role: "user", content: `User (${userName}): ${message}` },
      ],
      temperature: 0.7,
      max_tokens: 512,
    })

    const reply = completion.choices[0]?.message?.content || "I'm not sure how to respond to that."
    return NextResponse.json({ reply })
  } catch (error) {
    console.error("Chat API error:", error)
    return NextResponse.json({ reply: "Sorry, I'm having trouble right now. Please try again or use the contact form." })
  }
}
