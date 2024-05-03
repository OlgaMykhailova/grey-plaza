import { useTranslations } from "next-intl";
import Container from "../Container";
import SectionTitle from "../../shared/SectionTitle";

export default function WriteUs() {
  const t = useTranslations("WriteUs");

  return (
    <section id="write-us">
      <Container>
        <SectionTitle className="text-white-text">{t("subTitle")}</SectionTitle>
      </Container>
    </section>
  );
}
