import Image from "next/image";

interface EquipmentListItemProps {
  equipment: { title: string; icon: string; alt: string };
}

export default function EquipmentListItem({
  equipment,
}: EquipmentListItemProps) {
  const { title, icon, alt } = equipment;

  return (
    <li className="flex flex-col items-center justify-center gap-4 p-4 text-black [&:not(:last-child)]:mb-2 after::content-[''] after:w-[185px] after:h-[1px] after:bg-accent">
      <Image
        src={`/images/icons/${icon}`}
        width="0"
        height="0"
        alt={alt}
        className={`w-[64px] h-[64px]`}
      />
      <h3 className="text-mdb text-center">{title}</h3>
    </li>
  );
}
