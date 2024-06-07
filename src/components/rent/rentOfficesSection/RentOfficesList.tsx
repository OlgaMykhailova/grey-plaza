import { officesData } from "@/src/mockedData/officesData";
import RentOfficesCard from "./RentOfficesCard";

export default function RentOfficesList() {
  return (
    <ul className="flex flex-col tablet:flex-row flex-wrap gap-5 tablet:gap-4">
      {officesData.category300.map((office) => (
        <li
          key={office.id}
          className="w-full tablet:w-[calc((100%-16px)/2)] laptop:w-[calc((100%-32px)/3)]"
        >
          <RentOfficesCard office={office} />
        </li>
      ))}
    </ul>
  );
}
