import IconClose from "./icons/IconClose";

interface CloseButtonProps {
  onClose?: () => void;
}

export default function CloseButton({ onClose }: CloseButtonProps) {
  return (
    <button
      type="button"
      onClick={onClose}
      aria-label="close button"
      className="flex justify-center items-center absolute h-10 w-10 p-2"
    >
      <IconClose />
    </button>
  );
}
