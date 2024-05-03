import { useLocale } from "next-intl";
import Image from "next/image";
import Link from "next/link";

interface LogoLinkProps {
  className?: string;
}

export default function LogoLink({ className }: LogoLinkProps) {
  const locale = useLocale();

  return (
    <Link href={`/${locale}#top`} className="group outline-none">
      <Image
        src={`/images/icons/logoWhite.svg`}
        width="0"
        height="0"
        alt="logo"
        className={`laptop:group-hover:scale-[1.03] laptop:group-focus-visible:scale-[1.03] transition-[transform] 
        duration-[300ms] ease-out-quart ${className}`}
      />
    </Link>
  );
}
