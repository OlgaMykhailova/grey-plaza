import { useTranslations } from "next-intl";
import EquipmentListItem from "./EquipmentListItem";

export default function EquipmentList() {
  const t = useTranslations("Equipment");
  const equipmentList = [
    { title: t("dieselGenerator"), icon: "dieselGenerator.svg" },
    { title: t("boilerHouse"), icon: "boilerHouse.svg" },
    { title: t("climate"), icon: "climate.svg" },
    { title: t("monitoring"), icon: "videoMonitoring.svg" },
  ];
  return (
    <ul className="p-4">
      {equipmentList.map((equipment, idx) => (
        <EquipmentListItem key={idx} equipment={equipment} />
      ))}
    </ul>
  );
}
