import NavigationMenuItem from "./NavigationMenuItem";
interface MenuItem {
  title: string;
  id: string;
}

interface NavigationMenuProps {
  menuList: MenuItem[];
  className?: string;
}

export default function NavigationMenu({
  menuList,
  className = "",
}: NavigationMenuProps) {
  return (
    <nav>
      <ul
        className={`flex flex-col items-center text-base text-white-text ${className}`}
      >
        {menuList.map((menuItem, idx) => (
          <NavigationMenuItem key={idx} menuItem={menuItem} />
        ))}
      </ul>
    </nav>
  );
}
