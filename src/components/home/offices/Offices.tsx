import { useTranslations } from "next-intl";
import Container from "../../shared/Container";
import SectionTitle from "../../shared/SectionTitle";

export default function Offices() {
  const t = useTranslations("Offices");

  return (
    <section id="offices" className="py-10 mb-10">
      <Container>
        <SectionTitle>{t("title")}</SectionTitle>
      </Container>
    </section>
  );
}
