import Footer from '@/components/footer'
import Navbar from '@/components/molecules/navbar';
import './globals.css'

export default function RootLayout({ children }) {
  return (
    <html lang="en"> 
      <body className='bg-background overflow-x-hidden'>
        <Navbar/> 
        <div className='px-12' >
      {children}
      </div>
      <Footer/>

      </body>
    </html>
  );
}
