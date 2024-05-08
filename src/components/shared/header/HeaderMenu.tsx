import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";
import Button from "../Button";
import Container from "../Container";
import SocialLinks from "../socialLinks/SocialLinks";
import HeaderNavigationMenu from "./HeaderNavigationMenu";

interface HeaderMenuProps {
  isHeaderMenuOpened: boolean;
  setIsHeaderMenuOpened: (
    value: boolean | ((prev: boolean) => boolean)
  ) => void;
}

export default function HeaderMenu({
  isHeaderMenuOpened = false,
  setIsHeaderMenuOpened,
}: HeaderMenuProps) {
  const t = useTranslations("Buttons");
  const locale = useLocale();

  return (
    <div
      className={`absolute top-[72px] left-0 z-20 w-[100vw] overflow-hidden transition-[height] duration-[600ms] ease-out-quart bg-headerGradient ${
        isHeaderMenuOpened ? "h-[calc(100vh-72px)] no-doc-scroll" : "h-0"
      }`}
    >
      <Container className="flex flex-col items-center gap-y-10 h-full py-10 overflow-y-auto">
        <HeaderNavigationMenu onClick={() => setIsHeaderMenuOpened(false)} />
        <SocialLinks />
        <Link href={`/${locale}#write-us`} className="outline-none">
          <Button
            variant="secondary"
            onClick={() => setIsHeaderMenuOpened(false)}
          >
            {t("callBack")}
          </Button>
        </Link>
      </Container>
    </div>
  );
}
