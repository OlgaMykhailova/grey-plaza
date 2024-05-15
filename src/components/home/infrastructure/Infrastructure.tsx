import { useTranslations } from "next-intl";
import Container from "../../shared/Container";
import SectionTitle from "../../shared/SectionTitle";
import InfrastructureSlider from "./infrastructureSlider/InfrastructureSlider";
import TextButton from "../../shared/TextButton";

export default function Infrastructure() {
  const t = useTranslations();

  return (
    <section id="infrastructure" className="pt-10 mb-10 scroll-mt-[72px]">
      <Container>
        <SectionTitle>{t("Infrastructure.title")}</SectionTitle>
        <p className="mb-5 text-base">{t("Infrastructure.description")}</p>
      </Container>
      <InfrastructureSlider />
      <Container className="flex justify-center">
        <TextButton className="mt-16">{t("Buttons.schema")}</TextButton>
      </Container>
    </section>
  );
}
