import Footer from '@/components/footer'
import Navbar from '@/components/molecules/navbar';
import './globals.css'

export default function RootLayout({ children }) {
  return (
    <html lang="en"> 
      <body className='bg-background overflow-x-hidden px-12'>
        <Navbar/> 
      {children}
      <Footer/>
      </body>
    </html>
  );
}
