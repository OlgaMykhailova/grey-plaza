import { useTranslations } from "next-intl";
import Container from "../../shared/Container";
import SectionTitle from "../../shared/SectionTitle";
import LocationList from "./LocationList";
import SectionHexagonBgImage from "../../shared/sectionHexagonBgImage";
import Map from "./Map";

export default function Location() {
  const t = useTranslations("Location");

  return (
    <section className="relative pt-[80px] pb-10 mb-10 scroll-mt-[72px]">
      <SectionHexagonBgImage />
      <Container className="flex flex-col items-center">
        <SectionTitle>{t("title")}</SectionTitle>
        <p className="text-base mb-5">{t("description")}</p>
        <LocationList />
      </Container>
      <Map />
    </section>
  );
}
