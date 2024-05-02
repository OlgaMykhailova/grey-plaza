import { useLocale } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import Section from "../Section";
import NavigationMenu from "../navigationMenu/NavigationMenu";
import ContactInfo from "./ContactInfo/ContactInfo";
import SocialLinks from "./SocialLinks/SocialLinks";

export default function Footer() {
  const locale = useLocale();

  return (
    <footer className="bg-primary">
      <Section className="flex flex-col items-center gap-y-5">
        <Link href={`/${locale}#top`} className="group outline-none">
          <Image
            src={`/images/icons/logoWhite.svg`}
            width="0"
            height="0"
            alt="logo"
            className="w-[120px] h-[60px] group-hover:scale-105 transition-[transform] duration-[300ms] ease-out-quart"
          />
        </Link>
        <NavigationMenu />
        <ContactInfo />
        <SocialLinks />
      </Section>
    </footer>
  );
}
