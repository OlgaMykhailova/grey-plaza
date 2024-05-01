import { useTranslations } from "next-intl";
import Section from "../../shared/Section";
import SectionTitle from "../../shared/SectionTitle";

export default function Location() {
  const t = useTranslations("Location");

  return (
    <Section>
      <SectionTitle>{t("title")}</SectionTitle>
    </Section>
  );
}
