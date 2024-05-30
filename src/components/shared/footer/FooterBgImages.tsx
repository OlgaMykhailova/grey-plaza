import Image from "next/image";

export default function FooterBgImages() {
  return (
    <div className="hidden laptop:block relative w-[129px] h-[296px]">
      <Image
        src={`/images/icons/hexagon.svg`}
        width="0"
        height="0"
        alt="hexagons background"
        className="absolute top-0 right-0 w-[88px] h-[102px]"
      />
      <Image
        src={`/images/icons/hexagon.svg`}
        width="0"
        height="0"
        alt="hexagons background"
        className="absolute top-[97px] left-0 w-[88px] h-[102px]"
      />
      <Image
        src={`/images/icons/hexagon.svg`}
        width="0"
        height="0"
        alt="hexagons background"
        className="absolute bottom-0 right-0 w-[88px] h-[102px]"
      />
    </div>
  );
}
