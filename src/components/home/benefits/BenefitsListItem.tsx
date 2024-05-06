"use client";
import Image from "next/image";
import { InView, useInView } from "react-intersection-observer";

interface BenefitsListItemProps {
  benefit: { title: string; description: string; icon: string };
}

export default function BenefitsListItem({ benefit }: BenefitsListItemProps) {
  const { title, description, icon } = benefit;
  const { ref, inView } = useInView({
    threshold: 0.01,
    rootMargin: "-49% 0% -49% 0%",
  });

  return (
    <li
      ref={ref}
      className="flex gap-4 px-3 py-4 [&:not(:last-child)]:mb-2 text-white-text"
    >
      <Image
        src={`/images/icons/${icon}`}
        width="0"
        height="0"
        alt={title}
        className="w-[32px] h-[32px]"
      />

      <div>
        <h3 className="mb-2 text-mdb">{title}</h3>
        <p
          className={`relative text-base after:content-[''] after:absolute after:left-[-32px] after:top-[8px] after:w-[1px] after:bg-accent
        after:h-0 after:overflow-hidden after:transition-height after:duration-[600ms] ease-out-quart ${
          inView && "after:h-[calc(100%-12px)]"
        }`}
        >
          {description}
        </p>
      </div>
    </li>
  );
}
