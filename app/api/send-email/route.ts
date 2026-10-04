import { NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json()
    if (!name || !email || !message) {
      return NextResponse.json({ success: false, message: "All fields are required." }, { status: 400 })
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })

    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
      to: "Roidpalih@gmail.com",
      subject: `New message from ${name} via p4ll Portfolio`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #ececec; background: #0a0a0a; padding: 20px; border-radius: 12px 12px 0 0; margin: 0;">
            New Portfolio Message
          </h2>
          <div style="padding: 24px; background: #111; border: 1px solid #222; border-radius: 0 0 12px 12px;">
            <p><strong>From:</strong> ${name}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <hr style="border-color: #333; margin: 16px 0;" />
            <p><strong>Message:</strong></p>
            <p style="background: #0a0a0a; padding: 16px; border-radius: 8px; color: #a1a1aa;">${message.replace(/\n/g, "<br/>")}</p>
          </div>
        </div>
      `,
    })

    return NextResponse.json({ success: true, message: "Message sent successfully!" })
  } catch (error) {
    console.error("Email error:", error)
    return NextResponse.json({ success: false, message: "Failed to send message." }, { status: 500 })
  }
}
