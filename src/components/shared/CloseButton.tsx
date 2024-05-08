import IconClose from "./icons/IconClose";

interface CloseButtonProps {
  onClick?: () => void;
}

export default function CloseButton({ onClick }: CloseButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label="close button"
      className="absolute top-2 right-2 flex justify-center items-center h-10 w-10 p-2"
    >
      <IconClose />
    </button>
  );
}
