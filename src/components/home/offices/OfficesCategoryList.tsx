import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { officesData } from "@/src/mockedData/officesData";
import OfficesCategory from "./OfficesCategory";
import Button from "../../shared/buttons/Button";
import SlideWrapper from "../../shared/SlideWrapper";

export default function OfficesCategoryList() {
  const t = useTranslations("");
  const locale = useLocale();
  const { category1000, category500, category300 } = officesData;

  return (
    <>
      <div className="flex flex-col gap-y-5 tablet:flex-row tablet:justify-between tablet:flex-wrap">
        <OfficesCategory
          sliderList={category1000[0].photos}
          categoryName={t("Rent.category1000")}
        />
        <OfficesCategory
          sliderList={category500[0].photos}
          categoryName={t("Rent.category500")}
        />
        <OfficesCategory
          sliderList={category300[0].photos}
          categoryName={t("Rent.category300")}
        />

        <div className="flex flex-col w-[48.9%]">
          <SlideWrapper className="hidden tablet:flex laptop:hidden flex-1 self-stretch justify-center items-center p-4">
            <Link href="/rent" locale={locale} className="outline-none">
              <Button>{t("Buttons.viewAll")}</Button>
            </Link>
          </SlideWrapper>
        </div>
      </div>
      <div className="flex tablet:hidden laptop:flex justify-center mt-4">
        <Link href="/rent" locale={locale} className="outline-none">
          <Button>{t("Buttons.viewAll")}</Button>
        </Link>
      </div>
    </>
  );
}
