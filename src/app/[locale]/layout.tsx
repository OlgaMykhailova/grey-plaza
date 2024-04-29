import { getTranslations } from "next-intl/server";
import { Fira_Sans } from "next/font/google";
import "./globals.css";

const fira = Fira_Sans({
  weight: ["400", "500", "700"],
  subsets: ["latin", "cyrillic"],
});

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = await getTranslations({ locale, namespace: "Metadata" });
  return {
    title: t("title"),
    description: t("description"),
  };
}

export default function LocaleLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={fira.className}>{children}</body>
    </html>
  );
}
