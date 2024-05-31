import { useTranslations } from "next-intl";

export default function Section3() {
  const t = useTranslations("Policy");

  return (
    <li>
      <h2>{t("cookiesTechnologies")}</h2>
      <h3>{t("cookiesTypes")}</h3>
      <ul>
        <p>{t("cookiesTypesDescription")}</p>
        <li>{t("sessionCookie")}</li>
        <li>{t("permanentCookies")}</li>
        <li>{t("thirdPartyCookies")}</li>
      </ul>
      <h3>{t("cookiesControl")}</h3>
      <ul>
        <li>{t("cookiesControlDescription")}</li>
      </ul>
    </li>
  );
}
