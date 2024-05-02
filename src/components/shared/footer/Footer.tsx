import Image from "next/image";
import Section from "../Section";
import NavigationMenu from "../navigationMenu/NavigationMenu";
import ContactInfo from "./ContactInfo/ContactInfo";
import SocialLinks from "./SocialLinks/SocialLinks";

export default function Footer() {
  return (
    <footer className="bg-primary">
      <Section className="flex flex-col items-center gap-y-5">
        <Image
          src={`/images/icons/logoWhite.svg`}
          width="0"
          height="0"
          alt="logo"
          className="w-[120px] h-[60px]"
        />
        <NavigationMenu />
        <ContactInfo />
        <SocialLinks />
      </Section>
    </footer>
  );
}
