import Container from "../Container";
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
  return (
    <div
      className={`absolute top-[72px] left-0 z-20 w-[100vw] overflow-hidden transition-[height] duration-[600ms] ease-out-quart bg-primary opacity-80 ${
        isHeaderMenuOpened ? "h-[calc(100dvh-72px)]" : "h-0"
      }`}
    >
      <Container className="py-10">
        <HeaderNavigationMenu />
      </Container>
    </div>
  );
}
