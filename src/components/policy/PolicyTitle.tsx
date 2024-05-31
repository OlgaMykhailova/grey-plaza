import { useTranslations } from "next-intl";

export default function PolicyTitle() {
  const t = useTranslations("Policy");

  return (
    <h1 className="mb-10 text-xlsb tablet:text-2xlsb laptop:text-4xlsb text-center text-black">
      {t("title")}
    </h1>
  );
}
