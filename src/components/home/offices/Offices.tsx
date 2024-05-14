import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";
import Container from "../../shared/Container";
import SectionTitle from "../../shared/SectionTitle";
import Button from "../../shared/Button";
import OfficesCategoryList from "./OfficesCategoryList";

export default function Offices() {
  const t = useTranslations("");
  const locale = useLocale();

  return (
    <section
      id="offices"
      className="py-10 scroll-mt-[72px] bg-white-bgSecondary"
    >
      <Container>
        <SectionTitle>{t("Offices.title")}</SectionTitle>
        <p className="text-base text-grey">{t("Offices.description")}</p>
        <OfficesCategoryList />
        <Link href="/offices" locale={locale}>
          <Button className="mt-4 mx-auto">{t("Buttons.viewAll")}</Button>
        </Link>
      </Container>
    </section>
  );
}
