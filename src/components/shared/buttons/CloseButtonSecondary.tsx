import Image from "next/image";

interface CloseButtonSecondaryProps {
  onClick?: () => void;
}

export default function CloseButtonSecondary({
  onClick,
}: CloseButtonSecondaryProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label="close button"
      className="absolute top-2 right-2 flex justify-center items-center h-8 w-8 tablet:h-10 tablet:w-10"
    >
      <Image
        src={`/images/icons/close.svg`}
        width="0"
        height="0"
        alt="close icon"
        sizes="100%"
        className="w-full h-full"
      />
    </button>
  );
}
