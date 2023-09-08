import ImageGallery from "@/components/molecules/ImageGallery"
import {imageMagnifierData} from '@/mockData/imageMagnifier'


export default function Home() {

  return (
    <main className='p-5'>
      <ImageGallery data={imageMagnifierData}/>
    </main>
  )
}
