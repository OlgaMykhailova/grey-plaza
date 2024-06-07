"use client";
import { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperProps } from "swiper";
import { Thumbs, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/thumbs";
import "./officesSlider.css";

interface OfficesSliderProps {
  sliderList: string[];
}

export default function OfficesSlider({ sliderList }: OfficesSliderProps) {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperProps | null>(null);
  console.log(sliderList);
  return (
    <>
      <Swiper
        modules={[Thumbs, FreeMode]}
        slidesPerView={1}
        spaceBetween={22}
        grabCursor={true}
        centeredSlides={true}
        thumbs={{
          swiper: thumbsSwiper,
        }}
        speed={1000}
        loop={true}
        className="offices-slider"
      >
        {sliderList.map((photo, idx) => (
          <SwiperSlide key={idx}>
            <div className="swiper-slide-transform">
              <Image
                src={photo}
                width="0"
                height="0"
                alt="office photo"
                sizes="100%"
                className={`w-full h-full aspect-[296/169] object-cover`}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={4}
        slidesPerView={4}
        watchSlidesProgress={true}
        modules={[Thumbs, FreeMode]}
        className="thumb-slider"
      >
        {sliderList.map((photo, idx) => (
          <SwiperSlide key={idx}>
            <div className="swiper-slide-transform">
              <Image
                src={photo}
                width="0"
                height="0"
                alt="small office photo"
                sizes="100%"
                className={`w-full h-full aspect-[296/169] object-cover`}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
