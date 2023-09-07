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
        {crouselData.map((item) => (
          <div
            className="grow-0 shrink-0 basis-[calc(100%/3)] px-2 relative rounded-lg"
            key={item.id}
          >
            <img
              className="h-[26rem] w-full rounded-lg"
              src={item.src}
              alt="Your alt text"
            />
            <button className="absolute top-4 left-4 font-manrope font-normal text-base lowercase border border-black rounded-3xl px-6 py-2">
              {item.category}
            </button>
          </div>
        ))}
      </Carousel>
    </main>
  );
}
