import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";
import { officesData } from "@/src/mockedData/officesData";
import Container from "../../shared/Container";
import TextButton from "../../shared/buttons/TextButton";
import RentOfficesList from "./RentOfficesList";
import RentOfficesTitle from "./RentOfficesTitle";
import RentOfficesCard from "./RentOfficesCard";
import OfficesSlider from "../../shared/officesSlider/OfficesSlider";

export default function RentOfficesSection() {
  const t = useTranslations("Rent");
  const locale = useLocale();

  const officesList = [
    {
      image: "image1.jpg",
      alt: "image1",
    },
    {
      image: "image2.jpg",
      alt: "image2",
    },
    {
      image: "image3.jpg",
      alt: "image3",
    },
    {
      image: "image4.jpg",
      alt: "image4",
    },
    {
      image: "image5.jpg",
      alt: "image5",
    },
    {
      image: "image6.jpg",
      alt: "image6",
    },
  ];

  return (
    <section className="py-10 scroll-mt-[72px] tablet:scroll-mt-20 bg-white-bgSecondary">
      <Container>
        <RentOfficesTitle />
        <RentOfficesList />
        <Link
          href={`/${locale}/rent#categories`}
          className="block w-[320px] h-10 mt-8 mx-auto outline-none"
        >
          <TextButton>{t("chooseAnotherCategory")}</TextButton>
        </Link>
      </Container>
    </section>
  );
}
