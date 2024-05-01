import { useTranslations } from "next-intl";
import Section from "../../shared/Section";
import SectionTitle from "../../shared/SectionTitle";

export default function Equipment() {
  const t = useTranslations("Equipment");

  return (
    <Section id="equipment">
      <SectionTitle>{t("title")}</SectionTitle>
    </Section>
  );
}
