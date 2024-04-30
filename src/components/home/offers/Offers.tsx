import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import Marquee from "react-fast-marquee";

export default function Offers() {
  const t = useTranslations("Offers");
  const locale = useLocale();

  return (
    // TODO Update link href when write us form is ready
    <section>
      <Link href={`/${locale}`}>
        <Marquee
          autoFill={true}
          pauseOnHover={true}
          pauseOnClick={true}
          className="h-[72px] bg-accent"
        >
          <h2 className="text-xlsb text-white-text">
            <span>&nbsp; &nbsp; &nbsp;</span>
          </h2>
        </Marquee>
      </Link>
    </section>
  );
}
