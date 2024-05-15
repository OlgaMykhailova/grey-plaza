import Image from "next/image";

interface HeroInfoItemProps {
  heroInfoItem: { quantity: string; description: string };
}

export default function HeroInfoItem({ heroInfoItem }: HeroInfoItemProps) {
  const { quantity, description } = heroInfoItem;
  return (
    <li className="absolute first:left-[5.55%] first:top-[43.5%] [&:nth-child(2)]:left-[25%] [&:nth-child(2)]:top-[30.3%] [&:nth-child(3)]:right-[25%] [&:nth-child(3)]:top-[30.3%] last:top-[43.5%] last:right-[5.55%] flex flex-col items-center justify-center w-[24.44%] h-[20%]">
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
