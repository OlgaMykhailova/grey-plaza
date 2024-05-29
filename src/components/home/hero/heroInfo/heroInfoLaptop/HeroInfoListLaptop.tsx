import HeroInfoItemLaptop from "./HeroInfoItemLaptop";

interface HeroInfoListProps {
  heroList: { quantity: string; description: string }[];
}

export default function HeroInfoListLaptop({ heroList }: HeroInfoListProps) {
  return (
    <ul className="hidden laptop:block relative w-[500px] h-[130px]">
      {heroList.map((item, idx) => (
        <HeroInfoItemLaptop key={idx} heroInfoItem={item}></HeroInfoItemLaptop>
      ))}
    </ul>
  );
}
