import { useLocale } from "next-intl";
import Image from "next/image";
import Link from "next/link";

interface LogoLinkProps {
  className?: string;
}

export default function LogoLink({ className }: LogoLinkProps) {
  const locale = useLocale();

  return (
    <Link
      href={`/${locale}`}
      className={`group outline-none laptop:hover:scale-[1.03] laptop:focus-visible:scale-[1.03] transition-[transform] 
    duration-[600ms] ease-out-quart ${className}`}
    >
      <Image
        src={`/images/icons/logoWhite.svg`}
        width="0"
        height="0"
        alt="logo"
        className={`w-full h-auto`}
      />
    </Link>
  );
}
