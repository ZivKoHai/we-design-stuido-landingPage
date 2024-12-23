"use client";

import EmblaCarousel from "@/app/embla/emblaCarousel";
import Image from "next/image";

export default function Slider({ images }: { images: string[] }) {
  return (
    <div className="w-full h-fit overflow-hidden">
      <EmblaCarousel>
        {images.map((slide, index) => (
          <div className="embla__slide" key={index}>
            <div className="embla__parallax">
              <div className="embla__parallax__layer ">
                <Image
                  className="embla__slide__img embla__parallax__img"
                  src={`/sliderImages/${slide}`}
                  alt="Your alt text"
                  height={500}
                  width={500}
                />
              </div>
            </div>
          </div>
        ))}
      </EmblaCarousel>
    </div>
  );
}

//   <div
//     className="flex transition-transform duration-300 ease-in-out w-full h-full"
//     style={{
//       transform: `translateX(-${imageIndex * (100 / visibleSlides)}%)`,
//       width: `${images.length * (100 / visibleSlides)}%`,
//     }}
//   >
//     {images.map((image, index) => (
//       <div
//         key={index}
//         className="w-[calc(100% / visibleSlides)] h-full flex-shrink-0 relative"
//       >
//         <Image
//           src={`/sliderImages/${image}`}
//           alt="latest-projects"
//           fill
//           className="object-cover "
//         />
//       </div>
//     ))}
//   </div>
//   <button
//     className="absolute top-[50%] left-0 translate-y-[-50%] z-50 bg-black px-2 py-1 font-bold text-white"
//     onClick={handlePrev}
//     disabled={imageIndex === 0}
//   >
//     prev
//   </button>
//   <button
//     className="absolute top-[50%] right-0 translate-y-[-50%] z-50 bg-black px-2 py-1 font-bold text-white"
//     onClick={handleNext}
//     disabled={imageIndex === images.length - visibleSlides}
//   >
//     next
//   </button>
