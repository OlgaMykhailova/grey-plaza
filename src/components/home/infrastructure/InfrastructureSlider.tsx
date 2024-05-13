"use client";
import { SwiperSlide } from "swiper/react";
import SliderWrapper from "./SliderWrapper";
import SlideWrapper from "../../shared/slider/SlideWrapper";
import InfrastructureSliderCard from "./InfrastructureSliderCard";

const infrastructureList = [
  { image: "restZone.jpg", alt: "Rest Zone" },
  { image: "sportSimulatores.jpg", alt: "Sport Simulators" },
  { image: "cafe.jpg", alt: "Cafe" },
  { image: "parking.jpg", alt: "Parking" },
  { image: "warehouses.jpg", alt: "Warehouses" },
  { image: "atm.jpg", alt: "ATM" },
  { image: "post.jpg", alt: "Post" },
];

export default function InfrastructureSlider() {
  return (
    <SliderWrapper>
      {infrastructureList.map((infrastructureItem, idx) => (
        <SwiperSlide key={idx}>
          <SlideWrapper>
            <InfrastructureSliderCard infrastructureItem={infrastructureItem} />
          </SlideWrapper>
        </SwiperSlide>
      ))}
    </SliderWrapper>
  );
}
