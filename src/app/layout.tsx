import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Abhirup Banerjee - Web3 Developer & Researcher',
  description: 'Portfolio of Abhirup Banerjee, specializing in zero-knowledge proofs, cryptography, and scalable blockchain solutions.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-gradient-to-br from-gray-900 to-gray-800 text-white`}>{children}</body>
    </html>
  )
}
