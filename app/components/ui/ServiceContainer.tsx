import WeBadge from "./weBadge";
import Image from "next/image";
import WeH2 from "./weH2";
import WeP from "./weP";
import Divider from "./Divider";

interface Service {
  badge: string;
  name: string;
  description: string;
  image: string;
  alt: string;
}

export default function ServiceContainer({ service }: { service: Service }) {
  return (
    <div className="w-full h-full flex flex-col md:flex-row gap-5  justify-start items-end min-h-[400px] ">
      <div className="relative h-[300px] sm:h-[400px] w-full md:w-1/2">
        <Image
          src={service.image}
          alt={service.alt}
          fill
          className="object-cover"
        />
      </div>
      <div className="flex flex-col gap-5 justify-start items-end basis-1/2">
        <WeBadge>{service.badge}</WeBadge>
        <WeH2>{service.name}</WeH2>
        <WeP>{service.description}</WeP>
        <Divider />
      </div>
    </div>
  );
}
