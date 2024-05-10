"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, EffectCube } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/autoplay";

const heroImages = [
  { image: "heroFirst" },
  { image: "heroSecond" },
  { image: "heroThird" },
];

export default function HeroSlider() {
  return (
    <Swiper
      key={"partnersSlider pl-[100px]"}
      slidesPerView={1}
      effect={"fade"}
      fadeEffect={{
        crossFade: true,
      }}
      autoplay={{ delay: 2000 }}
      pagination={{
        clickable: true,
      }}
      loop={true}
      modules={[Autoplay, EffectFade, EffectCube]}
      className="xs:max-w-[280] sm:max-w-[380px] md:max-w-[618px] xl:max-w-[986px] 2xl:max-w-[1006px] 3xl:max-w-[1006px] 4xl:max-w-[1139px] 5xl:max-w-[1450px]"
    >
      {heroImages.map((item, idx) => (
        <SwiperSlide
          key={idx}
          className="animate-fade animate-once animate-duration-[2000ms] animate-ease-in-out sm:max-w-[280] md:max-w-[190px] xl:max-w-[302px] 4xl:max-w-[324px] 5xl:max-w-[340px] "
        >
          <Image
            src={`/images/heroImages/${item.image}.jpg`}
            width="360"
            height="677"
            sizes="100%"
            alt="building"
            className=""
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
