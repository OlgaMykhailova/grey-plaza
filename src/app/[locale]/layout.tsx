import { getTranslations } from "next-intl/server";
import { Fira_Sans } from "next/font/google";
import Header from "@/src/components/shared/header/Header";
import Footer from "@/src/components/shared/footer/Footer";
import "./globals.css";

const fira = Fira_Sans({
  weight: ["400", "600", "700"],
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
      <body className={`${fira.className} bg-white-bg`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
