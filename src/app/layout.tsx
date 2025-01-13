// src/app/layout.tsx
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Instrument_Serif } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
const instrumentSerif = Instrument_Serif({ 
  weight: '400',
  subsets: ['latin'],
  style: ['normal', 'italic'],
  variable: '--font-instrument-serif'
})

export const metadata: Metadata = {
  title: 'Senem Dilli | Software Engineer',
  description: 'Personal portfolio of Senem Dilli, a Software Engineer specializing in full-stack development with React, Node.js, and TypeScript.',
  keywords: ['Software Engineer', 'Full Stack Developer', 'React', 'Node.js', 'TypeScript'],
  authors: [{ name: 'Senem Dilli' }],
  openGraph: {
    title: 'Senem Dilli | Software Engineer',
    description: 'Personal portfolio of Senem Dilli, a Software Engineer specializing in full-stack development.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${instrumentSerif.variable} antialiased`}>{children}</body>
    </html>
  )
}