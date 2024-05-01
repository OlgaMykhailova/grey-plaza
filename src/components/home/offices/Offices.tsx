import { useTranslations } from "next-intl";
import Section from "../../shared/Section";
import SectionTitle from "../../shared/SectionTitle";

export default function Offices() {
  const t = useTranslations("Offices");

  return (
    <Section id="offices">
      <SectionTitle>{t("title")}</SectionTitle>
    </Section>
  );
}
