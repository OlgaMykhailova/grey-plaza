import Container from "../Container";
import NavigationMenu from "./NavigationMenu";
import ContactInfo from "./ContactInfo/ContactInfo";
import LogoLink from "../LogoLink";
import FooterThumb from "./FooterThumb/FooterThumb";
import SocialLinks from "./SocialLinks/SocialLinks";

export default function Footer() {
  return (
    <footer className="bg-primary py-10">
      <Container className="flex flex-col items-center gap-y-5">
        <LogoLink className="w-[120px] h-[60px]" />
        <NavigationMenu />
        <ContactInfo />
        <SocialLinks />
        <FooterThumb />
      </Container>
    </footer>
  );
}
