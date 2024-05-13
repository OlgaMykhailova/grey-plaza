"use client";
import { SwiperSlide } from "swiper/react";
import SlideWrapper from "../../shared/slider/SlideWrapper";
import GallerySliderCard from "./GallerySliderCard";
import SliderWrapper from "../../shared/slider/SliderWrapper";

const galleryList = [
  { image: "first.jpg", alt: "" },
  { image: "second.jpg", alt: "" },
  { image: "third.jpg", alt: "" },
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
