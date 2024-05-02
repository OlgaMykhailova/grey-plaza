import { useTranslations } from "next-intl";
import NavigationMenuItem from "./NavigationMenuItem";

export default function NavigationMenu() {
  const t = useTranslations();
  const menuList = [
    { title: t("Hero.title"), id: "hero" },
    { title: t("Infrastructure.title"), id: "infrastructure" },
    { title: t("Equipment.title"), id: "equipment" },
    { title: t("Benefits.title"), id: "benefits" },
    { title: t("Offices.title"), id: "offices" },
    { title: t("Gallery.title"), id: "gallery" },
    { title: t("WriteUs.title"), id: "contacts" },
  ];
  return (
    <nav>
      <ul className="flex flex-col items-center gap-y-2 py-[9.5px]">
        {menuList.map((menuItem, idx) => (
          <NavigationMenuItem key={idx} menuItem={menuItem} />
        ))}
      </ul>
    </nav>
  );
}
