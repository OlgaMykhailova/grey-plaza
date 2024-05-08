import { useTranslations } from "next-intl";
import SectionTitle from "../../shared/SectionTitle";
import Container from "../../shared/Container";

export default function Gallery() {
  const t = useTranslations("Gallery");

  return (
    <section id="gallery" className="py-10 mb-10 scroll-mt-[72px]">
      <Container>
        <SectionTitle>{t("title")}</SectionTitle>
      </Container>
    </section>
  );
}
