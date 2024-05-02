import Image from "next/image";

interface BenefitsListItemProps {
  benefit: { title: string; description: string; icon: string };
}

export default function BenefitsListItem({ benefit }: BenefitsListItemProps) {
  const { title, description, icon } = benefit;
  return (
    <li className="flex gap-4 px-3 py-4 [&:not(:last-child)]:mb-2 text-white-text">
      <Image
        src={`/images/icons/${icon}`}
        width="0"
        height="0"
        alt={title}
        className="w-[32px] h-[32px]"
      />
      <div>
        <h3 className="mb-2 text-mdb">{title}</h3>
        <p className="text-base">{description}</p>
      </div>
    </li>
  );
}
