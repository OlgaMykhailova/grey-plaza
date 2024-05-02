import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export default function Section({ children, className, id }: SectionProps) {
  return (
    <section
      id={id}
      className={`container max-w-[560px] py-[40px] [&:not(:last-child)]:mb-[40px] scroll-mt-[20px] ${className}`}
    >
      {children}
    </section>
  );
}
