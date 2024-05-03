import { useTranslations } from "next-intl";
import Container from "../../shared/Container";
import SectionTitle from "../../shared/SectionTitle";

export default function Infrastructure() {
  const t = useTranslations("Infrastructure");

  return (
    <section id="infrastructure" className="py-10 mb-10">
      <Container>
        <SectionTitle>{t("title")}</SectionTitle>
      </Container>
    </section>
  );
}
