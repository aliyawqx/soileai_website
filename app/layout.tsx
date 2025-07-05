import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Soile AI",
  description:
    "Soile AI распознаёт дефектную речь и преобразует её в понятный текст и адаптивную аудиоверсию. Инновационные технологии для речевой реабилитации.",
  keywords: "речь, дефекты речи, логопедия, реабилитация, ИИ, распознавание речи, Soile AI",
  authors: [{ name: "Soile AI Team" }],
  creator: "Soile AI",
  publisher: "Soile AI",
  robots: "index, follow",
  icons: {
    icon: "/soile-logo.svg",
    shortcut: "/soile-logo.svg",
    apple: "/soile-logo.svg",
  },
  openGraph: {
    title: "Soile AI",
    description: "Инновационные технологии ИИ для речевой реабилитации и поддержки людей с нарушениями речи",
    url: "https://soile-ai.com",
    siteName: "Soile AI",
    images: [
      {
        url: "/soile-logo.svg",
        width: 16,
        height: 16,
        alt: "Soile AI Logo",
      },
    ],
    locale: "ru_RU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Soile AI",
    description: "Инновационные технологии ИИ для речевой реабилитации",
    images: ["/soile-logo.svg"],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <head>
        <link rel="icon" href="/soile-logo.svg" sizes="any" />
        <link rel="apple-touch-icon" href="/soile-logo.svg" />
        <meta name="theme-color" content="#2563eb" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
