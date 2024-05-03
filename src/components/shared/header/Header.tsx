"use client";
import { useState } from "react";
import Container from "../Container";
import LogoLink from "../LogoLink";
import BurgerMenuButton from "./BurgerMenuButton";
import PhoneLink from "./PhoneLink";

export default function Header() {
  const [isHeaderMenuOpened, setIsHeaderMenuOpened] = useState(false);

  const toggleHeaderMenuOpen = () => setIsHeaderMenuOpened(!isHeaderMenuOpened);

  return (
    <header className="fixed top-0 left-0 z-20 w-[100vw] h-[72px] bg-primary">
      <Container className="flex justify-between items-center px-5 py-4">
        <LogoLink className="w-[78px] h-[40px]" />
        <div className="flex items-center gap-y-5">
          <PhoneLink />
          <BurgerMenuButton
            isHeaderMenuOpened={isHeaderMenuOpened}
            toggleHeaderMenuOpen={toggleHeaderMenuOpen}
          />
        </div>
      </Container>
    </header>
  );
}
