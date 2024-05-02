import Image from "next/image";
import Section from "../Section";
import NavigationMenu from "../navigationMenu/NavigationMenu";

export default function Footer() {
  return (
    <footer className="bg-primary">
      <Section className="flex flex-col items-center mb-0">
        <Image
          src={`/images/icons/logoWhite.svg`}
          width="0"
          height="0"
          alt="logo"
          className="w-[120px] h-[60px] mb-6"
        />
        <NavigationMenu />
      </Section>
    </footer>
  );
}
