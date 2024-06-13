"use client";
import { SwiperSlide } from "swiper/react";
import SlideWrapper from "../../../shared/SlideWrapper";
import GallerySliderCard from "./GallerySliderCard";
import SliderWrapper from "./SliderWrapper";

interface GallerySliderProps {
  galleryList: { image: string; alt: string }[];
  className?: string;
}

export default function GallerySlider({
  galleryList,
  className = "",
}: GallerySliderProps) {
  return (
    <div className={className}>
      <SliderWrapper>
        {galleryList.map((galleryItem, idx) => (
          <SwiperSlide key={idx}>
            <div className="swiper-slide-transform">
              <SlideWrapper className="p-4">
                <GallerySliderCard galleryItem={galleryItem} />
              </SlideWrapper>
            </div>
          </SwiperSlide>
        ))}
      </SliderWrapper>
    </div>
  );
}
