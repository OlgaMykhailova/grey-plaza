import CustomHeroSlider from "./CustomHeroSlider";
import HeroSlider from "./HeroSlider";

export default function Hero() {
  return (
    <section id="about-us" className="scroll-mt-[72px] mb-10">
      {/* <HeroSlider /> */}
      <CustomHeroSlider />
    </section>
  );
}
