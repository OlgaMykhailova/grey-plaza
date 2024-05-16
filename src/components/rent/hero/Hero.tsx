import Image from "next/image";
import HeroTitle from "./HeroTitle";

export default function Hero() {
  return (
    <section className="relative z-[10] flex justify-center items-center w-full min-h-[156px]">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient">
        <Image
          src={`/images/heroImages/heroRent.jpg`}
          width="0"
          height="0"
          alt="building"
          sizes="100%"
          className={`absolute top-0 left-0 z-[-10] w-full h-full`}
        />
      </div>
      <HeroTitle />
    </section>
  );
}
