import Image from "next/image";

interface SocialLinkItemProps {
  social: { name: string; icon: string; url: string };
}

export default function SocialLinkItem({ social }: SocialLinkItemProps) {
  const { name, icon, url } = social;
  return (
    <li>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={name}
        className="outline-none"
      >
        <Image
          src={`/images/icons/${icon}`}
          width="0"
          height="0"
          alt="phone"
          className="w-8 h-8"
        />
      </a>
    </li>
  );
}
