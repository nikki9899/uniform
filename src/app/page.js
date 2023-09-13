import ImageCard from '../components/atoms/ImageCard';
import PopularCard from '../components/atoms/PopularCard'
import PopularProducts from '@/components/molecules/popularProducts';

export default function Home() {

  return (
    <div>
      <main className="flex min-h-screen flex-col items-center justify-between p-[60px]">
        <PopularProducts />
        {/* <PopularCard productTitle="Black Full body suit" productPrice="5000 INR" productType="full body resistance"/>
        {/* <ImageCard */}
          {/* iconDisplay="flex" 
          classnames="w-[308px] h-[418px] rounded-2xl shrink-0 back ml-2 bg-[url('/Images/productImage1.png')]"
        /> */} 
      </main>
    </div>
  );
}
