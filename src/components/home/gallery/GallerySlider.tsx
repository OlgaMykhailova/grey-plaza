"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar, EffectCreative, EffectCoverflow } from "swiper/modules";
import Container from "../../shared/Container";
import GalleryWrapper from "./GalleryWrapper";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/effect-creative";
import "swiper/css/effect-coverflow";
import "./slider.css";

export default function GallerySlider() {
  return (
    <Container>
      <Swiper
        modules={[Scrollbar, EffectCreative, EffectCoverflow]}
        scrollbar={{ draggable: true }}
        slidesPerView={1.4}
        grabCursor={true}
        centeredSlides={true}
        effect={"coverflow"}
        coverflowEffect={{
          rotate: 0,
          scale: 0.7,
          stretch: 16,
          depth: 0,
          modifier: 1,
          slideShadows: false,
        }}
        // creativeEffect={{
        //   prev: {
        //     // will set `translateZ(-400px)` on previous slides
        //     translate: [0, 0, -400],
        //     scale: 0.5,
        //   },
        //   next: {
        //     // will set `translateX(100%)` on next slides
        //     translate: ["100%", 0, 0],
        //     scale: 0.5,
        //   },
        // }}
        speed={1000}
        loop={true}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <GalleryWrapper>
            <Image
              src={`/images/galleryImages/first.jpg`}
              width="0"
              height="0"
              alt=""
              sizes="100%"
              className={`w-full h-full`}
            />
          </GalleryWrapper>
        </SwiperSlide>

        <SwiperSlide>
          <GalleryWrapper>
            <Image
              src={`/images/galleryImages/second.jpg`}
              width="0"
              height="0"
              alt=""
              sizes="100%"
              className={`w-full h-full`}
            />
          </GalleryWrapper>
        </SwiperSlide>

        <SwiperSlide>
          <GalleryWrapper>
            <Image
              src={`/images/galleryImages/third.jpg`}
              width="0"
              height="0"
              alt=""
              sizes="100%"
              className={`w-full h-full`}
            />
          </GalleryWrapper>
        </SwiperSlide>
      </Swiper>
    </Container>
  );
}
