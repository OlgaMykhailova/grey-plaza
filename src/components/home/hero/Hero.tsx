import HeroSlider from "./HeroSlider";
import HeroInfoList from "./heroInfo/HeroInfoList";
import HeroTitle from "./HeroTitle";

export default function Hero() {
  return (
    <section
      id="about-us"
      className="relative w-full h-[677px] scroll-mt-[72px] mb-10"
    >
      <div className="absolute z-10 w-full h-full py-10 px-5 text-white-text text-center">
        <HeroTitle />
        <HeroInfoList />
      </div>
      <HeroSlider />
    </section>
  );
}
