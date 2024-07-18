import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'سی اس فیفتی شیراز',
  description: 'CS50xShiraz',
}

import { Vazirmatn } from 'next/font/google'

const inter = Vazirmatn({
  subsets: ['arabic', 'latin', 'latin-ext'],
  variable: '--font-vazirmatn',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='fa'>
      <body
        dir='rtl'
        className='bg-BodyImage bg-cover bg-center relative bg-img'
      >
        <main className={`${inter.variable} font-sans`}>{children}</main>
      </body>
    </html>
  )
}
