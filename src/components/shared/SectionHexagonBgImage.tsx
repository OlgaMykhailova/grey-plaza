import Image from "next/image";

export default function SectionHexagonBgImage() {
  return (
    <Image
      src={`/images/bgImages/hexagonsBg.svg`}
      width="0"
      height="0"
      alt="hexagons background"
      className="absolute top-0 left-[calc((100%-313px)/2)] tablet:left-[calc((100%-313px-9px)/2)] z-[-10] w-[313px] h-auto"
    />
  );
}
