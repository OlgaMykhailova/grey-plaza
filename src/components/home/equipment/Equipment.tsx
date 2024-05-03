import { useTranslations } from "next-intl";
import Image from "next/image";
import Container from "../../shared/Container";
import SectionTitle from "../../shared/SectionTitle";
import EquipmentList from "./EquipmentList";

export default function Equipment() {
  const t = useTranslations("Equipment");

  return (
    <section id="equipment" className="relative">
      <Image
        src={`/images/bgImages/hexagonsBg.svg`}
        width="0"
        height="0"
        alt="hexagons background"
        className="absolute top-[-40px] z-[-10] min-w-[313px] max-w-[414px] w-[84%] mobileXl:min-w-[414px] mobileXl:max-w-[514px] mobileXl:w-[70%] h-auto"
      />
      <Container>
        <SectionTitle>{t("title")}</SectionTitle>
        <EquipmentList />
      </Container>
    </section>
  );
}
