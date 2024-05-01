import { useTranslations } from "next-intl";
import Section from "../../shared/Section";
import SectionTitle from "../../shared/SectionTitle";

export default function Benefits() {
  const t = useTranslations("Benefits");

  return (
    <Section id="benefits">
      <SectionTitle className="text-white-text">{t("title")}</SectionTitle>
    </Section>
  );
}
