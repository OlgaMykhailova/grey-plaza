import { ReactNode } from "react";

interface TextButtonProps {
  children: ReactNode;
  className?: string;
}

export default function TextButton({ children, className }: TextButtonProps) {
  return (
    <button
      type="button"
      className={`w-[320px] h-10 border-y border-primary ${className}`}
    >
      {children}
    </button>
  );
}
