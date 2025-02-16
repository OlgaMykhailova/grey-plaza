import { generatePageMetaData } from "@/src/utils/generatePageMetaData";
import { Fira_Sans } from "next/font/google";
import { NextIntlClientProvider, useMessages } from "next-intl";
import Providers from "@/src/components/providers/Providers";
import Header from "@/src/components/shared/header/Header";
import Footer from "@/src/components/shared/footer/Footer";
import CookiesComponent from "@/src/components/shared/CookiesComponent";
import "./globals.css";

const fira = Fira_Sans({
  weight: ["400", "600", "700"],
  subsets: ["latin", "cyrillic"],
  variable: "--font-fira",
});

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}) {
  const { locale } = params;
  return generatePageMetaData({
    locale,
    namespace: "Metadata",
    canonical: "/",
  });
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
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta
          name="google-site-verification"
          content="pHR0XfU0yXOPq_53gA016tQTbs90M84nWcW4JWGBvhU"
        />
      </head>
      <NextIntlClientProvider locale={locale} messages={messages}>
        <body className={`${fira.variable} text-grey bg-white-bg font-fira`}>
          <Providers>
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
            <CookiesComponent />
          </Providers>
        </body>
      </NextIntlClientProvider>
    </html>
  );
}
