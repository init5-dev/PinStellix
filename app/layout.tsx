import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'
import Drawer from './lib/components/Drawer'
import Breadcrumb from "./lib/components/Breadcrumb"

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900'
})
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900'
})

export const metadata: Metadata = {
  title: 'PinStellix',
  description: 'Space Exploration and Collection Platform'
}

export default function RootLayout ({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' data-theme='dark'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
      >
        <Drawer children={children} />
      </body>
    </html>
  )
}
