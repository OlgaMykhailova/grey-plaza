import Image from "next/image";
import IconZoomIn from "../icons/IconZoomIn";
import IconZoomOut from "../icons/IconZoomOut";

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
      className="absolute bottom-3 right-3 laptop:bottom-4 laptop:right-4 flex justify-center items-center h-8 w-8 tablet:h-10 tablet:w-10 text-primary laptop:hover:text-accent
      laptop:focus-visible:text-accent transition-[color] duration-[300ms] ease-out-quart"
    >
      {isZoomed ? (
        <IconZoomOut className="w-full h-full" />
      ) : (
        <IconZoomIn className="w-full h-full" />
      )}
    </button>
  );
}
