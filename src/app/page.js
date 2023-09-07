import EmblaCarousel from '@/components/atoms/Crousel'
import Image from 'next/image'

const OPTIONS = { dragFree: true, containScroll: 'trimSnaps' }
const SLIDE_COUNT = 8
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

export default function Home() {
  return (
    <main className='py-4'>
      
    <EmblaCarousel slides={SLIDES} options={OPTIONS}/>
    
    </main>
  )
}
