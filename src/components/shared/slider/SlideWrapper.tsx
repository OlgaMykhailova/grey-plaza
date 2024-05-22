import Image from "next/image";
import { ReactNode } from "react";

interface SlideWrapperProps {
  children: ReactNode;
  className?: string;
}

export default function SlideWrapper({
  children,
  className = "",
}: SlideWrapperProps) {
  return (
    <div
      className={`relative w-full h-full p-4 border border-primary ${className}`}
    >
      <Image
        src={`/images/icons/corner.svg`}
        width="0"
        height="0"
        alt=""
        sizes="100%"
        className={`absolute top-0 left-0 w-16 h-16`}
      />
      <Image
        src={`/images/icons/corner.svg`}
        width="0"
        height="0"
        alt=""
        sizes="100%"
        className={`absolute bottom-0 right-0 w-16 h-16 rotate-180`}
      />
      {children}
    </div>
  );
}
