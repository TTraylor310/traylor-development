import '@styles/global.css'
import Header from '@components/Header'

export const metadata = {
  title: 'Traylor Development',
  description: 'Welcome to landing page for Traylor Development LLC.',
  keywords:
    'Traylor Development, Traylor, Development, LLC, Software, Engineer, Software Engineer, Web, Web Developer, Web Development, Web Engineer, Web Design, Web Designer, Web Development, Web Development Company, Web Development Firm, Web Development Agency, Web Development Studio, Web Development Shop, Web Development Consultancy, Web Development',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>
        <main className='bg-darkBlue text-white'>
          <Header />
          {children}
        </main>
      </body>
    </html>
  )
}
