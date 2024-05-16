interface FilterButtonProps {
  children: string;
  className?: string;
}

export default function FilterButton({
  children,
  className = "",
}: FilterButtonProps) {
  return (
    <button
      type="button"
      className={`flex items-center justify-center w-full h-10 text-primary text-baseb border border-primary ${className}`}
    >
      {children}
    </button>
  );
}
