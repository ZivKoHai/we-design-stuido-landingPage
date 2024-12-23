import Image from "next/image";
import Link from "next/link";
export default function NotFound() {
  return (
    <div className="h-screen flex flex-col sm:flex-row">
      <div className="basis-1/2 flex flex-col gap-4 justify-center items-center">
        <h1 className="text-7xl font-bold">404</h1>
        <p className="text-lg">הדף לא נמצא</p>
        <Link
          href="/"
          className="text-primary border-b-[0.5px] border-primary border-foreground"
        >
          לדף הבית
        </Link>
      </div>
      <div className="basis-1/2 relative">
        <Image
          src="/sliderImages/we___designstudios_1712394084_3340126131049699511_65377472209.jpg"
          alt="not found"
          fill
          sizes="100vw"
          className="object-cover"
        />
      </div>
    </div>
  );
}
