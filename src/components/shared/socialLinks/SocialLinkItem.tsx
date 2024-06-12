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
        rel="noopener noreferrer nofollow"
        aria-label={name}
        className="relative flex items-center justify-center w-[42px] h-[42px] outline-none after:content-[''] after:absolute after:w-0 after:h-0 after:rounded-full after:bg-secondary
        transition after:duration-300 after:ease-out-quart laptop:focus-visible:after:w-[38px] laptop:focus-visible:after:h-[38px] laptop:hover:after:w-[38px] laptop:hover:after:h-[38px] after:blur-[2px]"
      >
        <Image
          src={`/images/icons/${icon}`}
          width="0"
          height="0"
          alt="phone"
          className="z-10 w-9 h-9"
        />
      </a>
    </li>
  );
}
