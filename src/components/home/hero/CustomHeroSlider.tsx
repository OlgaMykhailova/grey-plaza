import React from "react";
import Image from "next/image";

export default function CustomHeroSlider() {
  return (
    <div className="relative">
      <div className="absolute top-0 left-0 animate-hero">
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
      </div>
    </div>
  );
}
