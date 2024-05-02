import Section from "../Section";
import NavigationMenu from "../navigationMenu/NavigationMenu";
import ContactInfo from "./ContactInfo/ContactInfo";
import LogoLink from "./ContactInfo/LogoLink";
import SocialLinks from "./SocialLinks/SocialLinks";

export default function Footer() {
  return (
    <footer className="bg-primary">
      <Section className="flex flex-col items-center gap-y-5">
        <LogoLink />
        <NavigationMenu />
        <ContactInfo />
        <SocialLinks />
      </Section>
    </footer>
  );
}
