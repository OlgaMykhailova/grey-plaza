"use client";
import { useState } from "react";

interface FilterButtonProps {
  children: string;
  className?: string;
}

export default function FilterButton({
  children,
  className = "",
}: FilterButtonProps) {
  const [isChoosed, setIsChoosed] = useState(false);

  return (
    <button
      type="button"
      onClick={() => setIsChoosed(true)}
      className={`flex items-center justify-center w-full h-10 text-baseb border ${
        isChoosed
          ? "text-white-bgSecondary bg-primary"
          : "text-primary border-primary bg-white-bgSecondary"
      } ${className}`}
    >
      {children}
    </button>
  );
}
