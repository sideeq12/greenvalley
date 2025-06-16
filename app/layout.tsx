import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Green Valley Farm - Fresh, Local, Sustainable",
  description:
    "Family-owned farm providing fresh, organic produce and sustainable farming practices. Visit us for the freshest vegetables, fruits, and farm-to-table experience.",
  keywords: "farm, organic, fresh produce, vegetables, fruits, sustainable farming, local farm",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
