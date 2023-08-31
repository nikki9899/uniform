import Dropdown from "@/components/molecules/Dropdown"
import ImageGallery from "@/components/molecules/ImageGallery"


const data = [
  {id: '10', img:'/ImageGallery/first.jpg', alt:'Phone Image'},
  {id: '11',img:'/ImageGallery/second.jpg', alt:'Phone Image'},
  {id: '12',img:'/ImageGallery/third.jpg', alt:'Phone Image'},
  {id: '13',img:'/ImageGallery/forth.jpg', alt:'Phone Image'}

]

export default function Home() {
  return (
    <main className='p-5'>
      <ImageGallery data={data}/>
      <Dropdown/>
    </main>
  )
}
