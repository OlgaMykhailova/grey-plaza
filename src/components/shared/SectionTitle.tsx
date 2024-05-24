interface SectionTitleProps {
  children: string;
  className?: string;
}

export default function SectionTitle({
  children,
  className,
}: SectionTitleProps) {
  return (
    <h2
      className={`mb-[20px] text-xlsb tablet:text-2xlsb text-center text-black ${className}`}
    >
      {children}
    </h2>
  );
}
