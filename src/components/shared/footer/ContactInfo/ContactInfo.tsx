import { useTranslations } from "next-intl";
import ContactInfoItem from "./ContactInfoItem";
import IconPhone from "../../icons/IconPhone";
import IconEmail from "../../icons/IconEmail";
import IconLocationSmall from "../../icons/IconLocationSmall";

export default function ContactInfo() {
  const t = useTranslations("Footer");

  // TODO change google map link when is ready

  const contactsList = [
    {
      icon: <IconPhone />,
      url: `tel:+${t("phone").replace(/\D/g, "")}`,
      name: t("phone"),
    },
    { icon: <IconEmail />, url: `mailto:${t("email")}`, name: t("email") },
    {
      icon: <IconLocationSmall />,
      url: "https://maps.app.goo.gl/XdyPTk5aaQVUhvH78",
      name: t("address"),
    },
  ];

  return (
    <ul className="flex flex-col items-center">
      {contactsList.map((contact, idx) => (
        <ContactInfoItem key={idx} contact={contact} />
      ))}
    </ul>
  );
}
