import React from "react";
import Image from "next/image";

const heroImages = [
  { image: "heroFirst" },
  { image: "heroSecond" },
  { image: "heroThird" },
];

export default function HeroSlider() {
  return (
    <ul className="absolute top-0 left-0 w-full h-full">
      {heroImages.map(({ image }, idx) => (
        <li
          key={idx}
          className={`absolute z[-10] w-full h-full ${
            idx === 0 ? "opacity-1" : "opacity-0"
          } animate-hero ${
            idx === 0
              ? "animate-delay-[0ms]"
              : idx === 1
              ? "animate-delay-[4000ms]"
              : "animate-delay-[8000ms]"
          }`}
        >
          <Image
            src={`/images/heroImages/${image}.jpg`}
            width="0"
            height="0"
            sizes="100%"
            alt="building"
            className="absolute z[-10] min-w-[360px] min-h-[508px] w-full h-auto object-cover"
          />
          <div className="absolute min-w-[360px] min-h-[508px] w-full h-full bg-heroGradient"></div>
        </li>
      ))}
    </ul>
  );
}
