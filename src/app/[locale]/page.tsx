import Hero from "@/src/components/home/hero/Hero";
import Offers from "@/src/components/home/offers/Offers";
import Infrastructure from "@/src/components/home/infrastructure/Infrastructure";
import Equipment from "@/src/components/home/equipment/Equipment";
import Benefits from "@/src/components/home/benefits/Benefits";
import Offices from "@/src/components/home/offices/Offices";
import Gallery from "@/src/components/home/gallery/Gallery";
import WriteUs from "@/src/components/shared/writeUs/WriteUs";
import Location from "@/src/components/home/location/Location";

export default function Home() {
  return (
    <>
      <Hero />
      <Offers />
      <Infrastructure />
      <Equipment />
      <Benefits />
      <Offices />
      <Gallery />
      <WriteUs />
      <Location />
    </>
  );
}
