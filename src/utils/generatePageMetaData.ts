import { getTranslations } from "next-intl/server";

interface GenerateMetaDataParams {
  locale: string;
  namespace: string;
  canonical: string;
}
export async function generatePageMetaData({
  locale,
  namespace,
  canonical,
}: GenerateMetaDataParams) {
  const t = await getTranslations({
    locale,
    namespace,
  });

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "";

  const localizedCanonical = `/ua${canonical}`;

  return {
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: localizedCanonical,
      languages: {
        uk: `/ua`,
      },
    },
    title: t("title"),
    description: t("description"),
    openGraph: {
      description: t("description"),
      title: t("title"),
      type: "website",
    },
  };
}
