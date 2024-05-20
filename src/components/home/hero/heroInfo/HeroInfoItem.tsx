import Image from "next/image";

interface HeroInfoItemProps {
  heroInfoItem: { quantity: string; description: string };
}

export default function HeroInfoItem({ heroInfoItem }: HeroInfoItemProps) {
  const { quantity, description } = heroInfoItem;
  return (
    <li
      className="absolute first:left-[5.55%] tablet:first:left-[20.8%] first:top-[43.5%] tablet:first:top-[25%] [&:nth-child(2)]:left-[25%] 
    tablet:[&:nth-child(2)]:left-[35.9%] [&:nth-child(2)]:top-[30.3%] tablet:[&:nth-child(2)]:top-[25%] [&:nth-child(3)]:right-[25%] 
    tablet:[&:nth-child(3)]:right-[35.9%] [&:nth-child(3)]:top-[30.3%] tablet:[&:nth-child(3)]:top-[25%] last:top-[43.5%] tablet:last:top-[25%] 
    last:right-[5.55%] tablet:last:right-[20.8%] flex flex-col items-center justify-center w-[24.44%] h-[20%] tablet:w-[13%] tablet:h-[14%]"
    >
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
