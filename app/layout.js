import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Traylor Development',
  description: 'Homepage for Traylor Development',
  keywords: 'Traylor Development, Web, Developer, Coder, Designer'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
