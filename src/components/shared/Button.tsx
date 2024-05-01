interface ButtonProps {
  children: string;
  variant?: "primary" | "secondary";
  size?: "big" | "small";
  className?: string;
  type?: "submit" | "button";
  disabled?: boolean;
  onClick?: () => void;
}

export default function Button({
  children,
  variant = "primary",
  size = "big",
  className,
  type = "button",
  disabled = false,
  onClick,
}: ButtonProps) {
  const primaryColor = "bg-accent";
  const secondaryColor = "bg-primary border-solid border-[1px] border-white-bg";
  return (
    <button
      aria-label="contact button"
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`group ${
        variant === "primary" ? primaryColor : secondaryColor
      } ${
        size === "big" ? "w-[180px] h-[56px]" : "w-[162px] h-[40px]"
      } text-baseb text-white-text ${className}`}
    >
      {children}
    </button>
  );
}
