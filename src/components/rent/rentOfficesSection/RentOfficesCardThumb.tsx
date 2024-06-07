import { useTranslations } from "next-intl";
import Button from "../../shared/buttons/Button";

interface RentOfficesCardThumbProps {
  office: {
    id: string;
    area: string;
    building: string;
    purpose: string;
    photos: string[];
  };
}

export default function RentOfficesCardThumb({
  office,
}: RentOfficesCardThumbProps) {
  const t = useTranslations("");
  const { area, building, purpose } = office;

  return (
    <div className="mt-2 text-xs text-black">
      <p className="mb-1">
        {t("Rent.area")}
        <span className="text-xsb">
          {area}
          {t("Rent.m2")}
        </span>
      </p>
      <p className="mb-1">
        {t("Rent.building")}
        <span className="text-xsb">{building}</span>
      </p>
      <p className="mb-3">{purpose}</p>
      <Button size="small">{t("Buttons.leaveRequest")}</Button>
    </div>
  );
}
