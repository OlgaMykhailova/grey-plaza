import { useTranslations } from "next-intl";
import Container from "../../shared/Container";
import SectionTitle from "../../shared/SectionTitle";
import EquipmentList from "./EquipmentList";
import SectionHexagonBgImage from "../../shared/sectionHexagonBgImage";

export default function Equipment() {
  const t = useTranslations("Equipment");

  return (
    <section
      id="equipment"
      className="relative pt-20 pb-10 mb-10 scroll-mt-[72px]"
    >
      <SectionHexagonBgImage />
      <Container>
        <SectionTitle>{t("title")}</SectionTitle>
        <EquipmentList />
      </Container>
    </section>
  );
}
