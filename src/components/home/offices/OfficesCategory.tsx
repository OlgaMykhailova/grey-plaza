import NavigationButton from "../../shared/buttons/NavigationButton";
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
      <NavigationButton className="mt-3">{categoryName}</NavigationButton>
    </div>
  );
}
