import HeroInfoItem from "./HeroInfoItemMobTab";

interface HeroInfoListProps {
  heroList: { quantity: string; description: string }[];
}

export default function HeroInfoListMobTab({ heroList }: HeroInfoListProps) {
  return (
    <ul className="laptop:hidden">
      {heroList.map((item, idx) => (
        <HeroInfoItem key={idx} heroInfoItem={item}></HeroInfoItem>
      ))}
    </ul>
  );
}
