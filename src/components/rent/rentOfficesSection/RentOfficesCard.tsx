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
  const sliderList = office.photos.map((photo) => ({
    image: photo,
    alt: "office photo",
  }));

  return (
    <div>
      <SlideWrapper>
        <OfficesSlider sliderList={sliderList} />
        <RentOfficesCardThumb office={office} />
      </SlideWrapper>
    </div>
  );
}
