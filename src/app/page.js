import Image from 'next/image'
import ImageCard from '../components/atoms/ImageCard';
import AboutUs from '@/components/aboutUs';
export default function Home() {
  return (
    <div>
    {/* <ImageCard icon="flex"/> */}
    <main className="flex min-h-screen flex-col items-center justify-between p-24   ">
    Hello  
    <AboutUs/>
    </main>
   
    </div>
  )
}
