import { useTranslations } from "next-intl";
import Container from "../../shared/Container";
import FilterButtonsList from "./FilterButtonsList";

export default function FilterCategories() {
  const t = useTranslations("Rent");

  return (
    <section className="py-10">
      <Container>
        <h2 className="mb-3 text-black text-lgb">{t("chooseCategory")}</h2>
        <FilterButtonsList />
      </Container>
    </section>
  );
}
