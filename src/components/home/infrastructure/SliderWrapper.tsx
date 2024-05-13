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
    <div className="pl-5">
      <Swiper
        modules={[Scrollbar]}
        scrollbar={{ draggable: true }}
        spaceBetween={12}
        slidesPerView={1.07}
        grabCursor={true}
        speed={1000}
        loop={true}
      >
        {children}
      </Swiper>
    </div>
  );
}
