import FilterCategories from "@/src/components/rent/categories/FilterCategories";
import Hero from "@/src/components/rent/hero/Hero";
import RentOfficesSection from "@/src/components/rent/rentOfficesSection/rentOfficesSection";
import WriteUs from "@/src/components/shared/writeUs/WriteUs";

export default function Offices() {
  return (
    <div className="pt-[72px]">
      <Hero />
      <FilterCategories />
      <RentOfficesSection />
      <WriteUs />
    </div>
  );
}
