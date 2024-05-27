import Container from "../Container";
import LogoLink from "../LogoLink";
import CallBack from "../callBack/CallBack";
import HeaderNavigationMenu from "./HeaderNavigationMenu";

export default function HeaderLaptop() {
  return (
    <header className="hidden laptop:block fixed top-0 left-0 z-20 w-[100vw] h-20 bg-blue">
      <Container className="flex justify-between items-center h-full">
        <LogoLink className="w-[110px] h-14" />
        <HeaderNavigationMenu />
        <CallBack />
      </Container>
    </header>
  );
}
