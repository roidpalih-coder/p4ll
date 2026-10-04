import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import "../styles/globals.css"
import PageLoader from "@/components/PageLoader"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "900"],
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"),
  title: {
    default: "p4ll | Portfolio",
    template: "%s | p4ll Portfolio",
  },
  description: "Personal portfolio of Muhammad Roid Falih. Frontend Developer, UI/UX Designer, and Game Developer from SMK Tunas Harapan Pati.",
  keywords: ["Muhammad Roid Falih", "Portfolio", "Frontend Developer", "UI/UX Designer", "Game Developer", "Web Development", "Vue.js", "Unity"],
  authors: [{ name: "Muhammad Roid Falih" }],
  creator: "Muhammad Roid Falih",
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "/",
    title: "p4ll | Portfolio",
    description: "Personal portfolio of Muhammad Roid Falih. Frontend Developer, UI/UX Designer, and Game Developer.",
    siteName: "p4ll Portfolio",
    images: [{ url: "/images/hero.jpg", width: 1200, height: 630, alt: "p4ll Portfolio" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "p4ll | Portfolio",
    description: "Personal portfolio of Muhammad Roid Falih.",
    images: ["/images/hero.jpg"],
  },
  icons: {
    icon: "/images/hero.jpg",
    shortcut: "/images/hero.jpg",
    apple: "/images/hero.jpg",
  },
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id">
      <body className={`${poppins.variable} antialiased bg-background`}>
        <PageLoader />
        {children}
      </body>
    </html>
  )
}
