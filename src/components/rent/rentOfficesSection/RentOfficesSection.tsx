import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";
import Container from "../../shared/Container";
import TextButton from "../../shared/buttons/TextButton";

export default function RentOfficesSection() {
  const t = useTranslations("Rent");
  const locale = useLocale();

  return (
    <section className="py-10 scroll-mt-[72px] tablet:scroll-mt-20">
      <Container className="flex flex-col items-center">
        <h2 className="w-full mb-5 text-black text-left text-lgb">
          {t("offices")}
          {t("category1000")}
        </h2>
        <Link href={`/${locale}/rent#categories`} className="outline-none">
          <TextButton className="mt-8">{t("chooseAnotherCategory")}</TextButton>
        </Link>
      </Container>
    </section>
  );
}
