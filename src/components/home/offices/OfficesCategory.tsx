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
    <div>
      <OfficesSlider sliderList={sliderList} />
      <FilterButton className="mt-3">{categoryName}</FilterButton>
    </div>
  );
}
