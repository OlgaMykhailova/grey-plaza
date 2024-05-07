import { useTranslations } from "next-intl";
import Container from "../../shared/Container";
import SectionTitle from "../../shared/SectionTitle";
import LocationList from "./LocationList";

export default function Location() {
  const t = useTranslations("Location");

  return (
    <section className="py-10 mb-10 scroll-mt-[72px]">
      <Container>
        <SectionTitle>{t("title")}</SectionTitle>
        <p className="text-base mb-5">{t("description")}</p>
        <LocationList />
      </Container>
    </section>
  );
}
