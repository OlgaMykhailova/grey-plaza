"use client";
import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import Marquee from "react-fast-marquee";

export default function Offers() {
  const t = useTranslations("Offers");
  const locale = useLocale();

  return (
    <section>
      <Link href={`/${locale}#contacts`}>
        <Marquee
          autoFill={true}
          pauseOnHover={true}
          pauseOnClick={true}
          className="h-[72px] bg-accent"
        >
          <h2 className="text-xlsb text-white-text">
            {t("title")}
            <span>&nbsp; &nbsp; &nbsp;</span>
          </h2>
        </Marquee>
      </Link>
    </section>
  );
}
