import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Menu from './components/menu'
import Header from './components/header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Extract Light',
  description: 'Sua conta de luz em suas mãos',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} p-8`}>
        <Header/>
        <div className='flex sm:flex-row flex-col'>
          <Menu/>
          {children}
        </div>
      </body>
    </html>
  )
}
