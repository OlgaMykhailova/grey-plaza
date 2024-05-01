import { useTranslations } from "next-intl";
import Section from "../../shared/Section";
import SectionTitle from "../../shared/SectionTitle";
import Button from "../../shared/Button";

export default function Infrastructure() {
  const t = useTranslations("Infrastructure");

  return (
    <Section id="infrastructure">
      <SectionTitle>{t("title")}</SectionTitle>
    </Section>
  );
}
