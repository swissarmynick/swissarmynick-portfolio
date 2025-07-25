import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "SwissArmyNick - AI Voice Agent Expert & Content Creator",
  description:
    "Learn about AI Voice Agents, automation tools, and technical tutorials. I build useful tools and teach what I learn through YouTube.",
  keywords: ["AI Voice Agents", "Automation", "YouTube", "Technical Tutorials", "SwissArmyNick"],
  authors: [{ name: "Nick (SwissArmyNick)" }],
  creator: "SwissArmyNick",
  openGraph: {
    title: "SwissArmyNick - AI Voice Agent Expert",
    description: "Learn about AI Voice Agents, automation tools, and technical tutorials.",
    url: "https://swissarmynick.com",
    siteName: "SwissArmyNick",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SwissArmyNick - AI Voice Agent Expert",
    description: "Learn about AI Voice Agents, automation tools, and technical tutorials.",
    creator: "@swissarmynick",
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    shortcut: "/favicon.ico",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon-16x16.png" sizes="16x16" type="image/png" />
        <link rel="icon" href="/favicon-32x32.png" sizes="32x32" type="image/png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
