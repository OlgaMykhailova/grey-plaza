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

const officesList = [
  {
    image: "image1.jpg",
    alt: "image1",
  },
  {
    image: "image2.jpg",
    alt: "image2",
  },
  {
    image: "image3.jpg",
    alt: "image3",
  },
  {
    image: "image4.jpg",
    alt: "image4",
  },
  {
    image: "image5.jpg",
    alt: "image5",
  },
  {
    image: "image6.jpg",
    alt: "image6",
  },
];

export default function OfficesSlider() {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperProps | null>(null);
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
        {officesList.map(({ image, alt }, idx) => (
          <SwiperSlide key={idx}>
            <Image
              src={`/images/officesImages/${image}`}
              width="0"
              height="0"
              alt={alt}
              sizes="100%"
              className={`w-full h-full`}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={4}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[Thumbs, FreeMode]}
        className="thumb-slider"
      >
        {officesList.map(({ image, alt }, idx) => (
          <SwiperSlide key={idx}>
            <Image
              src={`/images/officesImages/${image}`}
              width="0"
              height="0"
              alt={alt}
              sizes="100%"
              className={`w-full h-full`}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
