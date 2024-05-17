import Image from "next/image";

interface ZoomButtonProps {
  onClick?: () => void;
  isZoomed: boolean;
}

export default function ZoomButton({ onClick, isZoomed }: ZoomButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label="zoom button"
      className="absolute bottom-2 right-2 flex justify-center items-center h-8 w-8"
    >
      <Image
        src={`${
          isZoomed ? "/images/icons/zoomOut.svg" : "/images/icons/zoomIn.svg"
        }`}
        width="0"
        height="0"
        alt="zoom icon"
        sizes="100%"
        className="w-full h-full"
      />
    </button>
  );
}
