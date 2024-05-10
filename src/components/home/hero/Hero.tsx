import { useTranslations } from "next-intl";
import HeroSlider from "./HeroSlider";

export default function Hero() {
  const t = useTranslations("Hero");

  return (
    <section
      id="about-us"
      className="relative w-full aspect-[360/677] min-h-[677px] scroll-mt-[72px] mb-10"
    >
      <div className="absolute z-10 w-full h-full py-10 px-5 text-white-text text-center">
        <h1 className="text-base">
          {t("pageTitle1")}
          <p className="text-2xlb">{t("pageTitle2").toUpperCase()}</p>
        </h1>
        <p>{t("description").toUpperCase()}</p>
      </div>
      <HeroSlider />
    </section>
  );
}
