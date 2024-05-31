import { useTranslations } from "next-intl";

export default function Section4() {
  const t = useTranslations("Policy");

  return (
    <li>
      <h2>{t("protectionData")}</h2>
      <ul>
        <li>{t("protectionDataPartOne")}</li>
        <li>{t("protectionDataPartTwo")}</li>
      </ul>
    </li>
  );
}
