import Image from "next/image";

interface HeroInfoItemProps {
  heroInfoItem: { quantity: string; description: string };
}

export default function HeroInfoItem({ heroInfoItem }: HeroInfoItemProps) {
  const { quantity, description } = heroInfoItem;
  return (
    <li className="absolute flex flex-col items-center justify-center w-[88px] h-[102px]">
      <Image
        src={`/images/icons/hexagon.svg`}
        width="0"
        height="0"
        alt="hexagone image"
        className="absolute top-0 left-0 w-[88px] h-[102px]"
      />
      <span className="mb-2 text-xsb">{quantity}</span>
      <span className="text-xs">{description}</span>
    </li>
  );
}
