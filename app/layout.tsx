import Navbar from '@/components/Navbar'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { menu } from '@/utils/settings'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Cart Dashboard',
  description: 'Dashboard for test on Deall Company',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={inter.className}>
        <Navbar menu={menu} />
        <div className="p-5 flex w-10/12 max-md:w-screen justify-center">
          {children}
        </div>
      </body>
    </html>
  )
}
