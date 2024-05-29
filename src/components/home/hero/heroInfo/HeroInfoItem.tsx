import Image from "next/image";

interface HeroInfoItemProps {
  heroInfoItem: { quantity: string; description: string };
}

export default function HeroInfoItem({ heroInfoItem }: HeroInfoItemProps) {
  const { quantity, description } = heroInfoItem;
  return (
    <li
      className="absolute first:left-[5.55%] tablet:first:left-[20.8%] laptop:first:left-[30.5%] first:top-[43.5%] mobileXl:first:top-[33%] tablet:first:top-[31.4%] laptop:first:top-[30.4%] [&:nth-child(2)]:left-[25%] 
    tablet:[&:nth-child(2)]:left-[35.9%] laptop:[&:nth-child(2)]:left-[40.6%] [&:nth-child(2)]:top-[30.3%] mobileXl:[&:nth-child(2)]:top-[33%] tablet:[&:nth-child(2)]:top-[31.4%] laptop:[&:nth-child(2)]:top-[30.4%] [&:nth-child(3)]:right-[25%] 
    tablet:[&:nth-child(3)]:right-[35.9%] laptop:[&:nth-child(3)]:right-[40.6%] [&:nth-child(3)]:top-[30.3%] mobileXl:[&:nth-child(3)]:top-[33%] tablet:[&:nth-child(3)]:top-[31.4%] laptop:[&:nth-child(3)]:top-[30.4%] 
    last:top-[43.5%] mobileXl:last:top-[33%] tablet:last:top-[31.4%] laptop:last:top-[30.4%] last:right-[5.55%] tablet:last:right-[20.8%] laptop:last:right-[30.4%] flex flex-col items-center justify-center w-[24.44%] h-[20%] mobileXl:w-[30.5%] mobileXl:h-[24.96%] 
    tablet:w-[13%] tablet:h-[17.6%] laptop:w-[8.6%] laptop:h-[18%]"
    >
      <Image
        src={`/images/icons/hexagon.svg`}
        width="0"
        height="0"
        alt="hexagone image"
        className="absolute top-0 left-0 w-full h-full"
      />
      <span className="mb-2 text-xsb mobileXl:text-baseb laptop:text-lgb">
        {quantity}
      </span>
      <span className="text-xs mobileXl:text-base laptop:text-md">
        {description}
      </span>
    </li>
  );
}
