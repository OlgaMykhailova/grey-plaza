import HeroSlider from "./HeroSlider";
import HeroInfoList from "./heroInfo/HeroInfoList";
import HeroTitle from "./HeroTitle";

export default function Hero() {
  return (
    <section
      id="about-us"
      className="relative w-full min-h-[508px] aspect-[360/508] scroll-mt-[72px] mb-10 bg-primary"
    >
      <div className="absolute z-10 w-full h-full py-[11.11%] px-5 text-white-text text-center">
        <HeroTitle />
        <HeroInfoList />
      </div>
      <HeroSlider />
    </section>
  );
}
