import { useTranslations } from "next-intl";
import BenefitsListItem from "./BenefitsListItem";

export default function BenefitsList() {
  const t = useTranslations("Benefits");
  const benefitsList = [
    {
      title: t("location"),
      description: t("locationDescription"),
      icon: "location.svg",
    },
    {
      title: t("transport"),
      description: t("transportDescription"),
      icon: "truck.svg",
    },
    {
      title: t("junction"),
      description: t("junctionDescription"),
      icon: "road.svg",
    },
    {
      title: t("security"),
      description: t("securityDescription"),
      icon: "camera.svg",
    },
    {
      title: t("charge"),
      description: t("chargeDescription"),
      icon: "charge.svg",
    },
    {
      title: t("shelter"),
      description: t("shelterDescription"),
      icon: "shelter.svg",
    },
  ];
  return (
    <ul>
      {benefitsList.map((benefit, idx) => (
        <BenefitsListItem key={idx} benefit={benefit} />
      ))}
    </ul>
  );
}
