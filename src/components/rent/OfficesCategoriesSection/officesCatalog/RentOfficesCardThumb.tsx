import { useTranslations } from "next-intl";
import Button from "../../../shared/buttons/Button";

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
    <div className="flex flex-wrap justify-between items-end gap-x-5 gap-y-3 h-auto mt-3 laptop:mt-4 text-xs laptop:text-base text-black">
      <div className="max-w-[40%]">
        <p className="mb-1">
          {t("Rent.area")}
          <span className="text-xsb laptop:text-baseb">
            {area}
            {t("Rent.m2")}
          </span>
        </p>
        <p className="mb-1">
          {t("Rent.building")}
          <span className="text-xsb laptop:text-baseb">{building}</span>
        </p>
        <p>{purpose}</p>
      </div>
      <Button size="small">{t("Buttons.leaveRequest")}</Button>
    </div>
  );
}
