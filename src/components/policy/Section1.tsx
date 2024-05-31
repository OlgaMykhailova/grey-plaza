import { useTranslations } from "next-intl";
import SectionTitle from "./SectionTitle";

export default function Section1() {
  const t = useTranslations("Policy");

  return (
    <li>
      <SectionTitle>{t("terms")}</SectionTitle>
      <h3>{t("termsPartOne")}</h3>
      <ul>
        <li>{t("goals")}</li>
        <li>{t("scope")}</li>
      </ul>
      <h3>{t("termsPartTwo")}</h3>
      <ul>
        <li>{t("personalData")}</li>
        <li>{t("collection")}</li>
        <li>{t("usage")}</li>
        <li>{t("processing")}</li>
        <li>{t("cookiesDescription")}</li>
      </ul>
      <h3>{t("termsPartThree")}</h3>
      <ul>
        <li>{t("agreement")}</li>
        <li>{t("disagreement")}</li>
      </ul>
    </li>
  );
}
