import OfficesSlider from "../../shared/officesSlider/OfficesSlider";
import RentOfficesCardThumb from "./RentOfficesCardThumb";
import SlideWrapper from "../../shared/slider/SlideWrapper";

interface RentOfficesCardProps {
  office: {
    id: string;
    area: string;
    building: string;
    purpose: string;
    photos: string[];
  };
}

export default function RentOfficesCard({ office }: RentOfficesCardProps) {
  const { photos } = office;
  return (
    <div>
      <SlideWrapper className="p-3 laptop:p-5">
        <OfficesSlider sliderList={photos} />
        <RentOfficesCardThumb office={office} />
      </SlideWrapper>
    </div>
  );
}
