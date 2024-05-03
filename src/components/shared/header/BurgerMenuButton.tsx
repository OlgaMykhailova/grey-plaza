interface BurgerMenuButtonProps {
  isHeaderMenuOpened?: boolean;
  toggleHeaderMenuOpen?: () => void;
}
const firstLineBaseStyles = "top-[3px] left-0 opacity-100";
const firstLineTransformStyles = "top-[-2px] left-[3px] opacity-0";
const secondLineBaseStyles = "top-[11px] left-0";
const secondLineTransformStyles = "rotate-[-45deg] top-[11px]";
const thirdLineBaseStyles = "top-[19px] left-0";
const thirdLineTransformStyles = "rotate-45 top-[11px]";

export default function BurgerMenuButton({
  isHeaderMenuOpened,
  toggleHeaderMenuOpen,
}: BurgerMenuButtonProps) {
  return (
    <button
      aria-label="open menu button"
      type="button"
      onClick={toggleHeaderMenuOpen}
      className="group relative w-10 h-10 p-2 outline-none"
    >
      <div className="w-full h-full rotate-0">
        <span
          className={`block absolute w-full h-[1.8px] rounded-md bg-white-text rotate-0 
          transition duration-[600ms] ease-out-quart ${
            isHeaderMenuOpened ? firstLineTransformStyles : firstLineBaseStyles
          }`}
        ></span>
        <span
          className={`block absolute left-0 w-full h-[1.8px] rounded-md bg-white-text rotate-0 
          transition duration-[600ms] ease-out-quart ${
            isHeaderMenuOpened
              ? secondLineTransformStyles
              : secondLineBaseStyles
          }`}
        ></span>
        <span
          className={`block absolute left-0 w-full h-[1.8px] rounded-md bg-white-text rotate-0  
          transition duration-[600ms] ease-out-quart ${
            isHeaderMenuOpened ? thirdLineTransformStyles : thirdLineBaseStyles
          }`}
        ></span>
      </div>
    </button>
  );
}
