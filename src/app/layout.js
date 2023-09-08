import Footer from '@/components/footer'
import './globals.css'

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={'bg-background'}>  
      <body>{children}
      <Footer/>
      </body>
    </html>
  )
}
