import Container from "../Container";
import FooterNavigationMenu from "./FooterNavigationMenu";
import ContactInfo from "./contactInfo/ContactInfo";
import LogoLink from "../LogoLink";
import FooterThumb from "./footerThumb/FooterThumb";
import SocialLinks from "../socialLinks/SocialLinks";

export default function Footer() {
  return (
    <footer className="bg-primary py-10">
      <Container className="flex flex-col items-center gap-y-5">
        <LogoLink className="w-[120px] h-[60px]" />
        <FooterNavigationMenu />
        <ContactInfo />
        <SocialLinks />
        <FooterThumb />
      </Container>
    </footer>
  );
}
