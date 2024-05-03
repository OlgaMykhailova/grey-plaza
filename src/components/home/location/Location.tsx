import { useTranslations } from "next-intl";
import Container from "../../shared/Container";
import SectionTitle from "../../shared/SectionTitle";

export default function Location() {
  const t = useTranslations("Location");

  return (
    <section>
      <Container>
        <SectionTitle>{t("title")}</SectionTitle>
      </Container>
    </section>
  );
}
