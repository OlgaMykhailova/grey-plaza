import { useTranslations, useLocale } from "next-intl";
import OfficesCategory from "./OfficesCategory";

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
  const t = useTranslations("Rent");
  return (
    <div className="flex flex-col gap-y-5 py-5">
      <OfficesCategory
        sliderList={officesList}
        categoryName={t("category1000")}
      />
      <OfficesCategory
        sliderList={officesList}
        categoryName={t("category500")}
      />
      <OfficesCategory
        sliderList={officesList}
        categoryName={t("category300")}
      />
    </div>
  );
}
