import FilterButton from "../../shared/buttons/FilterButton";
import OfficesSlider from "./OfficesSlider";

interface OfficesCategoryProps {
  categoryName: string;
  sliderList: {
    image: string;
    alt: string;
  }[];
}

export default function OfficesCategory({
  sliderList,
  categoryName,
}: OfficesCategoryProps) {
  return (
    <div className="tablet:w-[48.9%] laptop:w-[32%] tablet:aspect-[356/320] laptop:aspect-[390/347]">
      <OfficesSlider sliderList={sliderList} />
      <FilterButton className="tablet:h-[12.5%] mt-[3.43%]">
        {categoryName}
      </FilterButton>
    </div>
  );
}
