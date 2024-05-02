import { useTranslations } from "next-intl";
import Section from "../Section";
import SectionTitle from "../../shared/SectionTitle";

export default function WriteUs() {
  const t = useTranslations("WriteUs");

  return (
    <Section id="contacts">
      <SectionTitle className="text-white-text">{t("subTitle")}</SectionTitle>
    </Section>
  );
}
