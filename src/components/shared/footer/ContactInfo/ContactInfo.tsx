import { useTranslations } from "next-intl";
import ContactInfoItem from "./ContactInfoItem";

export default function ContactInfo() {
  const t = useTranslations("Footer");

  // TODO change google map link when is ready

  const contactsList = [
    {
      icon: "phone.svg",
      url: `tel:+${t("phone").replace(/\D/g, "")}`,
      name: t("phone"),
    },
    { icon: "mail.svg", url: `mailto:${t("email")}`, name: t("email") },
    {
      icon: "locationSmall.svg",
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
