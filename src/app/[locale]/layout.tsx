import { getTranslations } from "next-intl/server";
import { Fira_Sans } from "next/font/google";
import { NextIntlClientProvider, useMessages } from "next-intl";
import Providers from "@/src/components/providers/Providers";
import Header from "@/src/components/shared/header/Header";
import Footer from "@/src/components/shared/footer/Footer";
import "./globals.css";

const fira = Fira_Sans({
  weight: ["400", "600", "700"],
  subsets: ["latin", "cyrillic"],
  variable: "--font-fira",
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
  const messages = useMessages();

  return (
    <html lang={locale} className="scroll-smooth">
      <NextIntlClientProvider locale={locale} messages={messages}>
        <body className={`${fira.variable} bg-white-bg font-fira text-black`}>
          <Providers>
            <Header />
            <main>{children}</main>
            {/* <Footer /> */}
          </Providers>
        </body>
      </NextIntlClientProvider>
    </html>
  );
}
