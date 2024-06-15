"use client";
import { motion } from "framer-motion";
import { itemVariants } from "../navigationMenu/NavigationMenuItem";
import SocialLinkItem from "./SocialLinkItem";

export default function SocialLinks() {
  // TODO change social links when is ready

  const socialList = [
    {
      name: "facebook",
      icon: "facebook.svg",
      url: "https://www.facebook.com/Greyplazabc",
    },
    {
      name: "whatsapp",
      icon: "whatsapp.svg",
      url: "https://wa.me/380504448694",
    },
    {
      name: "telegram",
      icon: "telegram.svg",
      url: "https://t.me/Tamara_Korshun",
    },
  ];

  return (
    <motion.ul
      variants={itemVariants}
      className="flex justify-center tablet:justify-start gap-4"
    >
      {socialList.map((social, idx) => (
        <SocialLinkItem key={idx} social={social} />
      ))}
    </motion.ul>
  );
}
