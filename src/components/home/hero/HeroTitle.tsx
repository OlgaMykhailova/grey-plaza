import { useTranslations } from "next-intl";

export default function HeroTitle() {
  const t = useTranslations("Hero");

  return (
    <>
      <h1 className="text-base">
        {t("pageTitle1")}
        <p className="text-3xlb mobileXl:text-4xlb">
          {t("pageTitle2").toUpperCase()}
        </p>
      </h1>
      <p>{t("description").toUpperCase()}</p>
    </>
  );
}
