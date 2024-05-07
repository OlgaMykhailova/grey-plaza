import Image from "next/image";

export default function Map() {
  return (
    <div className="relative">
      <Image
        src={`/images/map.jpg`}
        width="0"
        height="0"
        sizes="100%"
        alt="map"
        className="w-full h-auto"
      />
      <a
        href="https://maps.app.goo.gl/XdyPTk5aaQVUhvH78"
        target="_blank"
        rel="noopener noreferrer"
        className="outline-none"
      >
        <Image
          src={`/images/icons/locationLarge.svg`}
          width="0"
          height="0"
          sizes="100%"
          alt="location icon"
          className="absolute top-[36%] right-[26%] w-[19%] h-auto"
        />
      </a>
    </div>
  );
}
