import './globals.css'
import Birzia from 'next/font/local'
import { Inter } from 'next/font/google'

import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'

const birzia = Birzia({
  src: [
    {
      path: '../public/fonts/Birzia-Black.woff2',
      weight: '900',
    },
    {
      path: '../public/fonts/Birzia-Bold.woff2',
      weight: '700',
    },
    {
      path: '../public/fonts/Birzia-Medium.woff2',
      weight: '500',
    },
  ],
})
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata = {
  title: 'מעקף',
  description: 'מחפשי עבודה תורמים לקוד פתוח',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang='he'
      dir='rtl'
      className={`${birzia.className} ${inter.variable}`}
    >
      <body className='h-screen m-0 bg-darkBg text-lightText'>
        <header>
          <Header />
        </header>
        {children}
        <footer className='dark:bg-gray-800'>
          <Footer />
        </footer>
      </body>
    </html>
  )
}
