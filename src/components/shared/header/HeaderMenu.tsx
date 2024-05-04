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
  const t = useTranslations("WriteUs");
  const locale = useLocale();

  return (
    <div
      className={`absolute top-[72px] left-0 z-20 w-[100vw] overflow-hidden transition-[height] duration-[600ms] ease-out-quart bg-primary bg-opacity-[0.8] ${
        isHeaderMenuOpened ? "min-h-[calc(100dvh-72px)]" : "h-0"
      }`}
    >
      <Container className="flex flex-col items-center gap-y-10 py-10">
        <HeaderNavigationMenu onClick={() => setIsHeaderMenuOpened(false)} />
        <SocialLinks />
        <Link href={`/${locale}#write-us`} className="outline-none">
          <Button onClick={() => setIsHeaderMenuOpened(false)}>
            {t("title")}
          </Button>
        </Link>
      </Container>
    </div>
  );
}
