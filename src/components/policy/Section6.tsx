import { useTranslations } from "next-intl";
import SectionTitle from "./SectionTitle";

export default function Section6() {
  const t = useTranslations("Policy");

  return (
    <li className="mb-4 laptop:mb-6">
      <SectionTitle>{t("policyChanges")}</SectionTitle>
      <ul>
        <li>{t("policyChangesDescription")}</li>
      </ul>
    </li>
  );
}
