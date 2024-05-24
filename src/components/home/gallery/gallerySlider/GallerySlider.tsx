"use client";
import { SwiperSlide } from "swiper/react";
import SlideWrapper from "../../../shared/slider/SlideWrapper";
import GallerySliderCard from "./GallerySliderCard";
import SliderWrapper from "./SliderWrapper";

const galleryList = [
  { image: "winterGarden.jpg", alt: "Winter Garden" },
  { image: "stairs.jpg", alt: "Stairs" },
  { image: "buildingTopView.jpg", alt: "Building Top View" },
  { image: "hall.jpg", alt: "Hall" },
  { image: "buildingFrontView.jpg", alt: "Building Front View" },
  { image: "restGardenArea.jpg", alt: "Rest Garden Area" },
  { image: "hammoks.jpg", alt: "Hammoks" },
  { image: "gardenPath.jpg", alt: "Garden Path" },
  { image: "gazebos.jpg", alt: "Gazebos" },
  { image: "sportSimulators.jpg", alt: "Sport Simulators" },
  { image: "barbeque.jpg", alt: "Barbeque" },
  { image: "cafe.jpg", alt: "Cafe" },
  { image: "cafeTerrace.jpg", alt: "Cafe Terrace" },
  { image: "kitchen.jpg", alt: "Kitchen" },
];

export default function GallerySlider() {
  return (
    <SliderWrapper>
      {galleryList.map((galleryItem, idx) => (
        <SwiperSlide key={idx}>
          <div className="swiper-slide-transform">
          <SlideWrapper className="w-full">
            <GallerySliderCard galleryItem={galleryItem} />
          </SlideWrapper>
          </div>
        </SwiperSlide>
      ))}
    </SliderWrapper>
  );
}
