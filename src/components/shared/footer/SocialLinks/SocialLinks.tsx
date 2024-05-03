import SocialLinkItem from "./SocialLinkItem";

export default function SocialLinks() {
  // TODO change social links when is ready

  const socialList = [
    {
      name: "facebook",
      icon: "facebook.svg",
      url: "https://www.facebook.com/Greyplazabc",
    },
    { name: "instagram", icon: "instagram.svg", url: "" },
    { name: "tiktok", icon: "tiktok.svg", url: "" },
    { name: "whatsapp", icon: "whatsapp.svg", url: "" },
    { name: "telegram", icon: "telegram.svg", url: "" },
  ];

  return (
    <ul className="flex justify-between gap-4">
      {socialList.map((social, idx) => (
        <SocialLinkItem key={idx} social={social} />
      ))}
    </ul>
  );
}
