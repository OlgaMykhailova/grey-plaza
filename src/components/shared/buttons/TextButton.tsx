import { ReactNode } from "react";

interface TextButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

export default function TextButton({
  children,
  className,
  onClick,
}: TextButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`w-[320px] h-10 outline-none border-y border-primary text-baseb text-black laptop:hover:text-primary 
      laptop:focus-visible:text-primary transition-[color] duration-[300ms] ease-out-quart ${className}`}
    >
      {children}
    </button>
  );
}
