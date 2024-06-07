import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";
import Container from "../../shared/Container";
import TextButton from "../../shared/buttons/TextButton";
import RentOfficesList from "./RentOfficesList";
import RentOfficesTitle from "./RentOfficesTitle";

export default function RentOfficesSection() {
  const t = useTranslations("Rent");
  const locale = useLocale();

  return (
    <section className="py-10 scroll-mt-[72px] tablet:scroll-mt-20 bg-white-bgSecondary">
      <Container>
        <RentOfficesTitle />
        <RentOfficesList />
        <Link
          href={`/${locale}/rent#categories`}
          className="block w-[320px] h-10 mt-8 mx-auto outline-none"
        >
          <TextButton>{t("chooseAnotherCategory")}</TextButton>
        </Link>
      </Container>
    </section>
  );
}
