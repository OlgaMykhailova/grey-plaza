import Image from "next/image";

export default function SectionHexagonBgImage() {
  return (
    <Image
      src={`/images/bgImages/hexagonsBg.svg`}
      width="0"
      height="0"
      alt="hexagons background"
      className="absolute top-0 left-0 z-[-10] min-w-[313px] max-w-[414px] w-[84%] mobileXl:min-w-[414px] mobileXl:max-w-[514px] mobileXl:w-[70%] h-auto"
    />
  );
}
