import GallerySlider from "./GallerySlider";

const galleryListMob = [
  { image: "winterGarden.jpg", alt: "Winter Garden" },
  { image: "stairs.jpg", alt: "Stairs" },
  { image: "buildingTopView.jpg", alt: "Building Top View" },
  { image: "hall.jpg", alt: "Hall" },
  { image: "buildingFrontView.jpg", alt: "Building Front View" },
  { image: "restGardenArea.jpg", alt: "Rest Garden Area" },
  { image: "hammoks.jpg", alt: "Hammoks" },
  { image: "gardenPath.jpg", alt: "Garden Path" },
  { image: "gazebos.jpg", alt: "Gazebos" },
  { image: "sportSimulators.jpg", alt: "Sport Simulators" },
  { image: "barbeque.jpg", alt: "Barbeque" },
  { image: "cafe.jpg", alt: "Cafe" },
  { image: "cafeTerrace.jpg", alt: "Cafe Terrace" },
  { image: "kitchen.jpg", alt: "Kitchen" },
];

const galleryListTab = [
  { image: "winterGardenTab.webp", alt: "Winter Garden" },
  { image: "stairsTab.webp", alt: "Stairs" },
  { image: "buildingTopViewTab.webp", alt: "Building Top View" },
  { image: "hallTab.webp", alt: "Hall" },
  { image: "buildingFrontViewTab.webp", alt: "Building Front View" },
  { image: "restGardenAreaTab.webp", alt: "Rest Garden Area" },
  { image: "hammoksTab.webp", alt: "Hammoks" },
  { image: "gardenPathTab.webp", alt: "Garden Path" },
  { image: "gazebosTab.webp", alt: "Gazebos" },
  { image: "sportSimulatorsTab.webp", alt: "Sport Simulators" },
  { image: "barbequeTab.webp", alt: "Barbeque" },
  { image: "cafeTab.webp", alt: "Cafe" },
  { image: "cafeTerraceTab.webp", alt: "Cafe Terrace" },
  { image: "kitchenTab.webp", alt: "Kitchen" },
];

export default function GallerySliderList() {
  return (
    <>
      <GallerySlider galleryList={galleryListMob} className="tablet:hidden" />
      <GallerySlider
        galleryList={galleryListTab}
        className="hidden tablet:block"
      />
    </>
  );
}
