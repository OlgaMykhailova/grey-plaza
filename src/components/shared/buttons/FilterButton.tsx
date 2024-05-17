interface FilterButtonProps {
  children: string;
  className?: string;
  currentCategory?: string;
  handleCLick?: () => void;
}

export default function FilterButton({
  children,
  className = "",
  handleCLick,
  currentCategory,
}: FilterButtonProps) {
  return (
    <button
      type="button"
      onClick={handleCLick}
      className={`flex items-center justify-center w-full h-10 text-baseb border ${
        currentCategory === children
          ? "text-white-bgSecondary bg-primary"
          : "text-primary border-primary bg-white-bgSecondary"
      } ${className}`}
    >
      {children}
    </button>
  );
}
