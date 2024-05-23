import { useTranslations } from "next-intl";
import HeroInfoItem from "./HeroInfoItem";

export default function HeroInfoList() {
  const t = useTranslations("Hero");

  const heroList = [
    { quantity: t("floorsQuantity"), description: t("floorsDescription") },
    { quantity: t("GLAQuantity"), description: t("GLADescription") },
    {
      quantity: t("parkingPlacesQuantity"),
      description: t("parkingPlacesDescription"),
    },
    { quantity: t("buildingQuantity"), description: t("buildingDescription") },
  ];

  return (
    <ul>
      {heroList.map((item, idx) => (
        <HeroInfoItem key={idx} heroInfoItem={item}></HeroInfoItem>
      ))}
    </ul>
  );
}
