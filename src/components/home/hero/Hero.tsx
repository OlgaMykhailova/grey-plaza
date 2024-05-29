import HeroSlider from "./heroSlider/HeroSlider";
import HeroInfoList from "./heroInfo/HeroInfoList";
import HeroTitle from "./HeroTitle";

export default function Hero() {
  return (
    <section
      id="about-us"
      className="relative w-full aspect-[360/508] mobileXl:aspect-[768/660] laptop:aspect-[1920/1080] scroll-mt-[72px] tablet:scroll-mt-20 mb-10 bg-primary"
    >
      <div className="absolute z-10 w-full h-full py-[11.11%] mobileXl:py-[8%] tablet:py-[12.1%] laptop:py-[5.55%] px-5 laptop:px-[38px] text-white-text text-center">
        <HeroTitle />
        <HeroInfoList />
      </div>
      <HeroSlider />
    </section>
  );
}
