import Image from "next/image";
import { MAP_URL } from "@/src/constants/mapUrl";

export default function MapTabLaptop() {
  return (
    <>
      <div className="hidden tablet:block laptop:hidden relative z-10 w-full">
        <Image
          src={`/images/locationImages/googleMapTab.webp`}
          width="0"
          height="0"
          sizes="100%"
          alt="map"
          className="w-full h-auto"
        />
        <Image
          src={`/images/icons/logoDark.svg`}
          width="0"
          height="0"
          sizes="100%"
          alt="location icon"
          className="absolute top-[13%] left-[41%] w-[23%] h-auto"
        />
        <a
          href={MAP_URL}
          target="_blank"
          rel="noopener noreferrer nofollow"
          className="block absolute top-[27%] right-[29%] w-[10.7%] outline-none"
        >
          <Image
            src={`/images/icons/locationLarge.svg`}
            width="0"
            height="0"
            sizes="100%"
            alt="location icon"
            className="w-full h-auto"
          />
        </a>
      </div>

      <div className="hidden laptop:block relative z-10 w-[52%]">
        <Image
          src={`/images/locationImages/googleMapLaptop.webp`}
          width="0"
          height="0"
          sizes="100%"
          alt="map"
          className="w-full h-auto"
        />
        <Image
          src={`/images/icons/logoDark.svg`}
          width="0"
          height="0"
          sizes="100%"
          alt="location icon"
          className="absolute top-[20%] left-[51%] w-[23%] h-auto"
        />
        <a
          href={MAP_URL}
          target="_blank"
          rel="noopener noreferrer nofollow"
          className="absolute top-[35%] right-[16%] w-[10.7%] outline-none"
        >
          <Image
            src={`/images/icons/locationLarge.svg`}
            width="0"
            height="0"
            sizes="100%"
            alt="location icon"
            className="w-full h-auto"
          />
        </a>
      </div>
    </>
  );
}
