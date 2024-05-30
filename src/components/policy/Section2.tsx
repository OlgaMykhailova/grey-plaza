import { useTranslations } from "next-intl";

export default function Section2() {
  const t = useTranslations("Policy");

  return (
    <li>
      <h2>{t("collectionPersonalData")}</h2>
      <h3>{t("types")}</h3>
      <ul>
        <li>{t("names")}</li>
        <li>{t("technicalInformation")}</li>
      </ul>
      <h3>{t("collectionGoals")}</h3>
      <ul>
        <li>{t("services")}</li>
        <li>{t("improvements")}</li>
        <li>{t("marketing")}</li>
      </ul>
      <h3>{t("cookiesUsage")}</h3>
      <ul>
        <li>{t("cookies")}</li>
      </ul>
      <h3>{t("period")}</h3>
      <ul>
        <li>{t("periodDescription")}</li>
      </ul>
      <h3>{t("legalGrounds")}</h3>
      <ul>
        <li>{t("legalDescription")}</li>
      </ul>
    </li>
  );
}
