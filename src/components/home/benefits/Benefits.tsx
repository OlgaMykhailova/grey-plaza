import { useTranslations } from "next-intl";
import Section from "../../shared/Section";
import SectionTitle from "../../shared/SectionTitle";
import BenefitsList from "./BenefitsList";

export default function Benefits() {
  const t = useTranslations("Benefits");

  return (
    <div className="bg-primary">
      <Section id="benefits">
        <SectionTitle className="text-white-text">{t("title")}</SectionTitle>
        <BenefitsList />
      </Section>
    </div>
  );
}
