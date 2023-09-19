import Footer from '@/components/footer'
import Navbar from '@/components/molecules/navbar';
import './globals.css'

export default function RootLayout({ children }) {
  return (
    <html lang="en"> 
      <body>
      <Navbar/> 
      {children}
      <Footer/>
      </body>
    </html>
  );
}
