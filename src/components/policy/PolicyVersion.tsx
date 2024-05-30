import { useTranslations } from "next-intl";

export default function PolicyVersion() {
  const t = useTranslations("Policy");

  return <p>{t("version")}</p>;
}
