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
      <div className="flex items-center justify-center w-full h-10 mt-3 text-baseb text-primary border border-primary">
        {categoryName}
      </div>
    </div>
  );
}
