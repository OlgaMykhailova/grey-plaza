import { useTranslations } from "next-intl";

export default function Section6() {
  const t = useTranslations("Policy");

  return (
    <li>
      <h2>{t("policyChanges")}</h2>
      <ul>
        <li>{t("policyChangesDescription")}</li>
      </ul>
    </li>
  );
}
