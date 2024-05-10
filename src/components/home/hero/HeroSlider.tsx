import React from "react";
import Image from "next/image";

const heroImages = [
  { image: "heroFirst" },
  { image: "heroSecond" },
  { image: "heroThird" },
];

export default function HeroSlider() {
  return (
    <ul className="relative w-full aspect-[360/677] min-h-[677px]">
      {heroImages.map(({ image }, idx) => (
        <li
          key={idx}
          className={`absolute top-0 left-0 w-full h-full ${
            idx === 0 ? "opacity-1" : "opacity-0"
          } animate-hero animate-delay-[calc(${idx}*4000ms)]`}
        >
          <Image
            src={`/images/heroImages/${image}.jpg`}
            width="0"
            height="0"
            sizes="100%"
            alt="building"
            className="min-w-[360px] min-h-[677px] w-full h-auto"
          />
        </li>
      ))}
      {/* <div className="absolute top-0 left-0 animate-hero">
        <Image
          src={`/images/heroImages/heroFirst.jpg`}
          width="360"
          height="677"
          sizes="100%"
          alt="building"
        />
      </div>
      <div className="absolute top-0 left-0 opacity-0 animate-hero animate-delay-[4000ms]">
        <Image
          src={`/images/heroImages/heroSecond.jpg`}
          width="360"
          height="677"
          sizes="100%"
          alt="building"
        />
      </div>
      <div className="absolute top-0 left-0 opacity-0 animate-hero animate-delay-[8000ms]">
        <Image
          src={`/images/heroImages/heroThird.jpg`}
          width="360"
          height="677"
          sizes="100%"
          alt="building"
        />
      </div> */}
    </ul>
  );
}
