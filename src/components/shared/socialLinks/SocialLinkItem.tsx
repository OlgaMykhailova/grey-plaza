import Image from "next/image";

interface SocialLinkItemProps {
  social: { name: string; icon: string; url: string };
}

export default function SocialLinkItem({ social }: SocialLinkItemProps) {
  const { name, icon, url } = social;
  return (
    <li className="rounded-full">
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer nofollow"
        aria-label={name}
        className="relative flex items-center justify-center w-[42px] h-[42px] outline-none before:content-[''] before:absolute before:w-0 before:h-0 before:rounded-full before:bg-secondary
        transition before:duration-300 before:ease-out-quart laptop:focus-visible:before:w-[38px] laptop:focus-visible:before:h-[38px] laptop:hover:before:w-[38px] laptop:hover:before:h-[38px] before:blur-[2px]"
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
