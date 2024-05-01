import { useTranslations } from "next-intl";
import Image from "next/image";
import Section from "../../shared/Section";
import SectionTitle from "../../shared/SectionTitle";
import EquipmentList from "./EquipmentList";

export default function Equipment() {
  const t = useTranslations("Equipment");

  return (
    <div className="relative">
      <Image
        src={`/images/bgImages/hexagonsBg.svg`}
        width="0"
        height="0"
        alt="hexagons background"
        className="absolute top-[-40px] z-[-10] min-w-[313px] max-w-[414px] w-[87%] h-auto"
      />
      <Section id="equipment">
        <SectionTitle>{t("title")}</SectionTitle>
        <EquipmentList />
      </Section>
    </div>
  );
}
