import { useTranslations, useLocale } from "next-intl";

export default function RentOfficesTitle() {
  const t = useTranslations("Rent");

  return (
    <h2 className="w-full mb-5 laptop:mb-8 text-black text-left text-lgb">
      {t("offices")}
      {t("category1000")}
    </h2>
  );
}
