import Image from "next/image";

interface ContactInfoItemProps {
  contact: { icon: string; url: string; name: string };
}

export default function ContactInfoItem({ contact }: ContactInfoItemProps) {
  const { icon, url, name } = contact;
  return (
    <li className="flex items-center justify-center py-1 gap-y-1 gap-x-2 ">
      <Image
        src={`/images/icons/${icon}`}
        width="0"
        height="0"
        alt="phone"
        className="w-6 h-6"
      />

      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="max-w-[220px] outline-none text-base text-white-text laptop:hover:text-accent laptop:focus-visible:text-accent 
        transition-[color] duration-[300ms] ease-out-quart"
      >
        {name}
      </a>
    </li>
  );
}
