import { useTranslations } from "next-intl";
import Container from "../../shared/Container";
import FilterButtonsList from "./FilterButtonsList";

export default function FilterCategories() {
  const t = useTranslations("Rent");

  return (
    <section
      id="categories"
      className="py-10 scroll-mt-[72px] tablet:scroll-mt-20"
    >
      <Container className="flex flex-col items-center">
        <div className="w-full tablet:w-[70%] laptop:w-full">
          <h2 className="mb-3 tablet:mb-4 laptop:mb-8 text-black text-lgb tablet:text-xlsb laptop:text-2xlsb">
            {t("chooseCategory")}
          </h2>
          <FilterButtonsList />
        </div>
      </Container>
    </section>
  );
}
