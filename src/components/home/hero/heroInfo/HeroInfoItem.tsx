import Image from "next/image";

interface HeroInfoItemProps {
  heroInfoItem: { quantity: string; description: string };
}

export default function HeroInfoItem({ heroInfoItem }: HeroInfoItemProps) {
  const { quantity, description } = heroInfoItem;
  return (
    <li className="absolute first:left-[calc(50%-88px-72px)] first:top-[233px] [&:nth-child(2)]:left-[calc(50%-88px-2px)] [&:nth-child(2)]:top-[166px] [&:nth-child(3)]:right-[calc(50%-88px-2px)] [&:nth-child(3)]:top-[166px] last:top-[233px] last:right-[calc(50%-88px-72px)] flex flex-col items-center justify-center w-[88px] h-[102px]">
      <Image
        src={`/images/icons/hexagon.svg`}
        width="0"
        height="0"
        alt="hexagone image"
        className="absolute top-0 left-0 w-full h-full"
      />
      <span className="mb-2 text-xsb">{quantity}</span>
      <span className="text-xs">{description}</span>
    </li>
  );
}
