import Image from "next/image";

interface HeroInfoItemProps {
  heroInfoItem: { quantity: string; description: string };
}

export default function HeroInfoItem({ heroInfoItem }: HeroInfoItemProps) {
  const { quantity, description } = heroInfoItem;
  return (
    <li className="absolute first:left-[5.6%] first:top-[34.4%] [&:nth-child(2)]:left-[24.4%] [&:nth-child(2)]:top-[24.5%] [&:nth-child(3)]:right-[24.4%] [&:nth-child(3)]:top-[24.5%] last:top-[34.4%] last:right-[5.6%] flex flex-col items-center justify-center min-w-[88px] w-[24.4%] min-h-[102px] h-[15%]">
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
