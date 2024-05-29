import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import OfficesCategory from "./OfficesCategory";
import Button from "../../shared/buttons/Button";
import SlideWrapper from "../../shared/slider/SlideWrapper";

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

export default function OfficesCategoryList() {
  const t = useTranslations("");
  const locale = useLocale();

  return (
    <div className="flex flex-col gap-y-5 tablet:flex-row tablet:flex-wrap tablet:gap-x-4">
      <OfficesCategory
        sliderList={officesList}
        categoryName={t("Rent.category1000")}
      />
      <OfficesCategory
        sliderList={officesList}
        categoryName={t("Rent.category500")}
      />
      <OfficesCategory
        sliderList={officesList}
        categoryName={t("Rent.category300")}
      />
      <Link
        href="/rent"
        locale={locale}
        className="tablet:hidden laptop:block mt-4 mx-auto"
      >
        <Button>{t("Buttons.viewAll")}</Button>
      </Link>
      <SlideWrapper className="hidden tablet:flex laptop:hidden justify-center items-center w-[48.9%] aspect-[356/314]">
        <Link href="/rent" locale={locale}>
          <Button>{t("Buttons.viewAll")}</Button>
        </Link>
      </SlideWrapper>
    </div>
  );
}
