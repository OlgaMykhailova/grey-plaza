import { ReactNode } from "react";
import { Swiper } from "swiper/react";
import { Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/effect-coverflow";

interface SliderWrapperProps {
  children: ReactNode;
}

export default function SliderWrapper({ children }: SliderWrapperProps) {
  return (
    <Swiper
      modules={[Scrollbar]}
      scrollbar={{ draggable: true }}
      slidesPerView={1.14}
      grabCursor={true}
      speed={1000}
      loop={true}
    >
      {children}
    </Swiper>
  );
}
