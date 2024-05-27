import { useTranslations } from "next-intl";
import Container from "../../shared/Container";
import SectionTitle from "../../shared/SectionTitle";
import OfficesCategoryList from "./OfficesCategoryList";

export default function Offices() {
  const t = useTranslations("Offices");

  return (
    <section
      id="offices"
      className="py-10 tablet:py-5 tablet:mb-5 scroll-mt-[72px]"
    >
      <Container>
        <SectionTitle>{t("title")}</SectionTitle>
        <div className="tablet:flex tablet:gap-x-4 mb-5 text-base">
          <p className="w-full">{t("descriptionPartOne")}</p>
          <p className="w-full">{t("descriptionPartTwo")}</p>
        </div>
        <OfficesCategoryList />
      </Container>
    </section>
  );
}
