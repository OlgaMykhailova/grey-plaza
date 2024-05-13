import { useTranslations } from "next-intl";
import Container from "../../shared/Container";
import SectionTitle from "../../shared/SectionTitle";
import InfrastructureSlider from "./infrastructureSlider/InfrastructureSlider";

export default function Infrastructure() {
  const t = useTranslations("Infrastructure");

  return (
    <section id="infrastructure" className="py-10 mb-10 scroll-mt-[72px]">
      <Container>
        <SectionTitle>{t("title")}</SectionTitle>
        <p className="mb-5 text-base text-grey">{t("description")}</p>
      </Container>
      <InfrastructureSlider />
    </section>
  );
}
