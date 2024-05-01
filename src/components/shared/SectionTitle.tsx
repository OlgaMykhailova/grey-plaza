interface SectionTitleProps {
  children: string;
  className?: string;
}

export default function SectionTitle({
  children,
  className,
}: SectionTitleProps) {
  return (
    <h2 className={`mb-[20px] text-xlsb text-center ${className}`}>
      {children}
    </h2>
  );
}
