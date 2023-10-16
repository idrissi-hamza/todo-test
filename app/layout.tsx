import './globals.css'
import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'
import Navbar from './components/Navbar'

const inter = Nunito({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Todo App',
  description: 'Todo developer evaluation test',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-pattern `}>
        <Navbar />
        {children}</body>
    </html>
  )
}
