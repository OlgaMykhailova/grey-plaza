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
    rootMargin: "-45% 0% -54% 0%",
  });

  return (
    <li
      ref={ref}
      className="flex gap-4 tablet:w-[46.4%] px-3 py-4 [&:not(:last-child)]:mb-2 tablet:[&:not(:last-child)]:mb-0 text-white-text"
    >
      <Image
        src={`/images/icons/${icon}`}
        width="0"
        height="0"
        alt={title}
        className={`w-[32px] h-[32px] ${inView ? "animate-benefit" : ""}`}
      />

      <div>
        <h3 className="mb-2 text-mdb">{title}</h3>
        <p className={`text-base`}>{description}</p>
      </div>
    </li>
  );
}
