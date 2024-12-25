import Image from "next/image";
import Button from "./ui/Button";

export default function SubHero() {
  return (
    <section className="main-container h-screen py-10 flex flex-col md:flex-row justify-center items-center gap-10 overflow-x-hidden">
      <div className="relative sm:aspect-[9/16] sm:basis-1/3 sm:h-[600px] aspect-square w-full">
        <Image
          className="object-cover"
          src="/sub-hero-image-2.png"
          alt="subHero"
          fill
        />
      </div>
      <div className="flex flex-col justify-center items-center gap-4 basis-1/3">
        <h2 className="text-color sm:text-5xl text-3xl font-bold text-center">
          עיצוב פנים
          <br /> שמשאיר רושם
        </h2>
        <p className="text-sm font-normal text-center">
          אנחנו סטודיו עיצוב בתל אביב שעוסק בעיצוב חללים פרטיים ועסקיים
        </p>
        <div>
          <Button>בוא נעבוד ביחד</Button>
        </div>
      </div>
      <div className="relative aspect-[9/16] basis-1/3 h-[600px] hidden md:block translate-y-16">
        <Image
          className="object-cover"
          src="/sub-hero-image.png"
          alt="subHero"
          fill
        />
      </div>
    </section>
  );
}
