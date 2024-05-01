interface SectionTitleProps {
  children: string;
  className?: string;
}

export const SectionTitle = ({ children, className }: SectionTitleProps) => {
  return (
    <h2 className={`center mb-[20px] text-xlsb ${className}`}>{children}</h2>
  );
};
