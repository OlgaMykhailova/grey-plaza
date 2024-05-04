import { useLocale } from "next-intl";
import Link from "next/link";

interface NavigationMenuItemProps {
  menuItem: { title: string; id: string };
  onClick?: () => void;
}

export default function NavigationMenuItem({
  menuItem,
  onClick,
}: NavigationMenuItemProps) {
  const { title, id } = menuItem;
  const locale = useLocale();

  return (
    <li onClick={onClick} className="relative text-inherit">
      <Link
        href={`/${locale}#${id}`}
        className="inline-block py-[9.5px] outline-none after:content-[''] after:absolute after:left-0 after:bottom-[1.5px] after:h-[1px] 
        after:w-0 after:bg-accent laptop:hover:after:w-full laptop:focus-visible:after:w-full after:overflow-hidden after:transition-[width] 
        after:duration-300 after:ease-out-quart"
      >
        {title}
      </Link>
    </li>
  );
}
