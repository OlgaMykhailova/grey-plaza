import { ReactNode } from "react";
import { Swiper } from "swiper/react";
import { Scrollbar, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/effect-coverflow";
import "./slider.css";

interface SliderWrapperProps {
  children: ReactNode;
}

export default function SliderWrapper({ children }: SliderWrapperProps) {
  return (
    <Swiper
      modules={[Scrollbar, EffectCoverflow]}
      slidesPerView={1.35}
      scrollbar={true}
      grabCursor={true}
      centeredSlides={true}
      effect={"coverflow"}
      coverflowEffect={{
        rotate: 0,
        scale: 0.7,
        stretch: 32,
        depth: 0,
        modifier: 1,
        slideShadows: false,
      }}
      speed={1000}
      loop={true}
      cssMode={true}
      className="gallery-slider"
    >
      {children}
    </Swiper>
  );
}
