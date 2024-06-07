import FilterCategories from "./filterCategories/FilterCategories";
import OfficesCatalog from "./officesCatalog/OfficesCatalog";

export default function OfficesCategoriesSection() {
  return (
    <section id="categories" className="scroll-mt-[72px] tablet:scroll-mt-20">
      <FilterCategories />
      <OfficesCatalog />
    </section>
  );
}
