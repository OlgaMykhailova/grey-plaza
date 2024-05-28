import Image from "next/image";

const MAP_URL = "https://maps.app.goo.gl/XdyPTk5aaQVUhvH78";

export default function Map() {
  return (
    <>
      <div className="tablet:hidden relative max-w-[560px] w-full mx-auto">
        <Image
          src={`/images/locationImages/googleMapMob.webp`}
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
          className="absolute top-[28%] left-[14%] w-[33.3%] h-auto"
        />
        <a
          href={MAP_URL}
          target="_blank"
          rel="noopener noreferrer nofollow"
          className="outline-none"
        >
          <Image
            src={`/images/icons/locationLarge.svg`}
            width="0"
            height="0"
            sizes="100%"
            alt="location icon"
            className="absolute top-[42%] right-[42%] w-[19%] h-auto"
          />
        </a>
      </div>
      <div className="hidden tablet:block laptop:hidden relative w-[99%]">
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
          className="outline-none"
        >
          <Image
            src={`/images/icons/locationLarge.svg`}
            width="0"
            height="0"
            sizes="100%"
            alt="location icon"
            className="absolute top-[27%] right-[29%] w-[10.7%] h-auto"
          />
        </a>
      </div>
    </>
  );
}
