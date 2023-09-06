import {CircularDownButton, CircularUpButton} from '@/components/atoms/button';
import NavbarMenu from "@/components/atoms/NavbarMenu"
import ImageGallery from "@/components/molecules/ImageGallery"


const data = [
  {id: '10', src:'/ImageGallery/first.jpg', alt:'Phone Image'},
  {id: '11',src:'/ImageGallery/second.jpg', alt:'Phone Image'},
  {id: '12',src:'/ImageGallery/third.jpg', alt:'Phone Image'},
  {id: '13',src:'/ImageGallery/forth.jpg', alt:'Phone Image'}

]

export default function Home() {
  return (
    <main className='p-5'>
      <ImageGallery data={data}/>
      {/* <NavbarMenu/> */}
    </main>
  )
}
