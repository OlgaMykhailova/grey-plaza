"use client";
import Image from "next/image";
import { InView, useInView } from "react-intersection-observer";

interface BenefitsListItemProps {
  benefit: { title: string; description: string; icon: string };
}

export default function BenefitsListItem({ benefit }: BenefitsListItemProps) {
  const { title, description, icon } = benefit;
  const { ref, inView } = useInView({
    threshold: 0.75,
  });

  return (
    <li
      ref={ref}
      className="flex gap-4 px-3 py-4 [&:not(:last-child)]:mb-2 text-white-text"
    >
      <div
        className={`after:content-[''] after:absolute after:left-0 after:top-0 after:w-[1px] 
        after:h-0 overflow-hidden ${inView && "h-full"}`}
      >
        <Image
          src={`/images/icons/${icon}`}
          width="0"
          height="0"
          alt={title}
          className="w-[32px] h-[32px]"
        />
      </div>
      <div>
        <h3 className="mb-2 text-mdb">{title}</h3>
        <p className="text-base">{description}</p>
      </div>
    </li>
  );
}
