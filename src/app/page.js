import Carousel from "@/components/atoms/Crousel";
import Image from "next/image";
import { crouselData } from "@/mockData/crouselData";

export default function Home() {
  return (
    <main className="py-4">
      <Carousel
        options={{
          dragFree: true,
          containScroll: "trimSnaps",
        }}
        navigationButtons={true}
      >
        {crouselData.map(({id, src, category}) => (
          
          <div
            className="grow-0 shrink-0 basis-[calc(100%/3)] px-2 relative rounded-lg"
            key={id}
          >
            <img
              className="h-[26rem] w-full rounded-lg"
              src={src}
              alt="Your alt text"
            />
            <button className="absolute top-4 left-4 font-manrope font-normal text-base lowercase border border-black rounded-3xl px-6 py-2">
              {category}
            </button>
          </div>
        ))}
      </Carousel>
    </main>
  );
}
