import { useTranslations } from "next-intl";

export default function Section5() {
  const t = useTranslations("Policy");

  return (
    <li>
      <h2>{t("userRights")}</h2>

      <ul>
        <li>{t("userRightsDescription")}</li>
      </ul>
    </li>
  );
}
