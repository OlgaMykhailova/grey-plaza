import { useTranslations } from "next-intl";
import SectionTitle from "../../shared/SectionTitle";
import Container from "../../shared/Container";
import GallerySlider from "./gallerySlider/GallerySlider";

export default function Gallery() {
  const t = useTranslations("Gallery");

  return (
    <section
      id="gallery"
      className="aspect-[360/434] py-10 mb-10 scroll-mt-[72px]"
    >
      <Container>
        <SectionTitle>{t("title")}</SectionTitle>
      </Container>
      <GallerySlider />
    </section>
  );
}
