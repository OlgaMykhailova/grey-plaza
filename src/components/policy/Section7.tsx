import { useTranslations } from "next-intl";

export default function Section7() {
  const t = useTranslations("Policy");

  return (
    <li>
      <h2>{t("additionalConditions")}</h2>
      <ul>
        <li>{t("additionalConditionsPartOne")}</li>
        <li>{t("additionalConditionsPartTwo")}</li>
      </ul>
    </li>
  );
}
