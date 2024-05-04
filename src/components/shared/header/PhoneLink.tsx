import { useTranslations } from "next-intl";
import IconPhone from "../icons/IconPhone";

export default function PhoneLink() {
  const t = useTranslations("Footer");

  return (
    <a
      href={`tel:+${t("phone").replace(/\D/g, "")}`}
      rel="noopener noreferrer"
      className="p-2 outline-none text-white-text laptop:hover:text-accent laptop:focus-visible:text-accent 
      transition-[color] duration-[300ms] ease-out-quart"
    >
      <IconPhone />
    </a>
  );
}