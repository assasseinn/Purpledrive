import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import Navigation from '@/components/Navigation'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  title: 'PurpleDrive - AI-Powered Interview Preparation Platform',
  description: 'Master technical interviews, behavioral questions, and system design with real-world simulations.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full">
      <body className={`${inter.variable} ${poppins.variable} font-sans h-full bg-neutral-50 dark:bg-neutral-900`}>
        <Navigation />
        {children}
      </body>
    </html>
  )
} 