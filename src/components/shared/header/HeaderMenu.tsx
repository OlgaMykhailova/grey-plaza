import Container from "../Container";
import SocialLinks from "../socialLinks/SocialLinks";
import HeaderNavigationMenu from "./HeaderNavigationMenu";
import CallBack from "../callBack/CallBack";

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
  return (
    <div
      className={`absolute top-[72px] left-0 z-20 w-[100vw] overflow-hidden transition-[height] duration-[600ms] ease-out-quart bg-headerGradient backdrop-blur-sm ${
        isHeaderMenuOpened ? "h-[calc(100vh-72px)] no-doc-scroll" : "h-0"
      }`}
    >
      <Container className="flex flex-col items-center gap-y-10 h-full py-10">
        <HeaderNavigationMenu onClick={() => setIsHeaderMenuOpened(false)} />
        <SocialLinks />
        <CallBack closeHeaderMenu={() => setIsHeaderMenuOpened(false)} />
      </Container>
    </div>
  );
}
