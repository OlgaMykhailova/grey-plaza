import dynamic from "next/dynamic";
import Hero from "@/src/components/home/hero/Hero";
import Offers from "@/src/components/home/offers/Offers";

const Infrastructure = dynamic(
  () => import("@/src/components/home/infrastructure/Infrastructure")
);
const Equipment = dynamic(
  () => import("@/src/components/home/equipment/Equipment")
);
const Benefits = dynamic(
  () => import("@/src/components/home/benefits/Benefits")
);
const Offices = dynamic(() => import("@/src/components/home/offices/Offices"));
const Gallery = dynamic(() => import("@/src/components/home/gallery/Gallery"));
const WriteUs = dynamic(
  () => import("@/src/components/shared/writeUs/WriteUs")
);
const Location = dynamic(
  () => import("@/src/components/home/location/Location")
);

export default function Home() {
  return (
    <div className="pt-[72px] tablet:pt-20">
      <Hero />
      <Offers />
      <Infrastructure />
      <Equipment />
      <Benefits />
      <Offices />
      <Gallery />
      <WriteUs id="write-us" />
      <Location />
    </div>
  );
}
