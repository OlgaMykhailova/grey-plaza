import { useTranslations } from "next-intl";
import Container from "../../shared/Container";
import SectionTitle from "../../shared/SectionTitle";
import BenefitsList from "./BenefitsList";

export default function Benefits() {
  const t = useTranslations("Benefits");

  return (
    <section className="bg-primary">
      <Container>
        <SectionTitle className="text-white-text">{t("title")}</SectionTitle>
        <BenefitsList />
      </Container>
    </section>
  );
}
