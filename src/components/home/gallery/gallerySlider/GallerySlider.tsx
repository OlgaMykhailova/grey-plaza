"use client";
import { SwiperSlide } from "swiper/react";
import SlideWrapper from "../../../shared/slider/SlideWrapper";
import GallerySliderCard from "./GallerySliderCard";
import SliderWrapper from "./SliderWrapper";

const galleryList = [
  { image: "buildingTopView.jpg", alt: "Building Top View" },
  { image: "buildingFrontView.jpg", alt: "Building Front View" },
  { image: "restGardenArea.jpg", alt: "Rest Garden Area" },
  { image: "hammoks.jpg", alt: "Hammoks" },
  { image: "gardenPath.jpg", alt: "Garden Path" },
  { image: "gazebos.jpg", alt: "Gazebos" },
  { image: "sportSimulators.jpg", alt: "Sport Simulators" },
  { image: "barbeque.jpg", alt: "Barbeque" },
  { image: "hall.jpg", alt: "Hall" },
  { image: "cafeTerrace.jpg", alt: "Cafe Terrace" },
  { image: "winterGarden.jpg", alt: "Winter Garden" },
  { image: "stairs.jpg", alt: "Stairs" },
  { image: "kitchen.jpg", alt: "Kitchen" },
];

export default function GallerySlider() {
  return (
    <SliderWrapper>
      {galleryList.map((galleryItem, idx) => (
        <SwiperSlide key={idx}>
          <SlideWrapper>
            <GallerySliderCard galleryItem={galleryItem} />
          </SlideWrapper>
        </SwiperSlide>
      ))}
    </SliderWrapper>
  );
}
