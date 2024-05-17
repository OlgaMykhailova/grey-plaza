import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";
import Container from "../../shared/Container";
import FilterButtonsList from "./FilterButtonsList";
import TextButton from "../../shared/buttons/TextButton";

export default function FilterCategories() {
  const t = useTranslations("Rent");
  const locale = useLocale();

  return (
    <section id="categories" className="py-10 scroll-mt-[72px]">
      <Container className="flex flex-col items-center">
        <div>
          <h2 className="mb-3 text-black text-lgb">{t("chooseCategory")}</h2>
          <FilterButtonsList />
        </div>
        <Link href={`/${locale}/rent#categories`}>
          <TextButton className="mt-8">{t("chooseAnotherCategory")}</TextButton>
        </Link>
      </Container>
    </section>
  );
}
