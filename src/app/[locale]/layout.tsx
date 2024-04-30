import { getTranslations } from "next-intl/server";
import { Inter } from "next/font/google";
import Header from "@/src/components/shared/header/Header";
import Footer from "@/src/components/shared/footer/Footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

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
      <body className={`${inter.className} bg-white-bg`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
